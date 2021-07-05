const {Router} = require('express');
const { getReview, updateReview, checkReview } = require('../reviews/table');
const ReviewsTable = require('../reviews/table');
const ReviewsToAccountTable = require('../reviews_to_account/table');
const ReviewsToProductsTable = require('../reviews_to_products/table');
const { authenticatedAccount} = require ('./helper');

const router = new Router();

    router.post('/new', (req,res,next) => {
        const {content, rating, productId} = req.body;
        let accountId;
        let review_id, account_id;

        authenticatedAccount({ sessionString : req.cookies.sessionString })
        .then(({ account })=>{
            accountId= account.id;
            account_id = accountId

            return ReviewsTable.checkReview({productId, accountId})
        })
        .then(({ accountId})=>{
            accountId = account_id;

            return ReviewsTable.storeReview({content, rating})
        })
        .then(({reviewId}) => {
            content.id = reviewId;
            review_id = reviewId
    
            return ReviewsToAccountTable.storeAccountReview({ accountId, reviewId });
        })
        .then((reviewId) => {
            reviewId = review_id;
    
            return ReviewsToProductsTable.storeProductReview({ reviewId, productId });
        })
        
        
        .then(() => res.json({ message: 'successfully created review'}))
        .catch(error => next(error));
    });

    router.get('/:productId', (req,res,next) => {
        getReview({productId: req.params.productId})
        .then(({ reviews }) => res.json({ reviews }))
        .catch(error => next(error));
    });

    router.put('/update', (req,res,next) => {
        const {content, rating, id} = req.body;
    
        ReviewsTable.updateReview ({ content, rating, id })
    
        .then(() => res.json({ message: 'successfully updated review'}))
        .catch(error=>next(error));
    });

    module.exports= router;

