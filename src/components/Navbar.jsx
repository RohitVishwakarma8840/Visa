import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Navbar = () => {
  return (
    <>
    <Box sx={{
        height:'12vh', width:'100vw', bgcolor:'white', display:'flex', justifyContent:'space-between', alignItems:'center', color:'white', fontSize:'30px', fontWeight:'bold', padding:'0px 0px 0px 70px '
    }}>


        <Box sx={{display:'flex'}} >
            <img src="shuttle.jpg" alt="" style={{width:'16%', borderRadius:'50%', height:'50%'}}  />

            <Box sx={{marginTop:'3px', marginLeft:'5px'}}>
                <Typography sx={{color:'green', fontWeight:'600'}}>VSA</Typography>
                <Typography sx={{color:'black', fontWeight:'550'}}>V Sport Academy</Typography>
                
            </Box>
        </Box>


        <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
            <Typography variant="body1" color="initial" sx={{fontWeight:'550'}}>My Booking</Typography>

            <img src="pro_pic.jpg" alt=""  style={{width:'20%', borderRadius:'50%', height:'50%',marginLeft:'4px'}} />
        </Box>

    </Box>
      
    </>
  )
}

export default Navbar
