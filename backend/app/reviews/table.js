const pool = require('../../databasePool');

class ReviewsTable {
    static storeReview ({content, rating}) {
        return new Promise((resolve,reject) => {
            pool.query(
                `INSERT INTO reviews (content, rating, timestamp) VALUES ($1 , $2, current_timestamp) RETURNING id`,
                [content, rating],
                (error,response) => {
                    if (error) return reject(error);

                    const reviewId = response.rows[0].id;

                    resolve({reviewId});
                }
            )
        })
    }
    static getReview ({productId}) {
        return new Promise((resolve,reject) => {
            pool.query(
                `SELECT account."firstName", account."lastName", reviews.id, reviews.rating, to_char(reviews.timestamp, 'dd/mm/yyyy') AS timestamp, reviews.content FROM account 
                JOIN reviews_to_account ON account.id=reviews_to_account."accountId" 
                JOIN reviews ON reviews_to_account."reviewId"=reviews.id
                JOIN reviews_to_products ON reviews.id=reviews_to_products."reviewId"
                WHERE reviews_to_products."productId"=$1`,
                [productId],
                (error,response) => {
                    if(error) return reject(error);

                    resolve({reviews: response.rows});
                }
            )
        })
    }
    static checkReview ({accountId, productId}) {
        return new Promise((resolve,reject) => {
            pool.query(
                `SELECT reviews_to_account."accountId", reviews_to_products."productId" FROM reviews_to_account 
                JOIN reviews ON reviews_to_account."reviewId"=reviews.id 
                JOIN reviews_to_products ON reviews.id=reviews_to_products."reviewId" 
                WHERE reviews_to_account."accountId"=$1 AND reviews_to_products."productId"=$2`,
                [accountId, productId],
                (error,response) => {
                    if(error) return reject(error);
                    if (response.rows.length > 0) {
                        const error= new Error('you already have a review for this product');
    
                        error.statusCode=409;
                
                        return reject(error);
                    }else{
                        resolve({check: response.rows});
                    }
                }
            )
        })
    }
    static updateReview ({ content, rating, id }) {
        return new Promise ((resolve,reject) => {
            pool.query(
                'UPDATE reviews SET content =$1, rating=$2 WHERE id = $3',
                [content, rating, id],
                (error,response) => {
                    if(error) return reject(error);

                    resolve();
                }
            )
        });
    }
}
//ReviewsTable.checkReview({accountId:1, productId:67})
//.then(check => console.log(check))
//.catch(error => console.error('error',error));

//ReviewsTable.storeReview({content: 'this is a review'})
//.then(reviewId => console.log(reviewId))
//.catch(error => console.error('error',error));

//ReviewsTable.getReview({productId:3})
//.then(productId => console.log(productId))
//.catch(error => console.error('error',error));

//ReviewsToAccountTable.updateAccountReview({id:3, content:' update2'})
//.then(content => console.log(content))
//.catch(error => console.error('error',error));

module.exports = ReviewsTable