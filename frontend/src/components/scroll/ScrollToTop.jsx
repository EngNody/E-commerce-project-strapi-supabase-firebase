import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material'
import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



export default function ScrollToTop() {

  const trigger = useScrollTrigger();

  return (
    <Zoom in={useScrollTrigger({threshold:100})}>
      <Fab 
      onClick={() => {
        window.scrollTo(0, 0)
      }
      }
      sx={{position:"fixed" ,right:"33px",bottom:"33px"}} size="small" color="primary" aria-label="add">
        <KeyboardArrowUpIcon fontSize="medium"/>
      </Fab>
    </Zoom>
  )
}
