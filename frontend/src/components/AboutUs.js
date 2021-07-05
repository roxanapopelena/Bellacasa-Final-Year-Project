import React from 'react';
import './assets/styles/AboutUs.css';
import '../App.css';

function AboutUs() {
  return (
    <div className='container'>
        <div className='about-header-container'>
            <h1>ABOUT BELLACASA</h1>
        </div>
        <h2 className='h2'>The bussiness of quality interior</h2>
        <div className='content'>
            <div className='text-container'>
            <h2 className='text-header'>Why would you choose us?</h2>
            <p className='text'>Founded in 1998 and operating on a national level, bellacasa (Fertilis SRL) creates a completely new approach to the commercialization, distribution and import of interior doors, woodwork, faience, floor tiles, shower cabins and exterior doors.
                By combining standard forms with a variety of finishes and details, bellacasa lets customers personalize their homes simply and affordably.
                Built on collaboration and committed to local manufacturing, bellacasa believes that great design starts and ends with great conversations and 
                partnerships. Our 28 stores distribute our flagship all over the world, making sure no potential customer is left out. </p>
            </div>
            <div className='photo-container'>
            <div className='photo'></div>
            </div>
            
        </div>
    </div>
  );
}

export default AboutUs;