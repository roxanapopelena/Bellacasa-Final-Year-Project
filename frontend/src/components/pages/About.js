import React from 'react';
import '../../App.css';
import AboutUs from '../AboutUs';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
  
  return (
  <>
  <div className='about'>
      <AboutUs/>
      </div>
  </>
  );
  }
}

export default About;
