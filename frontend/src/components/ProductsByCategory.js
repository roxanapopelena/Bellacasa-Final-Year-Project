import React, {useState, useEffect} from "react";
import Product from './Product';
import {useParams} from "react-router-dom";
import {BACKEND} from '../config';
import './assets/styles/Catalogue.css';

function ProductsByCategory() {
    let { category } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        fetch(`${BACKEND.ADDRESS}/products/products-by-category/${category}`)
         .then(resp => resp.json())
         .then(response => {
            setData(response.products);
            setIsLoading(true);
            //console.log(response.products);
          })
          .catch(error => console.log(error));
      }, [category]);

      const displayProducts = ()=> {
        return data.map((details, i) => (<Product key={i} details={details} />))
      }

    return (
      <div className='item-container' style={{flexWrap: 'wrap' }}>
        {isLoading ? displayProducts() : <p></p>}
      </div>
    );
  }

  export default ProductsByCategory;