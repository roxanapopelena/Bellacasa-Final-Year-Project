const pool = require('../../databasePool');

class ColorsTable {
  
  static getColors() {
    return new Promise((resolve,reject) => {
      pool.query(
          'SELECT id, name, url FROM colors ORDER BY id ASC',
          (error, response) => {
              if(error) return reject(error);

              resolve({colors: response.rows});
          }
      )  
    })
}
    static getProductColors({id}) {
        return new Promise((resolve,reject) => {
          pool.query(
            `SELECT colors.id, colors.name, colors.url FROM colors 
            INNER JOIN colors_to_products ON colors.id=colors_to_products."colorId"
            WHERE colors_to_products."productId"=$1`,
              [id],
              (error, response) => {
                  if(error) return reject(error);

                  resolve({colors: response.rows});
              }
          )  
        })
    }
}
module.exports = ColorsTable