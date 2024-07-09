import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link, useNavigate } from "react-router-dom";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PhoneIcon from '@mui/icons-material/Phone';

// Local 

import { Button, CircularProgress, Grid, TextField, Typography} from '@mui/material';
import { primaryClr, secondaryClr } from './colors';
import LogoImage from '../Images/ARMAANI-LOGO.jpeg'; // Import your logo image
import axios from 'axios';
import { armaaniBaseURL } from '../Pages/Server/baseURL';

function AppFooter({userRole}) {
    const [sEmail, setEmail] = React.useState("");
    const [sLoader, setLoader] = React.useState("");

    const fSignUpForNewsLetter = () => {
        setLoader(true);
        let data = JSON.stringify({
            "email": sEmail
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${armaaniBaseURL}/api/newsletter`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config).then((response) => {
            console.log(JSON.stringify(response.data));
            if(response.data.success){
                setLoader(false);
                setEmail("")
            }
            else{
                setLoader(false);
            }
        })
        .catch((error) => {
            console.log(error);
            setLoader(false);
        });

    }

    return (    
        <div position="sticky"  style={{ backgroundColor:'#fff', alignItems:'center', justifyContent:"center", marginTop: '7rem' }} >  
             <Container maxWidth="" style={{ maxWidth:'85%', backgroundColor: primaryClr, minHeight:'18rem', padding: '2rem'}} >

                {/* ******************* N E W   D E S I G N ********************** */}

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Link to="./">
                        <img src={LogoImage} alt="Logo" style={{ width: '10rem', height: '4.5rem', backgroundSize: 'cover' }} />
                        </Link>
                        <Box display="flex" alignItems="center" justifyContent="flex-start" mt={2}>
                        <PhoneIcon style={{ fontSize: '2rem', color: secondaryClr }} />
                        <Typography style={{ fontSize: '1.25rem', fontWeight: '400', marginLeft: '0.5rem', color: secondaryClr }}>
                           +971 52 312 6409
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography style={{ fontSize: '0.95rem', fontWeight: '400', color: secondaryClr }}>
                        Newsletter Signup
                        </Typography>
                        <TextField
                            variant="standard"
                            label="Enter Your Email Address"
                            value={sEmail}
                            onChange={(event) => setEmail(event.target.value)}
                            fullWidth
                            style={{ marginTop: '1rem', color: secondaryClr }}
                        />
                        <Button onClick={fSignUpForNewsLetter} variant="contained" style={{ backgroundColor: secondaryClr, marginTop: '1rem' }}>
                        {
                            sLoader ?
                                <CircularProgress style={{ color: primaryClr , fontSize: '1rem'}} />
                                :
                                "Submit"
                       }
                        </Button>
                    </Grid>
                </Grid>

                {/* ******************* E  N  D ********************** */}
            </Container>
        </div>
    );
}
export default AppFooter;