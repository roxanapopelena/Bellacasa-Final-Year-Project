const pool = require('../../databasePool');

class ReviewsToAccountTable {
    static storeAccountReview ({reviewId, accountId}) {
        return new Promise((resolve,reject) => {
            pool.query(
                `INSERT INTO reviews_to_account ("reviewId", "accountId") VALUES ($1, $2)`,
                [reviewId, accountId],
                (error,response) => {
                    if (error) return reject(error);
                    
                    resolve();
                }
            )
        })
    }
    static getAccountReviews({ accountId}) {
        return new Promise((resolve,reject) => {
          pool.query(
              `SELECT products.name, products.display_name,products.category, products.url, reviews.id AS "reviewId", reviews.content, reviews.rating FROM reviews 
              JOIN reviews_to_account on reviews.id=reviews_to_account."reviewId"
              JOIN reviews_to_products on reviews.id=reviews_to_products."reviewId"
              JOIN products on reviews_to_products."productId"=products.id
              WHERE reviews_to_account."accountId"=$1`,
              [accountId],
              (error, response) => {
                  if(error) return reject(error);

                  resolve({accountReviews: response.rows});
              }
          )  
        })
    }
}

//ReviewsToAccountTable.storeAccountReview({reviewId:1,accountId:1})
//.catch(error => console.error('error',error));

//ReviewsToAccountTable.getAccountReviews({accountId:1})
//.then(accountId => console.log(accountId))
//.catch(error => console.error('error',error));


module.exports = ReviewsToAccountTable