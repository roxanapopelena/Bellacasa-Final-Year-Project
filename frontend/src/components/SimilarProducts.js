import React from 'react';
import {BACKEND} from '../config';
import {Link } from 'react-router-dom';

import'./assets/styles/SimilarProducts.css';

class SimilarProducts extends React.Component {
    state = {
        isLoading:false,
        data:[]
      } 

    componentDidMount = () => {
        const url = `${BACKEND.ADDRESS}/products/products-by-category/${this.props.details.category}`
        fetch(url)
          .then( (response) => response.json() )
          .then( (data) => {
            //console.log(data);
            this.setState({ data: data.products, isLoading:true})
          })
           .catch ((err) => {
             console.log("something went wrong ", err)
          }
        );
      }

      displayProducts = () => {
        return this.state.data.map((details, i) => {
            return (
                <Link key={i} title={details.name} className='similar_product_image' to={"/Products/" + details.id}>
                    <img alt ='product_image' src={details.url}></img>
                </Link>
            )})
      }

      render(){
          return(
              <div>
            <h2>Similar products:</h2>
              <div className='similar__products'>
                  
                  {this.state.isLoading ? this.displayProducts(): <p>loading...</p>}
              </div>
              </div>
          )
      }

}

export default SimilarProducts;