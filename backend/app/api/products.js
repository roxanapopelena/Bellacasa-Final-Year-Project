const {Router} = require('express');
const {getProductType,
       getProductCategory,
       getProductsByCategory,
       getProductsByColor,
       getProductDetails
    } = require ('../products/table');

const router = new Router();

router.get('/product-types', (req,res,next) => {
    getProductType()
    .then(({ productTypes }) => res.json({ productTypes }))
    .catch(error => next(error));
});

router.get('/product-categories/:type', (req,res,next) => {
    getProductCategory({type: req.params.type})
    .then(({ productCategories }) => res.json({ productCategories }))
    .catch(error => next(error));
});

router.get('/products-by-category/:category', (req,res,next) => {
    getProductsByCategory({category: req.params.category})
    .then(({ products }) => res.json({ products }))
    .catch(error => next(error));
});

router.get('/products-by-color/:colorId', (req,res,next) => {
    getProductsByColor({colorId: req.params.colorId})
    .then(({ products }) => res.json({ products }))
    .catch(error => next(error));
});

router.get('/product-details/:id', (req,res,next) => {
    getProductDetails({id: req.params.id})
    .then(({ details }) => res.json({ details }))
    .catch(error => next(error));
});

module.exports= router;