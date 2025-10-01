import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu, MenuItem, IconButton, Button } from "@mui/material";
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {logout} from '../store/slices/authSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleProfile = () => {

    handleClose();
    navigate('/user-booking');
  }

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    navigate('/login');
  }

  const modalStyle = {
    position: 'absolute',
    top: '20%',
    right: '0%',
    transform: 'translate(-50%, -50%)',
    fontSize : {
      xs: 6,
      sm:6,

    },
    width: { xs: 280, sm: 320, xs:100 },
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 0,

    p: 3,
  };

  return (
    <>
      <Box sx={{
        height: { 
          xs: '10vh', 
          sm: '12vh', 
          md: '14vh',
        },
        width: '100%', 
        bgcolor: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        color: 'white', 
        m: 0,
        p: 0,
        position:'relative',
        px: { xs: 2, sm: 4, md: 6 },
        overflow: 'hidden',
        flexDirection: 'row',
        minHeight: '60px', 
      }}>

        {/* Logo */}
        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          flex: { xs: 1, sm: 'none' }, 
          minWidth: 0, 
        }}>
          <Box
            component="img"
            src="shuttle.jpg"
            alt="VSA Logo"
            sx={{
              width: { xs: '40px', sm: '50px', md: '60px' },
              height: { xs: '40px', sm: '50px', md: '60px' },
              borderRadius: '50%',
              flexShrink: 0, 
            }}
          />

          <Box sx={{
            marginLeft: { xs: '8px', sm: '12px' },
            minWidth: 0, 
          }}>
            <Typography sx={{
              color: 'green', 
              fontWeight: '600', 
              fontSize: {
                xs: '14px', 
                sm: '16px',
                md: '18px'
              },
              lineHeight: 1.2,
            }}>
              VSA
            </Typography>
            <Typography sx={{
              color: 'black', 
              fontWeight: '550',
              fontSize: {
                xs: '10px',
                sm: '12px',
                md: '14px'
              },
              lineHeight: 1.2,
              whiteSpace: { xs: 'nowrap', sm: 'normal' }, 
            }}>
              V Sport Academy
            </Typography>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          gap: { xs: '6px', sm: '10px', md: '12px' },
          flexShrink: 0, 
        }}>
          <Typography 
            variant="body1" 
            sx={{
              color: 'black',
              fontWeight: '550',
              fontSize: {
                xs: '11px',
                sm: '12px', 
                md: '14px'
              },
              display: { xs: 'none', sm: 'block' }, 
              whiteSpace: 'nowrap',
            }}
          >
            My Booking
          </Typography>

          <Typography 
            variant="body1" 
            sx={{
              color: 'black',
              fontWeight: '550',
              fontSize: '11px',
              display: { xs: 'block', sm: 'none' }, 
              whiteSpace: 'nowrap',
            }}
          >
          Booking
          </Typography>

          <Box
            component="img"
            src="pro_pic.jpg"
            alt="Profile Picture"
            sx={{
              width: { xs: '40px', sm: '50px', md: '60px' },
              height: { xs: '40px', sm: '50px', md: '60px' },
              borderRadius: '50%',
              flexShrink: 0,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              }
            }}
            onClick={handleOpen}
          />
        </Box>


   

     {/* Profile Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="profile-modal-title"
          aria-describedby="profile-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography 
              id="profile-modal-title" 
              variant="h6" 
              component="h2"
              sx={{ 
                mb: 3, 
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'primary.main'
              }}
            >
              Account Options
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                onClick={handleProfile}
                fullWidth
                sx={{
                  py: 1.5,
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  fontSize: '16px',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white'
                  }
                }}
                onClick = {handleProfile}
              >
                Profile
              </Button>
              
              <Button
                variant="contained"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                fullWidth
                sx={{
                  py: 1.5,
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  fontSize: '16px',
                  backgroundColor: 'error.main',
                  '&:hover': {
                    backgroundColor: 'error.dark'
                  }
                }}
                onClick = {handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Modal>

 

        {/* Profile Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="profile-modal-title"
          aria-describedby="profile-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography 
              id="profile-modal-title" 
              variant="h6" 
              component="h2"
              sx={{ 
                mb: 3, 
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'primary.main'
              }}
            >
              Account Options
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                onClick={handleProfile}
                fullWidth
                sx={{
                  py: 1.5,
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  fontSize: '16px',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white'
                  }
                }}
              >
                Profile
              </Button>
              
              <Button
                variant="contained"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                fullWidth
                sx={{
                  py: 1.5,
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  fontSize: '16px',
                  backgroundColor: 'error.main',
                  '&:hover': {
                    backgroundColor: 'error.dark'
                  }
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Modal>

      </Box>
    </>
  )
}

export default Navbar