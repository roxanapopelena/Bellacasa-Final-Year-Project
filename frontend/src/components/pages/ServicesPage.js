import React from 'react';
import '../../App.css';
import Services from '../Services';

class ServicesPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
  return (
    <>
    <div className='services'>
      <Services/>
      </div>
    </>
  );
  }
}

export default ServicesPage;
