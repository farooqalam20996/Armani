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

const ProjectRoutes = () => {
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
            </div>
            <AppFooter />
        </Router>
    );
}

export default ProjectRoutes;