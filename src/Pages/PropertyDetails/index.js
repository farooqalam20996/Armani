import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Carousel from 'react-material-ui-carousel';

import { Menu, MenuItem, TextField, useMediaQuery, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Modal } from '@mui/material';
import axios from 'axios';

 // local 

import "./index.css";
import { primaryClr, secondaryClr } from '../../Components/colors';
import Image1 from "../../Images/details1.jpg";
import { armaaniBaseURL, propertyImagesUrl } from '../Server/baseURL';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: primaryClr,
    boxShadow: 24,
    p: 4,
};

const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
const titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof'];

const PropertyDetails = () => {
    const { state } = useLocation();
    const propertyDetails = state.propertyDetails;
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({  title: '', firstName: '', lastName: '', email: '', phone: '', country: '', msg:'' });
    const [errors, setErrors] = useState({});
    const [sLoader, setLoader] = useState();


    const imagesURI = propertyDetails.images ? `${propertyImagesUrl}/${propertyDetails.images[0].name}`: Image1;

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);

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

    const itemsData = [
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

    const listOfFacilities = [
        {
            id:1,
            text:'Parking',
        },
        {
            id:2,
            text:'Security and access control',
        },
        {
            id:3,
            text:'Family pool and children’s play area',
        },
        {
            id:4,
            text:'In-room dining',
        },
        {
            id:5,
            text:'Laundry services',
        },
        {
            id:6,
            text:'Engaging social and creative spaces',
        },
    ]

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const validate = () => {
      let tempErrors = {};
      tempErrors.title = form.title ? "" : "Title is required.";
      tempErrors.firstName = form.firstName ? "" : "First Name is required.";
      tempErrors.lastName = form.lastName ? "" : "Last Name is required.";
      tempErrors.email = form.email ? "" : "Email is required.";
      tempErrors.phone = form.phone ? "" : "Phone number is required.";
      tempErrors.country = form.country ? "" : "Country is required.";
      tempErrors.msg = form.msg ? "" : "Message is required.";
      
      setErrors(tempErrors);
      return Object.values(tempErrors).every(x => x === "");
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log(form);
        handleClose();
      }
    };

    const fRegisterYourInterest = () => {
        setLoader(true)
        let data = JSON.stringify({
            "property_id": propertyDetails.id,
            "title": form.title,  
            "first_name": form.firstName,
            "last_name": form.lastName,
            "email": form.email,
            "mobile": form.phone,
            "country_id": form.country,
            "message": form.msg
        });

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${armaaniBaseURL}/api/interests`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            if(response.data.success){
                setLoader(false);
                handleClose();
                setForm({ title: '', firstName: '', lastName: '', email: '', phone: '', country: '', msg:''  })
            }
            else{
                setLoader(false)
            }
        })
        .catch((error) => {
            console.log(error);
            setLoader(false);
        });

    }

    return(
        <div className="Property-Container">
            <div className="Property-background"  style={{ backgroundImage: `url(${imagesURI})`, }} >
                <div className="centered-text">
                    <Typography style={{
                        fontSize: '2.5rem',
                        fontWeight:'bolder',
                        color: '#fff',
                        zIndex:100
                    }} >
                        {propertyDetails.project_name}
                    </Typography>
                    <Button onClick={handleOpen} variant='contained' style={{backgroundColor:secondaryClr, alignSelf:"flex-end", marginRight: '2rem'}} size='large'  >
                        REGISTER YOUR INTEREST
                    </Button>
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

            <div className="Property-list-container" style={{ backgroundColor: primaryClr }} >
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index} className="Property-list-item">
                            <CircleIcon style={{ color: secondaryClr, fontSize: '0.75rem', marginTop: '0.6rem', marginRight:'0.6rem' }} />
                            <Typography variant="subtitle1" style={{ color: secondaryClr, fontSize: '1rem', fontWeight: '500' }} >{item}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div className="Property-Facilities-container" >
                <Typography style={{
                        fontSize: '1.5rem',
                        fontWeight:'bolder',
                        color: '#000',
                        zIndex:100,
                        marginTop: '3rem',
                        paddingLeft: '8rem',
                        paddingRight: '8rem',
                        marginBottom:"3rem"
                    }} 
                > Facilities </Typography>

                {/* <div className='property-facilities-sub-container'>
                    <div style={{ width: '50%', height: '100%', backgroundColor: secondaryClr, display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Grid container width={'100%'} padding={'2rem'}>
                            <Grid item xs={12} sm={6}>
                                {listOfFacilities.slice(0, 3).map((item) => (
                                <Box
                                    key={item.id}
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    margin: '1rem',
                                    }}
                                >
                                    <CircleIcon style={{ fontSize: '1rem', color: primaryClr }} />
                                    <Typography style={{ color: primaryClr, marginLeft: '0.5rem' }}> {item.text} </Typography>
                                </Box>
                                ))}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {listOfFacilities.slice(3).map((item) => (
                                <Box
                                    key={item.id}
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    margin: '1rem',
                                    }}
                                >
                                    <CircleIcon style={{ fontSize: '1rem', color: primaryClr }} />
                                    <Typography style={{ color: primaryClr, marginLeft: '0.5rem' }}> {item.text} </Typography>
                                </Box>
                                ))}
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '50%', height: '100%' }}>
                        <Box>
                        <Carousel>
                            {itemsData.map((item, i) => (
                            <Box key={i} style={{ width: '100%', height: '100%' }}>
                                <img src={item.imgPath} alt={item.name} className="carousel-image" />
                            </Box>
                            ))}
                        </Carousel>
                        </Box>
                    </div>
                </div> */}

                <Grid container className='property-facilities-sub-container'>
                    <Grid item style={{ width: '50%', height: '27rem', backgroundColor: secondaryClr, display:"flex", alignItems:"center", justifyContent:"center", }} xs={12} md={12} lg={6} xl={6} >
                        <Grid container width={'100%'} padding={'2rem'} >
                            <Grid item xs={12} sm={6}>
                                {propertyDetails.facilities.slice(0, 3).map((item) => (
                                <Box
                                    key={item.id}
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    margin: '1rem',
                                    }}
                                >
                                    <CircleIcon style={{ fontSize: '1rem', color: primaryClr }} />
                                    <Typography style={{ color: primaryClr, marginLeft: '0.5rem' }}> {item.name} </Typography>
                                </Box>
                                ))}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {propertyDetails.facilities.slice(3).map((item) => (
                                <Box
                                    key={item.id}
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    margin: '1rem',
                                    }}
                                >
                                    <CircleIcon style={{ fontSize: '1rem', color: primaryClr }} />
                                    <Typography style={{ color: primaryClr, marginLeft: '0.5rem' }}> {item.name} </Typography>
                                </Box>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{ width: '50%', height: '27rem' }}  xs={12} md={12} lg={6} xl={6} >
                        <Box>
                        <Carousel>
                            {
                                propertyDetails.images ? 
                                    propertyDetails.images.map((item, i) => (
                                        <Box key={i} style={{ width: '100%', height: '100%' }}>
                                            <img src={`${propertyImagesUrl}/${item.name}`} alt={item.name} className="carousel-image" />
                                        </Box>
                                    ))
                                    :
                                    itemsData.map((item, i) => (
                                        <Box key={i} style={{ width: '100%', height: '100%' }}>
                                            <img src={item.imgPath} alt={item.name} className="carousel-image" />
                                        </Box>
                                    ))
                            }
                        </Carousel>
                        </Box>
                    </Grid>
                </Grid>

                <Grid
                    container
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // minHeight: '27rem',
                    }}
                >
                    <Grid item style={{ width: '50%', height: '27rem' }} xs={12} md={12} lg={6} xl={6} >
                        <img src={require('../../Images/intro.jpg')} style={{ width:"100%", height:"100%"}} />
                    </Grid>
                     <Grid item style={{ width: '50%', height: '27rem', backgroundColor: primaryClr, flexDirection:"column",  display:"flex", justifyContent:"space-around", alignItems:"center" }}  xs={12} md={12} lg={6} xl={6}>
                        <Grid container style={{ width: '100%', display:"flex", justifyContent:"space-around", alignItems:"center" }} >

                            <Grid item style={{ flexDirection:"column", display:"flex", alignItems:"center", justifyContent: 'center',}} xs={6} md={6} lg={3} xl={3} >
                                <Typography style={{ fontSize: '1rem', fontWeight: '600', color:secondaryClr}} >
                                    Unit type
                                </Typography>
                                <KingBedOutlinedIcon style={{ color: secondaryClr, fontSize:'3rem', marginTop:'1rem', marginBottom:'1rem' }} />
                                <Typography style={{ fontSize: '1.5rem', fontWeight: '700', color:secondaryClr}} >
                                    {propertyDetails.bedrooms} BR
                                </Typography>
                            </Grid>

                            <Grid item style={{ flexDirection:"column", display:"flex", alignItems:"center", justifyContent: 'center',}} xs={6} md={6} lg={3} xl={3} >
                                <Typography style={{ fontSize: '1rem', fontWeight: '600', color:secondaryClr}} >
                                    Bathroom
                                </Typography>
                                <BathtubOutlinedIcon style={{ color: secondaryClr, fontSize:'3rem', marginTop:'1rem', marginBottom:'1rem' }} />
                                <Typography style={{ fontSize: '1.5rem', fontWeight: '700', color:secondaryClr}} >
                                    {propertyDetails.bathrooms}
                                </Typography>
                            </Grid>

                            <Grid item style={{ flexDirection:"column", display:"flex", alignItems:"center", justifyContent: 'center',}} xs={6} md={6} lg={3} xl={3} >
                                <Typography style={{ fontSize: '1rem', fontWeight: '600', color:secondaryClr}} >
                                    size ( sq ft )
                                </Typography>
                                <AspectRatioOutlinedIcon style={{ color: secondaryClr, fontSize:'3rem', marginTop:'1rem', marginBottom:'1rem' }} />
                                <Typography style={{ fontSize: '1.5rem', fontWeight: '700', color:secondaryClr}} >
                                    {propertyDetails.area_size}
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
                        <Button variant='contained' style={{backgroundColor:secondaryClr, alignSelf:"flex-end", marginRight: '2rem'}} size='large'  >
                            <a href={`http://services.armanibeachhomes.com/public/brochure/Armani Beach Residence Brochure 2BD -Presidential Suites-Dec 14.pdf`} target="_blank" rel="noopener noreferrer" style={{ color: primaryClr, textDecoration: 'underline' }}>
                                BROUCHURE
                            </a> 
                        </Button>
                        <Button onClick={handleOpen} variant='contained' style={{backgroundColor:secondaryClr, alignSelf:"flex-end", marginRight: '2rem'}} size='large'  >
                            REGISTER YOUR INTEREST
                        </Button>
                       </div>

                    </Grid>
                </Grid>
            </div>

            

            <div style={{height:'1vh'}} />

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                <Typography variant="h6" component="h2">
                    REGISTER INTEREST
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        select
                        label="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.title}
                        helperText={errors.title}
                    >
                    {titles.map((title) => (
                        <MenuItem key={title} value={title}>
                        {title}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                    <TextField
                        select
                        label="Country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.country}
                        helperText={errors.country}
                    >
                    {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                            {country}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField
                        label="Additional Details"
                        name="msg"
                        value={form.msg}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.msg}
                        helperText={errors.msg}
                    ></TextField>
                    <Button onClick={fRegisterYourInterest} variant="contained" color="primary" fullWidth style={{ backgroundColor: secondaryClr }} >
                        {
                            sLoader?
                            <CircularProgress style={{ color: primaryClr }} />
                            :
                            "Submit"
                        }
                    </Button>
                </form>
                </Box>
            </Modal>
        </div>
    );
}

export default PropertyDetails;