import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';

 // local 

import "./index.css";
import { primaryClr, secondaryClr } from '../../Components/colors';
import ListingComponent from '../../Components/ListingsComponent';
import PhotoGallery from '../Home/PhotoGallery';
import { armaaniBaseURL } from '../Server/baseURL';
import axios from 'axios';

const ArmaaniResidences = () => {
    const navigate = useNavigate();
    const [sListOfProperties, setListOfProperties] = useState([]);
    const [loader, setLoader] = useState(false);

    const items = [
        "Amenities available to residents cover a total of 90,000 square feet and are all immaculately designed by Armani/Casa",
        "Premium residents-only spa with spacious gym, sauna and ice-bath, men’s and women’s changing areas and lockers, and indoor swimming pool",
        "Lushly landscaped deck area, featuring large-scale infinity pool and separate children’s pool",
        "Stylish and elegant cigar lounge based in a library setting",
        "Private beach with accompanying amenities, including food and beverage services, beach attendants, beach lounge chairs and umbrellas",
        "Compact movie theatre and children’s playroom",
        "Large-scale multi-purpose function room and display kitchen with panoramic sea views available for residents’ usage",
        "Extensive water features at ground-floor and first-floor level",
        "Signature lobby with double-height void with 24-hour concierge, 24-hour security and valet services",
        "High-end parking for residents, which features contemporary design touches",
        "Smart home features that can be controlled by cellphones and tablets, including climate control, and lighting",
        "Acoustic treatment, reducing sound from neighboring apartments.",
        "Private high-speed lifts travelling at 1.6 metres per second"
    ];

    const ArmaaniProperties = [
        {
            id: 1,
            imageUrl: require("../../Images/residence1.jpg"),
            title: "Armani Beach Residences at Palm Jumeirah",
            NoOfBedroom: 2,
            type:'Apartment'
        },
        {
            id: 2,
            imageUrl: require("../../Images/residence2.jpg"),
            title: "Armani Beach Residences at Palm Jumeirah",
            NoOfBedroom: 3,
            type:'Apartment'
        },
        {
            id: 3,
            imageUrl: require("../../Images/residence3.jpg"),
            title: "Armani Beach Residences at Palm Jumeirah",
            NoOfBedroom: 4,
            type:'Apartment'
        },
    ]

    useEffect(()=> {
        getListOfProperties();
    }, []);

    const getListOfProperties = () => {
        setLoader(true)
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${armaaniBaseURL}/api/getlistings`,
            headers: { }
        };

        axios.request(config).then((response) => {
            if(response.data.success){
                setListOfProperties(response.data.properties)
                setLoader(false)
            }
            else{
                console.log("There is something issue ... ");
                setLoader(false)
            }
        })
        .catch((error) => {
            setLoader(false)
            console.log(error);
        });

    }

     const fNavigateToDetailsPage = (rowData) => {
        navigate("/Residence_Details", {state: {propertyDetails: rowData}})
      };

    return(
        <div className="Residence-Container">
            <div className="Residence-background">
                <div className="centered-text">
                    <Typography style={{
                        fontSize: '2.5rem',
                        fontWeight:'bolder',
                        color: '#fff',
                        zIndex:100
                    }} >
                        Armani Beach Residences
                    </Typography>
                </div>
            </div>
            <Typography style={{
                fontSize: '1.5rem',
                fontWeight:'bolder',
                color: '#000',
                zIndex:100,
                marginLeft: '8rem',
                marginTop: '3rem',
                marginBottom: '3rem',
            }} >
                Key Features
            </Typography>

            <div className="list-container" style={{ backgroundColor: primaryClr }} >
                <Grid container >
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index} className="list-item">
                            <CircleIcon style={{ color: secondaryClr, fontSize: '0.75rem', marginTop: '0.6rem', marginRight:'0.6rem' }} />
                            <Typography variant="subtitle1" style={{ color: secondaryClr, fontSize: '1rem', fontWeight: '500' }} >{item}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div className='properties-listings' >
                <Typography style={{
                    fontSize: '1.5rem',
                    fontWeight:'bolder',
                    color: '#000',
                    zIndex:100,
                    marginBottom: '1rem',
                }} >
                    Choose your home
                </Typography>
                <Grid container spacing={2} >
                    {
                        sListOfProperties.map((item, index)=> {
                            const imageUri = item.images ? item.images[0].name : null;
                            return(
                                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index} className="list-item">
                                    <ListingComponent 
                                        xClassName={'propertyStyle'}
                                        xNumOfBed={item.bedrooms ? item.bedrooms : ""  }
                                        xProertyType={item.property_type}
                                        xTitle={item.project_name ? item.project_name : ""  }
                                        xImage={imageUri}
                                        xOnClick={()=> fNavigateToDetailsPage(item)}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
            <div style={{ padding: '1rem' }} >
                <PhotoGallery />
            </div>

            <div style={{height:'10vh'}} />
        </div>
    )
}

export default ArmaaniResidences;