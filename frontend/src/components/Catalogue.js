import React from 'react';
import  Types  from './Types';
import Colors from './Colors';
import {
  Switch,
  Route
} from "react-router-dom";
import ProductsByCategory from './ProductsByCategory';
import ProductsByColor from './ProductsByColor';

import './assets/styles/Catalogue.css';

class Catalogue extends React.Component {

  render() {
    return (
      <div className='catalogue-container'>
          <div className='catalogue-header-container'>
              <h1>CATALOGUE</h1>
          </div>
          <div className='all__container'>
            <div>
              <Types />
              <Colors />
            </div>
            <div className='item-container' >
            <Switch>
                <Route path={`/Catalogue/category/:category`} component={ProductsByCategory} />
                <Route path={`/Catalogue/color/:colorId`} component={ProductsByColor} />
            </Switch>
          </div>
          </div>
      </div>
    );
  }
}

export default Catalogue;