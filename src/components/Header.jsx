import React from 'react'
import Box from '@mui/material/Box';
import sky_image from '../../public/sky_image.jpg';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {   IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Header = () => {
  return (
    <>
      <Box sx={{
        // height:'40vh',
        height: {
          xs: '40vh', 
          sm:'30vh',
          md:'40vh', 
          lg:'40vh', 
        },
 width:'100vw', bgcolor:'pink', display:'flex', 
      flexDirection : {
        xs:'column', 
        sm:'column',
        md:'column', lg:'row',
      },

        justifyContent:'center', alignItems:'center', flexWrap: "wrap", 

        bgcolor:'#f6f6f62f',
        // bgcolor:'#000',
        
         fontSize:'30px', 
        fontWeight:'bold',
        position:'relative', 
        


        }}>
 
      <Box sx={{ 
        height:'30vh', width:'100vw',
           backgroundImage: `url(${sky_image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
         position:'absolute', top:'0px',
      }}>

      </Box>

      <Box 
      sx={{ 
          width:'70vw', bgcolor:'#fff', height:'14vh',
           position:'absolute',
          bottom:15,
          borderRadius:'30%'
        //   bottom:'0px',right:0
      }}
      >
     
      <Box
      sx={{
        display: "grid",
        // gridTemplateColumns: "repeat(3, 1fr)", // 4 columns
          gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',  // 1 column for extra small screens (mobile)
          sm: 'repeat(2, 1fr)',  // 2 columns for small screens (tablet)
          md: 'repeat(3, 1fr)', 
          lg: 'repeat(3,1fr)', // 3 columns for medium screens (desktop)
        },
        gap: 2,
        alignItems: "center",
        // justifyContent:'center',
        bgcolor: "#fff",
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >

      {/* Location */}
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', gap:1}}>
        <Typography variant="subtitle2" fontWeight={600}>
          Location
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',gap:6}}>
        <Typography variant="subtitle2" fontWeight={600} color='#807474ff'>
          Choose Location
        </Typography>
        <ArrowDropDownIcon sx={{color:'#807474ff'}}/>
        </Box>
       
      </Box>

      {/* Date */}
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', gap:1}}>
        <Typography variant="subtitle2" fontWeight={600}>
          Date
        </Typography>
    <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',gap:10}}>
        <Typography variant="subtitle2" fontWeight={600} color='#807474ff'>
          Choose Date
        </Typography>
        <CalendarMonthIcon sx={{color:'#807474ff'}}/>
        </Box>
       
      </Box>

      {/* Game Type */}
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', gap:0,
         justifyContent:'center'
        // alignItems:'center'
         }}>

<Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:20}}>
        <Typography variant="subtitle2" fontWeight={600} marginTop={0}>
          Game Type
        </Typography>
           <IconButton
          sx={{
            bgcolor: "green",
            width:50,
            height:50,
            borderRadius:1,
            display:'flex',
            marginTop:0,
            justifyContent:'center',color: "#fff",
            "&:hover": { bgcolor: "darkgreen" },
          }}
        >
          <SearchIcon />
        </IconButton>

        </Box>
            <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',gap:10}}>
         <Typography variant="subtitle2" fontWeight={600} color='#807474ff'>
          Choose Game
        </Typography>

         <Box display="flex" justifyContent="center" alignItems="center" sx={{paddingLeft:4}}>
   <ArrowDropDownIcon sx={{color:'#807474ff'}}/>



        {/* <IconButton
          sx={{
            bgcolor: "green",
            width:50,
            height:50,
            borderRadius:1,
            display:'flex',
            justifyContent:'center',color: "#fff",
            "&:hover": { bgcolor: "darkgreen" },
          }}
        >
          <SearchIcon />
        </IconButton> */}
      </Box>


        </Box>
      
      </Box>

 
    </Box>

      </Box>

 
      </Box>
    </>
  )
}

export default Header
