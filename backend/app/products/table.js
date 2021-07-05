const pool = require('../../databasePool');


class ProductsTable {
    static getProductType() {
        return new Promise((resolve,reject) => {
          pool.query(
              'SELECT DISTINCT type, display_name FROM products ORDER BY type ASC',
              (error, response) => {
                  if(error) return reject(error);

                  resolve({productTypes: response.rows});
              }
          )  
        })
    }
    static getProductCategory({type}) {
        return new Promise((resolve,reject) => {
          pool.query(
              'SELECT DISTINCT category FROM products WHERE products.type=$1 ORDER BY category ASC',
              [type],
              (error, response) => {
                  if(error) return reject(error);

                  if (response.rows.length === 0) return reject(new Error('invalid type'));

                  resolve({productCategories: response.rows});
              }
          )  
        })
    }
    static getProductsByCategory({category}) {
        return new Promise((resolve,reject) => {
          pool.query(
            `SELECT  id, name, category, url FROM products WHERE category=$1 ORDER BY id ASC`,
              [category],
              (error, response) => {
                  if(error) return reject(error);

                  if (response.rows.length === 0) return reject(new Error('invalid category'));

                  resolve({products: response.rows});
              }
          )  
        })
    }
    static getProductsByColor({colorId}) {
        return new Promise((resolve,reject) => {
          pool.query(
            `SELECT products.id, products.name, products.category, products.url from products 
            INNER JOIN colors_to_products ON products.id=colors_to_products."productId" 
            WHERE colors_to_products."colorId"=$1`,
              [colorId],
              (error, response) => {
                  if(error) return reject(error);

                  if (response.rows.length === 0) return reject(new Error('invalid colorId'));

                  resolve({products: response.rows});
              }
          )  
        })
    }
    static getProductDetails({id}) {
        return new Promise((resolve,reject) => {
          pool.query(
            `SELECT products.id, products.name, products.category, products.url, products.display_name from products WHERE products.id=$1`,
              [id],
              (error, response) => {
                  if(error) return reject(error);

                  if (response.rows.length === 0) return reject(new Error('invalid id'));

                  resolve({details: response.rows});
              }
          )  
        })
    }
}

//ProductsTable.getProductsByCategory({category: 'Adventure'})
//.then(products => console.log(products))
//.catch(error => console.error('error',error));

//ProductsTable.getProductCategory({type: 'interior_door'})
//.then(categories => console.log(categories))
//.catch(error => console.error('error',error));

module.exports = ProductsTable