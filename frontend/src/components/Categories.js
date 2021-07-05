import React from 'react';
import {BACKEND} from '../config';
import { Link } from "react-router-dom";


class Categories extends React.Component {
    state = {
      display:false,
      data:[]
    }    
  
    loadCategories = () => {
      const url = `${BACKEND.ADDRESS}/products/product-categories/${this.props.details.type}`
      fetch(url)
        .then( (response) => response.json() )
        .then( (data) => {
          //console.log(data);
          this.setState({ data: data.productCategories})
        })
         .catch ((err) => {
           console.log("something went wrong ", err)
        }
      );
    }
  
    handleCategoryDisplay = () => {
      this.setState({display:!this.state.display})
      this.loadCategories()
    }
  
    displayCategories = () => {
      return this.state.data.map((i, index) => {
        return(
          <div key={index}>
              <li className='product_categories'>
              <Link className='product_categories' data={i}  to={"/Catalogue/category/" + i.category}>{i.category}</Link>
              </li>
          
          </div>
      )})
    }
  
    render() {
      return(
        <div className='product_types'>
          <ul onClick={this.handleCategoryDisplay}>{this.props.details.display_name}</ul>
          { this.state.display ? this.displayCategories() :  <p></p>}
        </div>
      )
    }
  }

  export default Categories;