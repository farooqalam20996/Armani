import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography,Box, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Carousel from 'react-material-ui-carousel';

// Local 

import './index.css'
import background from "../../Images/intro.jpg";
import ListingComponent from '../../Components/ListingsComponent';
import ContributorsComp from '../../Components/ContributorsComp';
import { primaryClr, secondaryClr } from '../../Components/colors';
import { armaaniBaseURL, propertyImagesUrl } from '../Server/baseURL';

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
                            featuredeProperties.filter((data)=> data.property_type !== "Penthouse" ).slice(0,3).map((item)=>{
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
            {
                featuredeProperties.filter((data) => data.property_type == "Penthouse").slice(0,1).map((item)=> {
                    return(
                        <Grid container className='armaaniDisc'>
                            <Grid style={{ width:"100%", height:'27rem', backgroundColor:"#EAE7DB", display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column"}} xs={12} md={12} lg={6} xl={6} >
                                <Typography variant='body1' style={{ width:"90%", color: secondaryClr, fontWeight: 'bold'  }} >
                                    {item.project_name}
                                </Typography>
                                <Grid container style={{ width: '100%', display:"flex", justifyContent:"space-around", alignItems:"center", }} >

                                    <Grid item style={{ flexDirection:"column", display:"flex", alignItems:"center", justifyContent: 'center',}} xs={6} md={6} lg={3} xl={3} >
                                        <Typography style={{ fontSize: '1rem', fontWeight: '600', color:secondaryClr}} >
                                            Unit type
                                        </Typography>
                                        <KingBedOutlinedIcon style={{ color: secondaryClr, fontSize:'3rem', marginTop:'1rem', marginBottom:'1rem' }} />
                                        <Typography style={{ fontSize: '1.5rem', fontWeight: '700', color:secondaryClr}} >
                                            {item.bedrooms} BR
                                        </Typography>
                                    </Grid>

                                    <Grid item style={{ flexDirection:"column", display:"flex", alignItems:"center", justifyContent: 'center',}} xs={6} md={6} lg={3} xl={3} >
                                        <Typography style={{ fontSize: '1rem', fontWeight: '600', color:secondaryClr}} >
                                            Bathroom
                                        </Typography>
                                        <BathtubOutlinedIcon style={{ color: secondaryClr, fontSize:'3rem', marginTop:'1rem', marginBottom:'1rem' }} />
                                        <Typography style={{ fontSize: '1.5rem', fontWeight: '700', color:secondaryClr}} >
                                            {item.bathrooms}
                                        </Typography>
                                    </Grid>

                                    <Grid item style={{ flexDirection:"column", display:"flex", alignItems:"center", justifyContent: 'center',}} xs={6} md={6} lg={3} xl={3} >
                                        <Typography style={{ fontSize: '1rem', fontWeight: '600', color:secondaryClr}} >
                                            size ( sq ft )
                                        </Typography>
                                        <AspectRatioOutlinedIcon style={{ color: secondaryClr, fontSize:'3rem', marginTop:'1rem', marginBottom:'1rem' }} />
                                        <Typography style={{ fontSize: '1.5rem', fontWeight: '700', color:secondaryClr}} >
                                            {item.area_size}
                                        </Typography>
                                    </Grid>

                                    <Grid item style={{ flexDirection:"column", display:"flex", alignItems:"center", justifyContent: 'center',}} xs={6} md={6} lg={3} xl={3} >
                                        <Typography style={{ fontSize: '1rem', fontWeight: '600', color:secondaryClr}} >
                                            Price ( in AED )
                                        </Typography>
                                        <HttpsOutlinedIcon style={{ color: secondaryClr, fontSize:'3rem', marginTop:'1rem', marginBottom:'1rem' }} />
                                        <Typography style={{ fontSize: '1.5rem', fontWeight: '700', color:secondaryClr}} >
                                            On Demand
                                        </Typography>
                                    </Grid>
                                </Grid>    

                                <div>
                                    <Button onClick={()=> fNavigateToDetailsPage(item)} variant='contained' style={{backgroundColor:secondaryClr, alignSelf:"flex-end", marginRight: '2rem'}} size='large'  >
                                        REGISTER YOUR INTEREST
                                    </Button>
                                </div>


                            </Grid>

                            <Grid style={{ width:"100%", height:'27rem'}} xs={12} md={12} lg={6} xl={6} >
                                <Box>
                                    <Carousel>
                                        {item.images.map((item, i) => {
                                            const imagesURI = `${propertyImagesUrl}/${item.name}`;
                                            return(
                                                <Box key={i} style={{ width:"100%", height:"27rem"}} >
                                                    <img src={imagesURI} alt={item.name} style={{ width:"100%", height:"100%"}}  />
                                                </Box>
                                            )
                                        })}
                                    </Carousel>
                                </Box>
                            </Grid>
                        </Grid>
                    )
                })
            }

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