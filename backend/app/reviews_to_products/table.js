const pool = require('../../databasePool');

class ReviewsToProductsTable {
    static storeProductReview ({reviewId, productId}) {
        return new Promise((resolve,reject) => {
            pool.query(
                `INSERT INTO reviews_to_products ("reviewId", "productId") VALUES ($1, $2)`,
                [reviewId, productId],
                (error,response) => {
                    if (error) return reject(error);
                    
                    resolve();
                }
            )
        })
    }
}

//ReviewsToProductsTable.storeProductReview({reviewId:1,productId:2})
//.then(() => console.log('stored product review'))
//.catch(error => console.error('error',error));

module.exports = ReviewsToProductsTable