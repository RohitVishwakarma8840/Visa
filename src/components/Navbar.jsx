import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
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
        px: { xs: 2, sm: 4, md: 6 },
        overflow: 'hidden',
        flexDirection: 'row',
        minHeight: '60px', // Ensure minimum height for very small screens
      }}>

        {/* Logo and Brand Section */}
        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          flex: { xs: 1, sm: 'none' }, // Take available space on mobile
          minWidth: 0, // Allow shrinking
        }}>
          <Box
            component="img"
            src="shuttle.jpg"
            alt="VSA Logo"
            sx={{
              width: { xs: '40px', sm: '50px', md: '60px' },
              height: { xs: '40px', sm: '50px', md: '60px' },
              borderRadius: '50%',
              flexShrink: 0, // Prevent image from shrinking
            }}
          />

          <Box sx={{
            marginLeft: { xs: '8px', sm: '12px' },
            minWidth: 0, // Allow text to shrink if needed
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
              whiteSpace: { xs: 'nowrap', sm: 'normal' }, // Prevent wrapping on mobile
            }}>
              V Sport Academy
            </Typography>
          </Box>
        </Box>

        {/* Right Section - User Info */}
        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          gap: { xs: '6px', sm: '10px', md: '12px' },
          flexShrink: 0, // Prevent shrinking
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
              display: { xs: 'none', sm: 'block' }, // Hide on very small screens
              whiteSpace: 'nowrap',
            }}
          >
            My Booking
          </Typography>

          {/* Mobile version - shorter text */}
          <Typography 
            variant="body1" 
            sx={{
              color: 'black',
              fontWeight: '550',
              fontSize: '11px',
              display: { xs: 'block', sm: 'none' }, // Show only on mobile
              whiteSpace: 'nowrap',
            }}
          >
           My Booking
          </Typography>

          <Box
            component="img"
            src="pro_pic.jpg"
            alt="Profile Picture"
            sx={{
              // width: { xs: '40px', sm: '48px', md: '90px' },
              // height: { xs: '32px', sm: '36px', md: '53px' },
                 width: { xs: '40px', sm: '50px', md: '60px' },
              height: { xs: '40px', sm: '50px', md: '60px' },
              borderRadius: '50%',
              flexShrink: 0,
            }}
          />
        </Box>

      </Box>
    </>
  )
}

export default Navbar