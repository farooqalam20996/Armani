import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ArmaniWelcome = () => {
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
    return(
        <>

            <div className='armaani-Welcome' >
                <img src={require('../../Images/Armani-banner.jpg')} className='imageBanner' style={{ width:"100%", height:"100%", marginTop:'-10rem'}}  />

                <Typography style={{ fontSize:"1.25rem", fontWeight:"600", marginTop: '3rem', textAlign:'left' }} >
                    Welcome to Armani Beach Residences at Palm Jumeirah
                </Typography>
            </div>

            {/* <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                width:"100%",
                height:'27rem'
            }} >
                <img src={require('../../Images/Giorgio_armani.jpg')} style={{ width:"50%", height:"100%"}} />

                <div style={{ width:"50%", height:"100%", backgroundColor:"#262216", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }} >
                    <Typography style={{ width:"85%", color:"#fff", fontSize:'1rem'  }} >
                        “Tadao Ando is an absolute master of architecture, with an unmistakable aesthetic style that comes very close to my sensibility”
                        <Typography style={{ textAlign:"left", color:"#fff", fontSize:"1.25rem", fontWeight:"600"}} >
                            Giorgio Armani
                        </Typography>
                    </Typography>

                    <Typography style={{ width:"85%", color:"#fff", fontSize:'1rem',  marginTop:"3rem" }} >
                        “I read his heart and he does the same with mine; we share a passion for beauty”
                        <Typography style={{ textAlign:"left", color:"#fff", fontSize:"1.25rem", fontWeight:"600"}} >
                            Tadao Ando
                        </Typography>
                    </Typography>
                </div>
            </div> */}

            {/* <div className='armaaniDiscover' >
                <div style={{ width:"50%", height:"100%", backgroundColor:"#EAE7DB", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column",overflow:'auto' }} >
                    <Typography style={{ width:"85%", color:"#262216", fontSize:'1rem'  }} >
                            Discover a world of timeless elegance.

                            Setting a new standard for ultra-luxury living, Armani Beach Residences at Palm Jumeirah is located on the shores of Dubai’s famous manmade islands, one of the world’s most exclusive residential neighborhoods.
                            Enjoying sweeping, panoramic views of the Arabian Gulf as well as Dubai’s famed skyline, Armani Beach Residences at Palm Jumeirah is designed to achieve harmony between architecture, the surrounding seascape and the senses.

                            The magnificent elevated entry experience sets the tone, providing residents with extravagant ocean views from a range of angles. Throughout the building, the interplay of light and shadow amplifies a series of stylish design elements, including the overhanging arch and the many water features and pools.
                    </Typography>
                </div>

                <div style={{ width:"50%", height:"100%"}} >
                    <Box>
                    <Carousel>
                        {items.map((item, i) => (
                            <Box key={i} style={{ width:"50%", height:"100%"}} >
                                <img src={item.imgPath} alt={item.name} className="carousel-image" />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
                </div>

            </div> */}

            {/* <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                width:"100%",
                height:'27rem'
            }} >
                <img src={require('../../Images/Tadao.jpg')} style={{ width:"50%", height:"100%"}} />

                <div style={{ width:"50%", height:"100%", backgroundColor:"#262216", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }} >
                    <Typography style={{ width:"85%", color:"#fff", fontSize:'1rem'  }} >
                    Founded in 2000, Armani/Casa is a world leader in the luxury furnishings sector. A byword for elegance and style, it stems from Giorgio Armani’s living dream of a warm, harmonious, highly comfortable and sophisticated haven. Today Armani/Casa offers a complete range of products for home furnishing: from furniture and accessories, from exclusive fabrics to wallcoverings as well as kitchen and bath systems that subtly merge stylistic features and technology. Since 2004, the Armani/Casa Interior Design Studio has provided complete interior design services to private individuals and property developers, from the conceptual phase under the artistic direction of Giorgio Armani, through to the management of construction.
                        
                    </Typography>
                </div>
            </div> */}

            <Grid container style={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center",
                    width:"100%",
                    // height:'27rem'
            }} >
                   <Grid style={{ width:"50%", height:'30rem'}} xs={12} md={12} lg={6} xl={6} >
                        <img src={require('../../Images/Giorgio_armani.jpg')} style={{ width:"100%", height:"100%"}} />
                   </Grid>

                    <Grid style={{ width:"50%",height:'30rem', backgroundColor:"#262216", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }} xs={12} md={12} lg={6} xl={6} >
                        <Typography style={{ width:"85%", color:"#fff", fontSize:'1rem'  }} >
                            “Tadao Ando is an absolute master of architecture, with an unmistakable aesthetic style that comes very close to my sensibility”
                            <Typography style={{ textAlign:"left", color:"#fff", fontSize:"1.25rem", fontWeight:"600"}} >
                                Giorgio Armani
                            </Typography>
                        </Typography>

                        <Typography style={{ width:"85%", color:"#fff", fontSize:'1rem',  marginTop:"3rem" }} >
                            “I read his heart and he does the same with mine; we share a passion for beauty”
                            <Typography style={{ textAlign:"left", color:"#fff", fontSize:"1.25rem", fontWeight:"600"}} >
                                Tadao Ando
                            </Typography>
                        </Typography>
                    </Grid>
            </Grid>

            <Grid container className='armaaniDiscover' >
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
                                <Box key={i} style={{ width:"50%", height:"100%"}} >
                                    <img src={item.imgPath} alt={item.name} className="carousel-image" />
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                </Grid>
            </Grid>

            <Grid container style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                width:"100%",
                // height:'27rem'
            }} >
                    <Grid style={{ width:"50%", height:'30rem'}} xs={12} md={12} lg={6} xl={6} >
                        <img  src={require('../../Images/Tadao.jpg')} style={{ width:"100%", height:"100%"}} />
                   </Grid>

                    <Grid style={{ width:"50%", height:'30rem', backgroundColor:"#262216", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }} xs={12} md={12} lg={6} xl={6} >
                        <Typography style={{ width:"85%", color:"#fff", fontSize:'1rem'  }} >
                            Founded in 2000, Armani/Casa is a world leader in the luxury furnishings sector. A byword for elegance and style, it stems from Giorgio Armani’s living dream of a warm, harmonious, highly comfortable and sophisticated haven. Today Armani/Casa offers a complete range of products for home furnishing: from furniture and accessories, from exclusive fabrics to wallcoverings as well as kitchen and bath systems that subtly merge stylistic features and technology. Since 2004, the Armani/Casa Interior Design Studio has provided complete interior design services to private individuals and property developers, from the conceptual phase under the artistic direction of Giorgio Armani, through to the management of construction.
                        </Typography>
                    </Grid>
            </Grid> 

            </>
        
    )
}

export default ArmaniWelcome;