import { Box, Button } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { AddShoppingCartOutlined } from '@mui/icons-material';

export default function ProductDetails() {
  return (
    <div>

        <Box sx={{display:"flex",alignItems:"center",gap:2.5, flexDirection:{xs:"column",sm:"row"}}}>

        <Box display={"flex"}>
            <img width={300} src="src\images\OIF.webp" alt="" />
        </Box>


        <Box sx={{textAlign:{xs:"center",sm:"left"}}}>
            <Typography variant='h5'>WOMEN'S FASHION</Typography>

            <Typography my={0.4} fontSize={"22px"} color='crimson'>
                $12.99
                </Typography>

            <Typography variant='body1'> kkkkkkkkkkkkkkkkkkkkkk</Typography>

            <Stack direction={"row"} gap={1} my={2} width={"300px"} sx={{justifyContent:{xs:"center",sm:"left"}}}>
                
                {["src/images/OIF.webp","src/images/OIP.webp"].map((item) => {
                  return(
                    <img key={item} src={item} alt="" width={"100px"} height={"90px"} style={{borderRadius:3}}/>
                  )
                }
                )}

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
