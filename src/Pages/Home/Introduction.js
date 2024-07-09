import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography,Box } from '@mui/material';
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
import Carousel from 'react-material-ui-carousel';

const items = [
    {
        name: "Image 1",
        description: "Description for Image 1",
        imgPath: require('../../Images/image1.jpg')
    },
    {
        name: "Image 2",
        description: "Description for Image 2",
        imgPath: require('../../Images/image2.jpg')
    },
    {
        name: "Image 3",
        description: "Description for Image 3",
        imgPath: require('../../Images/image3.jpg')
    }
];

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
                <div className="centered-text custom-font">
                    <h1 style={{
                        // fontSize: '2.5rem',
                        // fontWeight:'bolder',
                        color: '#fff',
                        // zIndex:100,
                        fontFamily: 'AradaHeadline-Bold'
                    }}  >
                        Ultra Luxury at The Palm Jumeirah
                    </h1>
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
            <Grid container className='armaaniDisc mt-5' >
                <Grid style={{ width:"50%", height:'27rem', backgroundColor:"#EAE7DB", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column",overflow:'auto' }} xs={12} md={12} lg={6} xl={6} >
                    <Typography style={{ width:"85%", color:"#262216", fontSize:'1rem'  }} >
                            Discover a world of timeless elegance.

                            Setting a new standard for ultra-luxury living, Armani Beach Residences at Palm Jumeirah is located on the shores of Dubai’s famous manmade islands, one of the world’s most exclusive residential neighborhoods.
                            Enjoying sweeping, panoramic views of the Arabian Gulf as well as Dubai’s famed skyline, Armani Beach Residences at Palm Jumeirah is designed to achieve harmony between architecture, the surrounding seascape and the senses.

                            The magnificent elevated entry experience sets the tone, providing residents with extravagant ocean views from a range of angles. Throughout the building, the interplay of light and shadow amplifies a series of stylish design elements, including the overhanging arch and the many water features and pools.
                    </Typography>
                </Grid>

                <Grid style={{ width:"50%", height:'27rem'}} xs={12} md={12} lg={6} xl={6} >
                    <Box>
                        <Carousel>
                            {items.map((item, i) => (
                                <Box key={i} style={{ width:"85%", height:"100%"}} >
                                    <img src={item.imgPath} alt={item.name} className="carousel-image" />
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                </Grid>
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