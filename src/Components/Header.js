import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link, Route, useLocation, useNavigate } from "react-router-dom";
import LogoImage from '../Images/ARMAANI-LOGO.jpeg'; // Import your logo image
import { Menu, MenuItem, TextField, Typography, useMediaQuery, IconButton, CircularProgress } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Modal, Button } from '@mui/material';

// Local 

import './index.css';
import { primaryClr, secondaryClr } from './colors';
import axios from 'axios';
import { armaaniBaseURL } from '../Pages/Server/baseURL';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
//   bgcolor: 'background.paper',
  bgcolor: primaryClr,
  boxShadow: 24,
  p: 4,
};



function AppHeader({userRole}) {
    const location = useLocation();
    useEffect(()=>{
        console.log("******* Location ***** ", location.pathname);
    }, [location]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', address:'', country: '' });
    const [errors, setErrors] = useState({});
    const [listCountries, setListCountries] = useState([]);
    const [loader, setLoader] = useState(false);
  
    useEffect(()=> {
        getCountriesList();
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };


      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const validate = () => {
        let tempErrors = {};
        tempErrors.name = form.name ? "" : "Name is required.";
        tempErrors.email = form.email ? "" : "Email is required.";
        tempErrors.phone = form.phone ? "" : "Phone number is required.";
        tempErrors.address = form.address ? "" : "Address is required.";
        tempErrors.country = form.country ? "" : "Country is required.";
        
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

    const getCountriesList = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${armaaniBaseURL}/api/countries`,
            headers: { }
        };

        axios.request(config).then((response) => {
            if(response.data.success){
                setListCountries(response.data.countries)
            }
            else{
                console.log("There is something issue ... ");
            }
        })
        .catch((error) => {
            console.log(error);
        });

    }

      const fContactUs  = () => {
        if(!validate())
            return
        setLoader(true)
        let data = JSON.stringify({
            "name": form.name,
            "email": form.email,
            "phone": form.phone,
            "country_id": form.country,
            "address": form.address
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${armaaniBaseURL}/api/contacts`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config).then((response) => {
            console.log(JSON.stringify(response.data));
            if(response.data.success){
                handleClose();
                setLoader(false);
            }
            else{
                setLoader(false);
            }
        }).catch((error) => {
            console.log(error);
            setLoader(false);
        });
      }

    return (
        <div style={{ position:"inherit", backgroundColor: primaryClr, height:'5rem',display:'flex', alignItems:'center', justifyContent:"center",  }} >  
            <Container maxWidth="" style={{ maxWidth:'90%' }} >
                <Toolbar>
                    
                    <Link to={'./'} >
                        <img src={LogoImage} alt="Logo" style={{ width: '10rem', height: '4.5rem', backgroundSize:'cover'}} />   
                    </Link>
                
                    <Box sx={{ flexGrow: 1, /*display: { xs: 'none', md: 'flex' } */ }}>
                       
                    </Box>

                    {
                        isMobile ? (
                            <>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={handleMenuClose}>
                                    <Link to={'./'} style={{ textDecorationColor: location.pathname == "/" ? secondaryClr : primaryClr }}>
                                        <Typography variant="subtitle2" style={{ color: secondaryClr, fontWeight: 'bold' }}>
                                        Armani Beach Residences
                                        </Typography>
                                    </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                    <Link to={'./Residence'} style={{ textDecorationColor: location.pathname == "/Residence" ? secondaryClr : primaryClr }}>
                                        <Typography variant="subtitle2" style={{ color: secondaryClr, fontWeight: 'bold' }}>
                                        Residences
                                        </Typography>
                                    </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                    <Button onClick={handleOpen} >
                                        <Typography style={{ color: '#000', fontSize: '1rem', fontWeight: 'bolder' }}>
                                            Get in touch
                                        </Typography>
                                    </Button>
                                     
                                    </MenuItem>
                                </Menu>
                            </>
                        )
                        :
                        <Box sx={{ flexGrow: 0}} className="headerBox">
                            <div className='rightArea' style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start" }} >
                                <Link to={'./'} style={{ textDecorationColor: location.pathname == "/"? secondaryClr : primaryClr }} >
                                    <Typography variant="subtitle2" style={{ color: secondaryClr, fontWeight:'bold', marginRight: '1rem', textDecorationColor:'red' }} >
                                        Armani Beach Residences
                                    </Typography >
                                </Link>

                                <Link to={'./Residence'} style={{ textDecorationColor: location.pathname == "/Residence"? secondaryClr : primaryClr  }}  >
                                    <Typography variant="subtitle2" style={{ color: secondaryClr, fontWeight:'bold', marginRight: '1rem'  }} >
                                        Residences
                                    </Typography >
                                </Link>

                                <div className='contactDesign' >
                                    <Button onClick={handleOpen} >
                                        <Typography style={{ color: '#fff', fontSize: '1rem', fontWeight:'bolder' }} >
                                            Get in touch
                                        </Typography>
                                    </Button>
                                </div>
                            </div>
                            
                        </Box>
                    }
                   

                </Toolbar>
            </Container>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                <Typography variant="h6" component="h2">
                    GET IN TOUCH
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.name}
                        helperText={errors.name}
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
                        label="Address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={!!errors.address}
                        helperText={errors.address}
                    ></TextField>
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
                    {listCountries.map((country) => (
                        <MenuItem key={country.id} value={country.name}>
                            {country.name}
                        </MenuItem>
                    ))}
                    </TextField>
                    <Button onClick={fContactUs} variant="contained" color="primary" fullWidth style={{ backgroundColor: secondaryClr }} >
                       {
                            loader ?
                                <CircularProgress style={{ color: primaryClr , fontSize: '1rem'}} />
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
export default AppHeader;


