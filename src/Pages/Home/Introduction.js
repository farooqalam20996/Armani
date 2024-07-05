import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
// Local 
import './index.css'
import background from "../../Images/intro.jpg";
import ListingComponent from '../../Components/ListingsComponent';
import ContributorsComp from '../../Components/ContributorsComp';

// const axios = require('axios');
import axios from 'axios';
import { armaaniBaseURL } from '../Server/baseURL';
import { useNavigate } from 'react-router-dom';
import { secondaryClr } from '../../Components/colors';


const ArmaniIntroduction = () => {
    const navigate = useNavigate();

    const [featuredeProperties, setFeaturedProperties] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(()=> {
        getFeaturedList();
    }, []);

    const getFeaturedList = () => {
        setLoader(true)
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${armaaniBaseURL}/api/getlistings`,
            headers: { }
        };

        axios.request(config).then((response) => {
            if(response.data.success){
                setFeaturedProperties(response.data.properties)
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
        <div className="App">
            <div className="fullscreen-background">
                <div className="centered-text">
                    <Typography style={{
                        fontSize: '2.5rem',
                        fontWeight:'bolder',
                        color: '#fff',
                        zIndex:100
                    }} >
                        Ultra Luxury at The Palm Jumeirah
                    </Typography>
                </div>
            </div>

            <Grid container spacing={0} className='featured-listing'  >
                {
                    loader?
                    <div style={{ display:"flex", width:'100%', alignItems:"center", justifyContent: 'center', minHeight: '15rem' }} >
                        <CircularProgress style={{ color:secondaryClr }} />
                    </div>
                    :
                    (
                        featuredeProperties.length > 0 ? 
                            featuredeProperties.slice(0,3).map((item)=>{
                                const imageUri = item.images ? item.images[0].name : null;
                                return(
                                    <Grid key={item.id} item sx={12} md={6} lg={4} xl={4} zIndex={2} >
                                        <ListingComponent 
                                            xClassName={'listingComp'}
                                            xNumOfBed={item.bedrooms ? item.bedrooms : ""  }
                                            xProertyType={'Apartment'}
                                            xTitle={item.project_name ? item.project_name : ""  }
                                            xImage={imageUri}
                                            xOnClick={()=> fNavigateToDetailsPage(item)}
                                        />
                                    </Grid>
                                )
                            })
                            :
                            null
                    )
                }
            </Grid>

            <Grid container  className='contributors-listing'  >
                <Grid item sx={3} md={3} lg={3} xl={3} display={'flex'} alignItems={"center"} justifyContent={"center"} >
                    <ContributorsComp xTitle={'Interior designed by'} xvalue={'Armani/Casa'} xClassName={'contributorComp'} xIsOdd={true} />
                </Grid>

                <Grid item sx={3} md={3} lg={3} xl={3} display={'flex'} alignItems={"center"} justifyContent={"center"} >
                    <ContributorsComp xTitle={'Architecture by'} xvalue={'Tadao Ando'} xClassName={'contributorComp'} xIsOdd={false} />
                </Grid>

                <Grid item sx={3} md={3} lg={3} xl={3} display={'flex'} alignItems={"center"} justifyContent={"center"} >
                    <ContributorsComp xTitle={'Developed by'} xvalue={'Arada'} xClassName={'contributorComp'} xIsOdd={true} />
                </Grid>

                <Grid item sx={3} md={3} lg={3} xl={3} display={'flex'} alignItems={"center"} justifyContent={"center"} >
                    <ContributorsComp xTitle={'Located at'} xvalue={'Palm Jumeirah'} xClassName={'contributorComp'} xIsOdd={false} />
                </Grid>

            </Grid>

        </div>
    )
}

export default ArmaniIntroduction;