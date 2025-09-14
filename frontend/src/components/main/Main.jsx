import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  IconButton,
  Rating,
  ToggleButton,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../Redux/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion } from "motion/react"

// import { Scale } from "@mui/icons-material";


export default function main() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newValue) => {
     if (newValue !== null) {
    setAlignment(newValue);
    setmyDate(newValue)
  }};

  const theme = useTheme();

    const [open, setOpen] = React.useState(false) ;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const API_URL = import.meta.env.VITE_BASE_URL;


const allProductsAPI = 'products?populate=*'
const menCategoryAPI = 'products?populate=*&filters[category][$eq]=men'
const womanCategoryAPI = 'products?populate=*&filters[category][$eq]=woman'

const [clickedProduct, setclickedProduct] = useState({});

  const [myDate, setmyDate] = useState(allProductsAPI);



    const { data, error, isLoading } = useGetProductByNameQuery(myDate)

if(data){
  console.log(data.data);

}

 function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}

if(isLoading){

  return(
    // <Typography variant="h6" textAlign={"center"} my={10}>
    //   Loading...............
    // </Typography>


    <Container sx={{textAlign:"center", py:11}}>  
  
        <GradientCircularProgress />
  
</Container>


  )
}

if(error){
        console.log(error)
  return(

 <Container sx={{textAlign:"center", marginTop:"50px",marginBottom:"50px",userSelect:"none"}}>
     <Typography variant="h6" my={3}>
  {error.
// @ts-ignore
  error}
     </Typography >
     <Typography   variant="h6" > 
       Please try again later
     </Typography>
 </Container>
  )
}



if(data){

    return (
    <Container sx={{ my: 9 }}>
      <Stack
        gap={3}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <Box>
          <ToggleButtonGroup
            color="error"
            value={myDate}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected ": {
                border: "1px solid rgba(233, 69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={menCategoryAPI}
              aria-label="centered"
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womanCategoryAPI}
              aria-label="right aligned"
            >
              Woman Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
      >
   

           <AnimatePresence>

        {data.data.map((item) => {


    // إعدادات السلايدر
    const settings = {
      dots: true,              // يظهر النقط تحت الصور
  infinite: true,          // يخلي السلايدر يلف في حلقة
  speed: 500,              // سرعة الانتقال (ms)
  slidesToShow: 1,         // كام صورة تتعرض في نفس الوقت
  slidesToScroll: 1,       // كام صورة تتحرك كل مرة
  autoplay: true,          // تشغيل تلقائي
  autoplaySpeed: 4000,     // الوقت بين كل صورة والتانية (2 ثانية)
  pauseOnHover: true,      // يقف لو الماوس فوق الصورة
   
};


          return (
            
            <Card
            component={motion.div}
            layout className="popular-movies"
            transition={{duration:1,type: "spring", stiffness: 100}}
              key={item.id}
              sx={{
                maxWidth: 333,
                mt: 6,
                mx: 1,
                ":hover .MuiCardMedia-root": { scale:" 1.1 ",transition:"0.4s",rotate:"1deg"},
              }}
            >
  {/* سلايدر الصور */}
        <Slider {...settings}>

      {item.productimg.map((img) => {
        // لو اللينك Cloudinary هيكون كامل (https://res.cloudinary.com)
        // لو لينك محلي هيكون نسبي، فهنضيف http://localhost:1337
        const imageUrl = img.url.startsWith("http")
          ? img.url
          : `${API_URL}${img.url}`;

return(

              <CardMedia
              key={img.id}
                sx={{ height: 270 }}
                // image="static/images/cards/contemplative-reptile.jpg"

                // image={`http://localhost:1337${item.productimg[0].url}`}
                //  للصور من الموقع المحلي فقط
                // image={`${import.meta.env.VITE_BASE_URL}${item.productimg[0].url}`}
                // للصور من الموقع الرسمي فقط  cloudinary  
                // image={`${item.productimg[0].url}`}
          

                 image={imageUrl}
                title={item.productTitle}
              />)

      })}
      </Slider>
              {/* باقي تفاصيل المنتج مرة واحدة فقط */}

              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component={"div"}>
                    {item.productTitle}
                  </Typography>

                  <Typography variant="subtitle1" component={"p"}>
                    {item.productPrice}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                 {item.productDescription}
                 </Typography>
              </CardContent>

              <CardActions
                sx={{
                  textTransform: "capitalize",
                  justifyContent: "space-between",
                }}
              >
                <Button size="large" variant="outlined" 
                onClick={() => {
                  handleClickOpen();
                  setclickedProduct(item)
                  console.log(item)
                }}>
                  <AddShoppingCartIcon
                    fontSize="small"
                    sx={{ marginRight: 1 }}
                  />
                  Add to cart
                </Button>

                <Rating
                  name="read-only"
                  value={item.productRate}
                  readOnly
                  // precision={0.5}
                  size="small"
                />
              </CardActions>
            </Card>
          );
        })}
                   </AnimatePresence>



      </Stack>

 <Dialog
        sx={{".MuiPaper-root":{minWidth:{xs:"100%",md:800}}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
    
     <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { color: "red", rotate: "180deg", transition: "0.5s" },
            }}
          >
            <Close />
          </IconButton>
          {/* <ProductDetails/> */}


        <DialogTitle id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
        </DialogTitle>
        <DialogContent>

          <ProductDetails clickedProduct={clickedProduct} item={clickedProduct}/>

          <DialogContentText id="alert-dialog-description">
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>



      </Dialog>

    </Container>
  );
}


}
