import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { secondaryClr } from './colors';
import { propertyImagesUrl } from '../Pages/Server/baseURL';

const ListingComponent = ({
    xClassName,
    xNumOfBed,
    xTitle,
    xProertyType,
    xImage,
    xOnClick
}) => {
    const imagesURI = xImage? `${propertyImagesUrl}/${xImage}` : require("../Images/2.png");

    return(
        <div className={xClassName} >
            <img src={imagesURI} style={{ width:"100%", height:"200px",objectFit:'cover'}} />
            <div style={{ display:'flex', alignItems:"center", justifyContent:"space-between", width:"100%", marginTop: '1rem'}} >
                <Typography style={{ fontSize:'0.85rem', }} >
                    {xTitle}
                </Typography>
                <Typography style={{ fontSize:'0.85rem', }} >
                    {xNumOfBed} BR {xProertyType}
                </Typography>
            </div>
            <Button onClick={xOnClick} variant='text' style={{ fontSize:'1rem', fontWeight:'bold', textDecoration:'underline', color: secondaryClr, alignSelf:"flex-end" }} >
                Know more
            </Button>
        </div>
    )
}

export default ListingComponent;