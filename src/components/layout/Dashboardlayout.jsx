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

    // const { fileId } = useParams();
  

  // Dispatch when debounced value changes
//   useEffect(() => {
//     if (location.pathname === "/users") {
//       dispatch(fetchUsers({ page: page, size: rowsPerPage, search: search }));
//     }else if(location.pathname === "/beneficiaries"){
//       dispatch(fetchBeneficiaries({page : 1, size : 10, search : search}))
//     }else if(location.pathname === "/transactions"){
//       dispatch(fetchTransactionFiles({page : page, size : rowsPerPage, search : search}))
//     }
//     else if(location.pathname === "/reverse"){
//       // dispatch(fetchTransactionFiles({page : page, size : rowsPerPage, search : search}))
//     }else if(location.pathname.includes("/transactions/file")){
//             dispatch(fetchTransactionFileItems({ fileId, page: 1, size: 10 ,search:search}));
//     }
    
   
//   }, [search, location.pathname]);

  return (
    <Box minHeight="100vh" display="flex" flexDirection={{ xs: 'column', md: 'row' }} bgcolor="#F8F7FA">
      {!isMobile 
      
      &&
      
      <Sidebar />
      }

      <Box flex={1} display="flex" flexDirection="column" sx={{overflow:'auto'}}>
      {/* <Box px={{ xs: 2, sm: 3, md: 4 }} pt={2} pb={3} width="100%">
       
      </Box> */}
      
        <Box flex={1} p={{ xs: 2, md: 0 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout; 