import React from 'react';
import {BACKEND} from '../config';
import  Categories from './Categories';

import './assets/styles/Types.css';

class Types extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      dataTypes: [],
      isLoading: false
    }
  }

  componentDidMount = () => {
    const url = `${BACKEND.ADDRESS}/products/product-types`
    fetch(url)
      .then( (response) => response.json() )
      .then( (data) => {
      this.setState({dataTypes: data.productTypes, isLoading: true})
      //console.log('types', data)
    })
      .catch ((err) => {
        console.log("something went wrong ", err)
      }
    );
  }

  displayTypes = () => {
    return this.state.dataTypes.map((details, i) => (<Categories key={i} details={details} />))
  }

  render (){
    return (
      <div>
        {this.state.isLoading ? this.displayTypes(): <p>loading...</p>}
      </div>
    )
  }
}

export default Types;