import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles/Product.css';

class Product extends React.Component {
     render(){
    return (
        <Link className='product' to={"/Products/" + this.props.details.id}>
            <div className='product__info'>
                <p>{this.props.details.name}</p>
                <p className='product__category'></p>
                    <strong>{this.props.details.category}</strong>
                
            </div>
            <img alt ='product_image' src={this.props.details.url}></img>
        </Link>
    )
}
}

export default Product;
