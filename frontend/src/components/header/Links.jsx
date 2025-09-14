import { ExpandMore, KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Links({ title }) {
  return (
    <div>
      {/* <div  style={{ display: "flex", gap: "20px"}}> */}
       <Box   sx={{ display: "flex", alignItems: "center",position:"relative",":hover .show-when-hover":{display:"block"} ,":hover":{cursor:"pointer"}  }}>
          <Typography sx={{userSelect:"none"}}>
           {title}
          </Typography>
          <ExpandMore/>
          

<Box   className="show-when-hover"
 sx={{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",
    width:"100%",zIndex:5,minWidth:"170px",display:"none"
  }}
>
  <Paper
  sx={{mt:2}}
     elevation={3}>
  
      <nav aria-label="secondary mailbox folders">
            <List >
              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",fontWeight:"300"}}} primary="Dashboard" />
                  <Box sx={{ flexGrow: 1 }} />
                </ListItemButton>
              </ListItem>
                         
                            <ListItem disablePadding sx={{position:"relative",":hover .show-in-hover":{display:"block"}}} >
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",fontWeight:"300"}}} primary="Products" />
                  <Box sx={{ flexGrow: 1 }} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
<Box className="show-in-hover" sx={{position:"absolute",left:"100%",top:0
,width:"100%",zIndex:1,right:7
  ,display:"none"
  }}>
  <Paper sx={{ml:1,minWidth:"150px"}}>
    
     <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",fontWeight:300}}} primary="Add Product" />
                  <Box sx={{ flexGrow: 1 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",fontWeight:300}}} primary="Edit product" />
                   <Box sx={{ flexGrow: 1 }} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
  </Paper>
</Box>

              </ListItem>

                            <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",fontWeight:"300"}}} primary="Orders" />
                  <Box sx={{ flexGrow: 1 }} />
                </ListItemButton>
              </ListItem>

                            <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",fontWeight:"300"}}} primary="Profile" />
                  <Box sx={{ flexGrow: 1 }} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
  </Paper>
</Box>

       </Box>


{/* 

the following code is commented out because it is not used in the current implementation
i used them in header3.jsx file with alot of repeat code  
we can do the code in top and call it instead  

       <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{userSelect:"none"}}>
           Mega menu
          </Typography>
          <ExpandMore/>
       </Box>




       <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{userSelect:"none"}}>
           full screen menu
          </Typography>
          <ExpandMore/>
       </Box>



       <Box sx={{ display: "flex", alignItems: "center" }}>
         <Typography sx={{userSelect:"none"}}>
          pages
         </Typography>
         <ExpandMore/>
      </Box>



      <Box sx={{ display: "flex", alignItems: "center" }}>
         <Typography sx={{userSelect:"none"}}>
          user account
         </Typography>
         <ExpandMore/>
      </Box>




      <Box sx={{ display: "flex", alignItems: "center" }}>
         <Typography sx={{userSelect:"none"}}>
          vendor account
         </Typography>
         <ExpandMore/>
      </Box> */}


 </div>
    // </div>
  )
}
