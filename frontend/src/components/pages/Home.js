import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import FloatingActionButtons from '../FloatingActionButton';
import HeroSection from '../HeroSection';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
  return (
    <>
      <HeroSection />
      <Cards />
      <FloatingActionButtons />
    </>
  );
  }
}

export default Home;
