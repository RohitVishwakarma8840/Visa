import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, Divider } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const sidebarItems = [
      { label: 'Home', icon: 'user', key: 'users', path : "/" },
      { label: 'Create Turf', icon: 'lock', key: 'permissions', path : "/create-turf" },
      { label: 'Approve Bookings', icon: 'user', key: 'beneficiary', path : "/get-booking" },
      { label: 'Charts', icon: 'swap', key: 'transactions', path : "/" },
      { label: 'Revenue', icon: 'reverse', key: 'reverse', path : "/" },

    ]

const icons = {
  user: (
    <svg width="20" height="20" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
  ),
  lock: (
    <svg width="20" height="20" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="8" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
  ),
  swap: (
    <svg width="20" height="20" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 17l5-5-5-5"/><path d="M21 12H8"/><path d="M8 7l-5 5 5 5"/><path d="M3 12h13"/></svg>
  ),
  reverse: (
  <svg width="20" height="20" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M9 10H5V6" />
    <path d="M5 10c1.5-4 9-4 11 0" />
    <path d="M15 14h4v4" />
    <path d="M19 14c-1.5 4-9 4-11 0" />
  </svg>
),

};

const drawerWidth = 260;

const Sidebar = () => {
  const location = useLocation();

  const [validatedSidebarItems, setValidatedSidebarItems] = useState([ ])
  // const [activeNav, setActiveNav] = useState('/users');
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const onClick = (listItem) => {
    console.log('listItem on 232313113', listItem);
    // setActiveNav(listItem.key);
    navigate(listItem.path);
  };


    const handleLogout = () => {
    //    handleClose();
       dispatch(logout());
       navigate('/login');
     }
  
//   useEffect(() => {
//     const userStr = localStorage.getItem("user");
//     let user = null;
//     if (userStr) {
//       try {
//         user = JSON.parse(userStr);
//       } catch (e) {
//         console.error("Failed to parse user from localStorage:", e);
//       }
//     }
//   }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#fff', borderRight: '1px solid #EEEEEE', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
      }}
    >
      
      <Box sx={{ p: 3 }}>
        {/* <Typography variant="h5" color="primary" fontWeight="bold" mb={3} fontFamily="Arial Black">
        NTT Data
        </Typography> */}
        {/* <Box sx={{mb:3}}>
          <img src="shuttle.jpg" alt="" style={{width:'210px',height:'40px',
objectFit: 'contain',
      display: 'block'


          }} />
        </Box> */}

        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            justifyContent: "center",
          }}
        >
          <img
            src="shuttle.jpg"
            alt="Logo"
            style={{
              width: 38,
              height: 38,
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#344767",
              letterSpacing: 0.5,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Dashboard
          </Typography>
        </Box>

        <Divider sx={{ mb: 1 }} />


        
        <List>
            <Box key={"testdaavv"} mb={2}>
           
              {sidebarItems.map(item => (
                <ListItem
                  // button
                  key={item.key}
                  selected={location.pathname === item.path}
                  onClick={() => onClick(item)}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    color: location.pathname === item.path ? '#fff' : '#A3AED0',
                    bgcolor: location.pathname === item.path ? '#6484C1' : 'transparent',
                    '&:hover': { bgcolor: '#E7ECF7', color: '#6484C1' },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>{icons[item.icon]}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 500, color: location.pathname === item.path ? '#fff' : '#222' }}
                  />
                </ListItem>
              ))}
            </Box>
        </List>
      </Box>
      <Box sx={{ p: 3 }}>
        <button
          style={{
            width: '100%',
            padding: '12px',
            background: '#F8F7FA',
            color: '#6484C1',
            border: 'none',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            marginTop: 16,
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
