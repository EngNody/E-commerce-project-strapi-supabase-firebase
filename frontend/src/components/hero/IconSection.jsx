import React from 'react'
import { Container, Stack, Box , useTheme, Divider, useMediaQuery } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const myicons =[
  {icon:<ElectricBoltIcon/>, title:"Fast Delevery", text:"Start from $10"},
  {icon:<WorkspacePremiumIcon/>, title:"Money Guarantee", text:"7 Days Back"},
  {icon:<AccessAlarmIcon/>, title:"365 Days", text:"For free return"},
  {icon:<CreditScoreIcon/>, title:"Payment", text:"Secure system"},
]

export default function IconSection() {
    const theme = useTheme();
    
  return (
    <Container sx={{bgcolor:"#000"}}  
>
      <Stack 
        divider={ useMediaQuery('(min-width:930px)')?<Divider orientation="vertical" flexItem />:null}
      sx={{display:"flex",  flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap", gap:2, mt: 2, mb: 4}}
      >
        {myicons.map((item) => (
        <Box  key={item.text} alignItems="center" 
          sx={{display:"flex",  flexDirection:"row", textAlign: "center",
            justifyContent:useMediaQuery('(min-width:630px)')?"center":"left",width:"250px",mb: 2,userSelect:"none",flexGrow:1,gap:4 , color:"white"}} 
          >

         {item.icon} 

           <Box   sx={{display:"flex",  flexDirection:"column", justifyContent:"center", alignItems:"center", gap:1, mb: 1}}>
            
             <h3>{item.title}</h3>
            <span style={{fontWeight:"300"    , color:"rgba(255, 255, 255, 0.7)"
                // , color:theme.palette.text.primary
             
                }}>{item.text}</span>

           </Box>


          </Box>
        ))}
      </Stack>
    </Container>
  )
}
