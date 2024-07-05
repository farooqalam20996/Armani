import React from 'react';
import './index.css';
import ArmaniIntroduction from './Introduction';
import ArmaniWelcome from './ArmaniWelcome';
import PhotoGallery from './PhotoGallery';

const ArmaaniHomePage = () => {
    return(
        <div className='Home-Container' >
           <ArmaniIntroduction />
           <ArmaniWelcome />
           <PhotoGallery />
           <div style={{ height:'10vh' }} />
        </div>
    )
}

export default ArmaaniHomePage;