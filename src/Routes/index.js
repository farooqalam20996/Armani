import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// LocalHost

import ArmaaniHomePage from '../Pages/Home';
import ArmaaniResidences from '../Pages/Residences';
import ArmaaniContact from '../Pages/Contact';
import AppHeader from '../Components/Header';
import AppFooter from '../Components/Footer';
import './index.css'
import PropertyDetails from '../Pages/PropertyDetails';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const ProjectRoutes = () => {

    const whatsappNumber = '+971523126409';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}`;
  
    const handleWhatsAppClick = (event) => {
        if (isMobile) {
            event.preventDefault(); // Prevent the default link behavior
            window.open(`https://wa.me/${whatsappNumber}`, '_blank');
        }
    };
    const iconStyle = {
        fontSize: 50,
        color: '#25D366',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)', // Adjust shadow here
        borderRadius: '50%', // To make the shadow rounded if the icon is circular
        padding:'0.25rem'
    };

    return(
        <Router>
            <AppHeader />
            <div className="main-container">
                
                <Routes> 
                    <Route
                        exact
                        path="/"
                        element={ <ArmaaniHomePage /> }
                    />

                    <Route
                        exact
                        path="/Residence"
                        element={ <ArmaaniResidences /> }
                    />

                    <Route
                        exact
                        path="/Residence_Details"
                        element={ <PropertyDetails /> }
                    />

                    <Route
                        exact
                        path="/Contact-us"
                        element={ <ArmaaniContact /> }
                    />
                </Routes>
                <div className="icons-container">
    <div className="icons">
        <div className="icon">
         <a
            href={`https://web.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
        >
            <WhatsAppIcon style={iconStyle} />
            {/* Adjust fontSize and color as needed */}
        </a>
        </div>
        {/* <div className="icon">
            <InstagramIcon style={{ color: '#c13584' }} />
        </div>
        <div className="icon">
            <FacebookIcon style={{ color: '#3b5998' }} />
        </div> */}
    </div>
</div>
            </div>
          
       
            <AppFooter />
        </Router>
    );
}

export default ProjectRoutes;