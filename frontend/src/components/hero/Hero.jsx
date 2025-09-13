import React from "react";
import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";



const myslider =[
  {text:"Men", link:"./images/banner-15.jpg"},
  {text:"Woman", link:"./images/banner-25.jpg"},
]



export default function Hero() {
  const theme= useTheme();
  return (
    <Container
    >
<Box       sx={{pt:2, mt: 2.5, mb: 4, display: "flex", textAlign: "center", gap: 2}}
>
        {/* <Box sx={{ border: "12px solid yellow", flexGrow: "1" }}> */}

      <Swiper
      loop={true}
        style={{ position: "relative" }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

{myslider.map((item) => {
        return (
        
           <SwiperSlide key={item.link} className="parent-slider">
          <img
            src={item.link}
            alt=""
          />
              <Box     

              sx={{
                   [theme.breakpoints.up('sm')]: {
 position:"absolute"
 ,top:"50%",transform:"translateY(-50%)"
,left:"10%",zIndex:10, textAlign: "left"
    },
                 [theme.breakpoints.down('sm')]: {
 pt: 4, pb: 6 },
  }}

 >
              <Typography
              variant="h6"
                sx={{
                  fontSize: "18px",
                  color: "#2b3445",
                }}>
                LIFESTYLE COLLECTION
              </Typography>

               <Typography
              variant="h4"
                sx={{
                  color: "#222",
                  fontWeight: 600,
                  my:1,
                }}>
                {item.text}
              </Typography>

            <Stack justifyContent={{xs:"center",sm:"left"}} direction="row" alignItems={"center"} spacing={2} sx={{ mb: 1 }}>
                  <Typography  
                  variant="h5"
                  sx={{color:"#333"}}>
                      SALE UP TO
                  </Typography>
                
               <Typography  
                  variant="h5"
                  sx={{color:"#d23f57"}}>
                      30% oFF
                  </Typography>
            </Stack>


               <Typography  
                variant="h6"
                sx={{color:"#2b3445"}}>
                    Get Free Shipping on Orders Over $99.00
                </Typography>

                <Button
                    sx={{
                        color: "#fff",
                        px:5,
                        py:1,
                        mt:2,
                        backgroundColor: "#222",
                        transition: "all 0.2s ease",
                        borderRadius: "1px",
                        "&:hover": {
                        bgcolor: "#151515",
                        boxShadow:"0px 4px 16px rgba(43, 52, 69, 0.2)",
                        },
                        
                        }} 
                        href="#"
                        variant="contained">
                          
                shop now
                </Button>

        </Box>


        </SwiperSlide>
)})}


      </Swiper>

      {/* </Box> */}

      <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.5%" }}>
        <Box sx={{ position: "relative" }}>
          <img
            width={"100%"}
            height={"50%"}
            src=".\images\banner-17.jpg"
            alt=""
          />

          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: "18px",
                color: "#2b3445",
              }}
            >
              NEW ARRIVALS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                color: "#2b3445",
                mt: 1,
                fontWeight: "bold",
              }}
            >
              SUMMER
            </Typography>

            <Typography variant="h6" sx={{ color: "#2b3445" }}>
              Sale 20% off
            </Typography>

            <Link
              sx={{
                // textDecoration: "none",
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "all 0.2s ease",
                // fontSize: "1.2rem",
                // fontWeight: "bold",
                // mt: 1,
                "&:hover": {
                  color: "#d23f57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            width={"100%"}
            height={"50%"}
            src=".\images\banner-16.jpg"
            alt=""
          />

          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: "18px",
                color: "#2b3445",
              }}
            >
              GAMING 4K
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                color: "#2b3445",
                fontWeight: "bold",
                mt: 1,
              }}
            >
              DESKTOPS &
            </Typography>

            <Typography variant="h6" sx={{ color: "#2b3445" }}>
              LAPTOPS
            </Typography>

            <Link
              sx={{
                // textDecoration: "none",
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "all 0.2s ease",
                // fontSize: "1.2rem",
                // fontWeight: "bold",
                // mt: 1,
                "&:hover": {
                  color: "#d23f57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
</Box>


      <IconSection/>
    </Container>
  );
}
