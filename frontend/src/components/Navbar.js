import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './assets/styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            bellacasa
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Catalogue/category/Freestanding'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Catalogue
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Download'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Download
              </Link>
            </li>

            <li>
              <Link
                to='/sign-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
