import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Stack, TextField, useTheme, useMediaQuery } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {font} from '../../utils/font.js'


const DashboardLayout = ({ children }) => {
  console.log('children', children)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  console.log("location",location);
  
  const dispatch = useDispatch();





  



  useEffect(() => {
    // setSearchText("");              // reset local searchText
    // dispatch(setSearch(""));       // reset search in Redux too, if needed 
  }, [location.pathname]);


  return (
    <Box minHeight="100vh" display="flex" flexDirection={{ xs: 'column', md: 'row' }} bgcolor="#F8F7FA"
    
    >
      {!isMobile 
      
      &&
      
      <Sidebar />
      }

      <Box flex={1} display="flex" flexDirection="column" sx={{overflow:'auto'}}>
      {/* <Box px={{ xs: 2, sm: 3, md: 4 }} pt={2} pb={3} width="100%">
       
      </Box> */}
      
        <Box flex={1} p={{ xs: 2, md: 0 }} sx={{ overflowX: 'clip' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout; 