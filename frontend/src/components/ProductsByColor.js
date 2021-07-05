import React, {useState, useEffect} from "react";
import Product from './Product';
import {useParams} from "react-router-dom";
import {BACKEND} from '../config';
import './assets/styles/Catalogue.css';

function ProductsByColor() {
    let { colorId } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        //window.scrollTo(0, 0)
        fetch(`${BACKEND.ADDRESS}/products/products-by-color/${colorId}`)
         .then(resp => resp.json())
         .then(response => {
            setData(response.products);
            setIsLoading(true);
            //console.log(response.products);
          })
          .catch(error => console.log(error));
      }, [colorId]);

      const displayProducts = ()=> {
        return data.map((details, i) => (<Product key={i} details={details} />))
      }

    return (
      <div className='item-container' style={{flexWrap: 'wrap' }}>
        {isLoading ? displayProducts() : <p></p>}
      </div>
    );
  }

  export default ProductsByColor;