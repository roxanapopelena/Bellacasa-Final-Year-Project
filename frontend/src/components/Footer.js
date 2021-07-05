import React from 'react';
import './assets/styles/Footer.css';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='map'>
      <Map
          google={window.google}
          zoom={15}
          initialCenter={{ lat: 47.65735919727572, lng: 23.572408669001877}}
          >
            <Marker position={{ lat: 47.65735919727572, lng: 23.572408669001877}} />
          </Map>
        </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              bellacasa
            </Link>
          </div>
          <small className='website-rights'>bellacasa © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB90p_xpTNPe8pxcKm9_JYtFxPwOvf1ec4'
})(Footer);
