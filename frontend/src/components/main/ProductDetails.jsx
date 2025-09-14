import { Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { AddShoppingCartOutlined } from '@mui/icons-material';

export default function ProductDetails({clickedProduct,item}) {
  console.log(item)


const [selectimg, setselectimg] = useState(0);

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
       if (newAlignment !== null) {

    setAlignment(newAlignment);
       }
  }

  return (
    <div>

        <Box sx={{display:"flex",alignItems:"center", width:"360",gap:2.5, flexDirection:{xs:"column",sm:"row"}}}>

        <Box display={"flex"}>



          
            {/* <img width={300} src="src\images\OIF.webp" alt="" /> */}
            <img width={360} src={item.productimg[selectimg].url} alt="" />
        </Box>


        <Box sx={{textAlign:{xs:"center",sm:"left", userSelect:"none"}}}>
            <Typography variant='h5'>{clickedProduct.productTitle}</Typography>

            <Typography my={0.4} fontSize={"22px"} color='crimson' sx={{userSelect:"none"}}>
                {clickedProduct.productPrice}
                </Typography>

            <Typography variant='body1' sx={{userSelect:"none"}}> {item.productDescription}</Typography>

            <Stack direction={"row"} gap={1} my={2} width={"300px"} sx={{justifyContent:{xs:"center",sm:"left"}}}>

             <ToggleButtonGroup
      value={selectimg}
      exclusive
      onChange={handleAlignment}
sx={{
              ".Mui-selected ": {
                border: "1px solid royalblue !important",
                borderRadius:"5px !important",
                opacity:"1",
                backgroundColor: "initial",
              },
            }}    >
                
                {/* {["src/images/OIF.webp","src/images/OIP.webp"].map((item) => { */}
                {item.productimg.map((item,index) => {

                  return(
                      <ToggleButton key={item.id} value={index}  sx={{width:"110px",height:"110px",mx:5 ,p:"0",opacity:"0.5",margin:"5px !important"}}>


                    <img  src={item.url} alt="" style={{borderRadius:3,width:"100%",height:"100%",objectFit:"cover",cursor:"pointer"}}  
                    onClick={() => {
                      setselectimg(index)
                    }
                    }/>
                  
                    </ToggleButton>


                  )
                } )}
                                 
               </ToggleButtonGroup>

              

            </Stack>

            <Button 
            sx={{textTransform:"capetalize",mb:{xs:1,sm:0}}}
            variant='contained'
            >
                <AddShoppingCartOutlined sx={{mr:1}} fontSize='small'/>
                Buy now

            </Button>



        </Box>

        </Box>
      
    </div>
  )
}
