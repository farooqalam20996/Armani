import React, { useState } from 'react';
import { Typography, Dialog, DialogContent, IconButton, Grid, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './index.css';
import Photo1 from '../../Images/photo1.jpg';
import Photo2 from '../../Images/photo2.jpg';
import Photo3 from '../../Images/photo3.jpg';
import Photo4 from '../../Images/photo4.jpg';
import Photo5 from '../../Images/photo5.jpg';
import { primaryClr } from '../../Components/colors';

const photos = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5
];

const PhotoGallery = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickOpen = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='PhotoGalleryContainer1' style={{backgroundColor: '#F1F1F1'}} >
                    <Typography style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                        Photo Gallery
                    </Typography>
            </div> 
            <div className='PhotoGalleryContainer' >
                {/* <div className='PhotoGalleryContainer' style={{backgroundColor: '#F1F1F1'}} >
                    <Typography style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                        Photo gallery
                    </Typography>
                </div> */}
                <div className='PhotoGallerysubContainer'>
                    {/* <Typography style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                        Photo gallery
                    </Typography> */}

                    {/* <div className='imageGallerySection1'>
                        <img src={Photo1} className="photoGallery-image" onClick={() => handleClickOpen(0)} alt="Photo 1"/>
                        <img src={Photo2} className="photoGallery-image" onClick={() => handleClickOpen(1)} alt="Photo 2"/>
                    </div>
                    <div className='imageGallerySection1'>
                        <img src={Photo3} className="photoGallery-image1" onClick={() => handleClickOpen(2)} alt="Photo 3"/>
                        <img src={Photo4} className="photoGallery-image1" onClick={() => handleClickOpen(3)} alt="Photo 4"/>
                        <img src={Photo5} className="photoGallery-image1" onClick={() => handleClickOpen(4)} alt="Photo 5"/>
                    </div> */}

                    <Grid container width={"100%"}  >
                        <Grid className='imageGallerySection1' sx={12} md={6} lg={6} xl={6} style={{width:"100%", height:"100%"}} >
                            <img src={Photo1} className="photoGallery-image" onClick={() => handleClickOpen(0)} alt="Photo 1"/>
                        </Grid>

                        <Grid className='imageGallerySection1' sx={12} md={6} lg={6} xl={6} style={{width:"100%", height:"100%"}} >
                            <img src={Photo2} className="photoGallery-image" onClick={() => handleClickOpen(1)} alt="Photo 2"/>
                        </Grid>
                    </Grid>

                    <Grid container width={"100%"} >
                        
                        <Grid className='imageGallerySection1' sx={12} md={6} lg={4} xl={4} style={{width:"100%", height:"100%"}} >
                            <img src={Photo3} className="photoGallery-image1" onClick={() => handleClickOpen(2)} alt="Photo 3"/>
                        </Grid>
                        <Grid className='imageGallerySection1' sx={12} md={6} lg={4} xl={4} style={{width:"100%", height:"100%"}} >
                            <img src={Photo4} className="photoGallery-image1" onClick={() => handleClickOpen(3)} alt="Photo 4"/>
                        </Grid>
                        <Grid className='imageGallerySection1' sx={12} md={6} lg={4} xl={4} style={{width:"100%", height:"100%"}} >
                            <img src={Photo5} className="photoGallery-image1" onClick={() => handleClickOpen(4)} alt="Photo 5"/>
                        </Grid>
                        
                    </Grid>
                </div>

                <Dialog
                    fullWidth={true}
                    maxWidth="md"
                    open={open}
                    onClose={handleClose}
                    // style={{ backgroundColor:'#000', opacity:0.75 }}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogContent>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            style={{ position: 'absolute', right: 16, top: 16 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Carousel selectedItem={currentIndex} showThumbs={false} emulateTouch >  
                            {photos.map((photo, index) => (
                                <div key={index} >
                                    <img src={photo} alt={`Slide ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </DialogContent>
                </Dialog>
            </div>

            <Grid container className={'galleryPhoto'}>
                <Grid style={{ width:"100%"}} className={'galleryPhoto1'} >
                    <Box>
                        <Carousel>
                            {photos.map((photo, index) => (
                                <Box key={index} style={{ width:"100%", height:"100%"}} >
                                    <img src={photo} alt={`Slide ${index}`}  />
                                </Box>
                            ))}
                            
                        </Carousel>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default PhotoGallery;
