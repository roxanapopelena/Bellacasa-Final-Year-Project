import React from 'react';
import {BACKEND} from '../config';
import { Link } from "react-router-dom";

import './assets/styles/Colors.css';

class Colors extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      colors: [],
      isLoading: false
    }
  }

  componentDidMount = () => {
    const url = `${BACKEND.ADDRESS}/colors/product-colors`
    fetch(url)
      .then( (response) => response.json() )
      .then( (data) => {
      this.setState({colors: data.colors, isLoading: true})
      //console.log('data', data)
    })
      .catch ((err) => {
        console.log("something went wrong ", err)
      }
    );
  }

  displayColors = () => {
    return this.state.colors.map((details, i) => {
        return (
            <Link key={i} title={details.name} to={"/Catalogue/color/" + details.id}>
                <img className='color_image' alt ='color_image' src={details.url}></img>
            </Link>
        )})
  }

  render (){
    return (
      <div className='colors'>
        {this.state.isLoading ? this.displayColors(): <p>loading...</p>}
      </div>
    )
  }
}

export default Colors;