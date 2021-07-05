import React from 'react';
import './assets/styles/Services.css';
import '../App.css';

function Services() {
  return (
    <div className='container'>
        <div className='services-header-container'>
            <h1>OUR SERVICES</h1>
        </div>
        <h2 className='h2'>Take a look at the services we have to offer</h2>
        <div className='services-content'>
            <div className='cardContainer'>
                <div className='card'>
                    <i className="fas fa-ruler"></i>
                    <h2>Door mounting</h2>
                    <p className='services-text'>We provide included mounting of doors by our proffesional team.</p>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='card'>
                    <i className="fas fa-truck-moving"></i>
                    <h2>Free transport</h2>
                    <p className='services-text'>Free transport is included on all orders withing the range of Baia Mare and Cluj-Napoca.</p>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='card'>
                    <i className="fas fa-comment-dots"></i>
                    <h2>Assistance</h2>
                    <p className='services-text'>Bellacasa provides technical assistance within our stores and free-of-charge measurements.</p>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='card'>
                    <i className="fas fa-wallet"></i>
                    <h2>Credit</h2>
                    <p className='services-text'>Possibility to purchase any item by making a loan in only 60 minutes.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;