import React from 'react';
import {BACKEND} from '../config';
import './assets/styles/ProductDetails.css';

class ProductDetails extends React.Component {
    state={
        isLoading:false,
        data:[]
    }
    componentDidMount = () => {
        const url = `${BACKEND.ADDRESS}/colors/product-colors/${this.props.details.id}`
        fetch(url)
          .then( (response) => response.json() )
          .then( (data) => {
          this.setState({data: data.colors, isLoading: true})
          //console.log(this.props.details.id)
        })
          .catch ((err) => {
            console.log("something went wrong ", err)
          }
        );
      }

      displayColors = () => {
        if (this.state.data.length === 0) {
          return (
            <p>No colors available</p>
          )
        }else{ 
          return this.state.data.map((colors, i) => {
            return(
                <img key={i} title={colors.name} className='product_color_image' alt ='color_image' src={colors.url}></img>
          )})
            }
        }

    render(){
        return(
            <div className='product__details'>
              <div className='product_image_container'>
                <img alt ='product_image' src={this.props.details.url}></img>
                </div>
                
                <div className='product__info__container'>
                    <div className='prdct__info'>
                        <p><big className='label'>NAME:{' '}</big>{this.props.details.name}</p>
                        <p><big className='label'>CATEGORY:{' '}</big>{this.props.details.category}</p>
                        <p><big className='label'>ASK FOR AN OFFER:{' '}</big> +40000000000</p>
                        <big className='label'>COLORS:{' '}</big>
                        <div className='product__colors'>
                        {this.state.isLoading ? this.displayColors(): <p>loading...</p>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;
