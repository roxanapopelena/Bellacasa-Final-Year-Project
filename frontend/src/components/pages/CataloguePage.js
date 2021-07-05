import React from 'react';
import '../../App.css';
import Catalogue from '../Catalogue';

class CataloguePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
  return (
    <>
    <div className='catalogue'>
      <Catalogue/>
      </div>
  </>
  );
  }
}

export default CataloguePage;
