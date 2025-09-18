import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Navbar = () => {
  return (
    <>
    <Box sx={{
        // height:'12vh',
          height: { 
          xs: '20vh', 
          sm: '12vh', 
          md: '14vh',
        },
         width:'100%', bgcolor:'white', display:'flex', justifyContent:'space-between', alignItems:'center', color:'white', fontSize:'30px', fontWeight:'bold', 
        // padding:'0px 0px 0px 70px '
        m:0,p:0,
        px:6,
        overflow:'hidden',
          flexDirection: { xs: 'column', sm: 'row', md:'row' },  
        alignItems: { xs: 'center', sm: 'center' }, 
        gap: { xs: 2, sm: 0 }, 
    }}>


        <Box sx={{display:'flex'}} >
            <img src="shuttle.jpg" alt="" style={{width:'16%', borderRadius:'50%', height:'50%'}}  />

            <Box sx={{marginTop:'3px', marginLeft:'5px'}}>
                <Typography sx={{color:'green', fontWeight:'600'}}>VSA</Typography>
                <Typography sx={{color:'black', fontWeight:'550'}}>V Sport Academy</Typography>
                
            </Box>
        </Box>


        <Box sx={{display:'flex', alignItems:'center',justifyContent:'right', gap:'10px', paddingLeft:'0px'}}>
            <Typography variant="body1" color="initial" sx={{fontWeight:'550'}}>My Booking</Typography>

            <img src="pro_pic.jpg" alt=""  style={{width:'20%', borderRadius:'50%', height:'50%',marginLeft:'4px'}} />
        </Box>

    </Box>
      
    </>
  )
}

export default Navbar
