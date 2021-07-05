import React from 'react';
import Fab from '@material-ui/core/Fab';
import './assets/styles/FloatingActionButton.css'

export default function FloatingActionButtons() {
  return (
    <div className='root'>
        <div className='icon__container'>
            <Fab color="primary" aria-label="call">
            <a href="tel:+447470718754"><i className="fas fa-phone-alt"></i></a>
            </Fab>
        </div>
      <div className='icon__container'>
        <Fab color="secondary" aria-label="facebook">
            <a href="https://www.facebook.com/RoxxanaPop" target = "_blank" rel='noopener noreferrer'><i className="fab fa-facebook-f"></i></a>
        </Fab>
      </div>
      <div className='icon__container'>
        <Fab color="secondary" aria-label="whatapp">
        <a href="https://m.me/RoxxanaPop" target = "_blank" rel='noopener noreferrer'><i className="fab fa-facebook-messenger"></i></a>
        </Fab>
      </div>
    </div>
  );
}