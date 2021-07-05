import React from 'react';
import './assets/styles/Download.css';
import '../App.css';

import Brochure1 from './assets/Catalogue_Classen.pdf';
import Brochure2 from './assets/2019_catalogue.pdf';

function Download() {
  return (
    <div className='container'>
        <div className='download-header-container'>
            <h1>DOWNLOAD</h1>
        </div>
        <h2 className='h2'>Take a look at our catalogue by downloading the booklets</h2>
        <div className='download-content'>
            <div className='brochureContainer'>
                <div className='brochures'>
                    <a className='brochure-img1' href={Brochure1} target = "_blank" rel='noopener noreferrer'> </a>
                    <p className='brochure-desc'>CLASSEN 2019</p>  
                </div>
            </div>
            <div className='brochureContainer'>
                <div className='brochures'>
                    <a className='brochure-img2' href={Brochure2} target = "_blank" rel='noopener noreferrer'> </a>
                    <p className='brochure-desc'>BELLACASA BOOKLET</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Download;