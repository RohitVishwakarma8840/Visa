import React from 'react'
import Box from '@mui/material/Box';
import sky_image from '../../public/sky_image.jpg';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <>
      <Box sx={{
        height: {
          xs: '50vh', 
          sm: '45vh',
          md: '40vh', 
          lg: '40vh', 
        },
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        bgcolor: '#f6f6f62f',
        fontSize: '30px', 
        fontWeight: 'bold',
        position: 'relative',
        overflow: 'hidden', 
      }}>
 
        {/* Background Image */}
        <Box sx={{ 
          height: {
            xs: '25vh',
            sm: '30vh',
            md: '30vh',
          }, 
          width: '100vw',
          backgroundImage: `url(${sky_image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          position: 'absolute', 
          top: '0px',
        }}>
        </Box>

        {/* Search Card */}
        <Box sx={{ 
          width: {
            xs: '95vw',
            sm: '90vw',
            md: '80vw',
            lg: '70vw',
          }, 
          bgcolor: '#fff', 
          minHeight: {
            xs: '200px',
            sm: '180px',
            md: '14vh',
          },
          position: 'absolute',
          bottom: {
            xs: '10px',
            sm: '15px',
            md: '15px',
          },
          borderRadius: {
            xs: '15px',
            sm: '15px',
            md: '15px',
          },
          boxShadow: 3,
          zIndex: 10,
        }}>
     
          <Box sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',  
              sm: 'repeat(1, 1fr)',  
              md: 'repeat(3, 1fr)',  
              lg: 'repeat(3, 1fr)',
            },
            gap: {
              xs: 3,
              sm: 2,
              md: 2,
            },
            alignItems: "center",
            bgcolor: "#fff",
            p: {
              xs: 3,
              sm: 2,
              md: 2,
            },
            borderRadius: {
              xs: '15px',
              sm: '20px',
              md: '30px',
            },
            boxShadow: 2,
          }}>

            {/* Location */}
            <Box sx={{
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1,
              minHeight: {
                xs: '50px',
                md: 'auto',
              }
            }}>
              <Typography variant="subtitle2" fontWeight={600} sx={{
                fontSize: {
                  xs: '14px',
                  sm: '15px',
                  md: '16px',
                }
              }}>
                Location
              </Typography>
              <Box sx={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7,
                }
              }}>
                <Typography variant="subtitle2" fontWeight={600} color='#807474ff' sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  }
                }}>
                  Choose Location
                </Typography>
                <ArrowDropDownIcon sx={{
                  color: '#807474ff',
                  fontSize: {
                    xs: '20px',
                    md: '24px',
                  }
                }}/>
              </Box>
            </Box>

            {/* Date */}
            <Box sx={{
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1,
              minHeight: {
                xs: '50px',
                md: 'auto',
              }
            }}>
              <Typography variant="subtitle2" fontWeight={600} sx={{
                fontSize: {
                  xs: '14px',
                  sm: '15px',
                  md: '16px',
                }
              }}>
                Date
              </Typography>
              <Box sx={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7,
                }
              }}>
                <Typography variant="subtitle2" fontWeight={600} color='#807474ff' sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  }
                }}>
                  Choose Date
                </Typography>
                <CalendarMonthIcon sx={{
                  color: '#807474ff',
                  fontSize: {
                    xs: '20px',
                    md: '24px',
                  }
                }}/>
              </Box>
            </Box>

            {/* Game Type */}
            <Box sx={{
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1,
              minHeight: {
                xs: '50px',
                md: 'auto',
              }
            }}>
              
              {/* Game Type Header and Search Button Row */}
              <Box sx={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center', 
                justifyContent: 'space-between',
              }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{
                  fontSize: {
                    xs: '14px',
                    sm: '15px',
                    md: '16px',
                  }
                }}>
                  Game Type
                </Typography>
                
                <IconButton sx={{
                  bgcolor: "green",
                  width: {
                    xs: 40,
                    sm: 45,
                    md: 50,
                  },
                  height: {
                    xs: 40,
                    sm: 45,
                    md: 50,
                  },
                  borderRadius: 1,
                  color: "#fff",
                  "&:hover": { bgcolor: "darkgreen" },
                }}>
                  <SearchIcon sx={{
                    fontSize: {
                      xs: '18px',
                      md: '20px',
                    }
                  }}/>
                </IconButton>
              </Box>
              
              {/* Game Selection Row */}
              <Box sx={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7,
                }
              }}>
                <Typography variant="subtitle2" fontWeight={600} color='#807474ff' sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  }
                }}>
                  Choose Game
                </Typography>
                <ArrowDropDownIcon sx={{
                  color: '#807474ff',
                  fontSize: {
                    xs: '20px',
                    md: '24px',
                  }
                }}/>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Header