import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBookings } from '../store/slices/bookingSlice';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  CircularProgress,
  Alert,
  Container,
  Paper,
  Avatar,
  Divider,
  Stack
} from '@mui/material';
import {
  LocationOn,
  Schedule,
  CalendarToday,
  CurrencyRupee,
  CheckCircle,
  Pending,
  BookOnline
} from '@mui/icons-material';

function UserBooking() {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);

  console.log('bookings', bookings)

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.user?.id
  console.log('userId', userId);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserBookings(userId));
    }
  }, [dispatch, userId]);

  if (loading) return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <Paper
        elevation={24}
        sx={{
          p: 6,
          borderRadius: 4,
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <CircularProgress size={60} thickness={4} sx={{ mb: 3 }} />
        <Typography variant="h5" color="primary" fontWeight="600">
          Loading bookings...
        </Typography>
      </Paper>
    </Box>
  );

  if (error) return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
      }}
    >
      <Container maxWidth="sm">
        <Alert
          severity="error"
          variant="filled"
          sx={{
            borderRadius: 3,
            fontSize: '1.1rem',
            '& .MuiAlert-icon': { fontSize: '2rem' }
          }}
        >
          <Typography variant="h6" component="div">
            Error: {error}
          </Typography>
        </Alert>
      </Container>
    </Box>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #6c5ce7 100%)'
    }}>
      {/* Header Section */}
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              My Bookings
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              All your turf reservations in one place
            </Typography>
            <Box
              sx={{
                width: 100,
                height: 4,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 2,
                mx: 'auto'
              }}
            />
          </Box>
        </Container>
      </Paper>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {bookings.length === 0 ? (
          <Box display="flex" justifyContent="center" py={8}>
            <Paper
              elevation={12}
              sx={{
                p: 6,
                borderRadius: 4,
                textAlign: 'center',
                maxWidth: 400,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 3,
                  bgcolor: 'grey.300'
                }}
              >
                <BookOnline sx={{ fontSize: 40, color: 'grey.600' }} />
              </Avatar>
              <Typography variant="h5" fontWeight="600" color="text.primary" gutterBottom>
                No bookings found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                You haven't made any turf bookings yet.
              </Typography>
            </Paper>
          </Box>
        ) : (
          <Stack spacing={4}>
            {bookings.map((turf) => (
              <Card
                key={turf.turfId}
                elevation={16}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }
                }}
              >
                {/* Turf Header */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    p: 4
                  }}
                >
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={8}>
                      <Typography variant="h4" fontWeight="700" gutterBottom>
                        {turf.turfName}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <LocationOn sx={{ fontSize: 20 }} />
                        <Typography variant="h6" sx={{ opacity: 0.9 }}>
                          {turf.location}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ textAlign: { xs: 'left', md: 'right' }, mt: { xs: 2, md: 0 } }}>
                        <Paper
                          elevation={0}
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            px: 3,
                            py: 1.5,
                            borderRadius: 3,
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <CurrencyRupee sx={{ fontSize: 24, mr: 0.5 }} />
                          <Typography variant="h5" fontWeight="700">
                            {turf.price}
                          </Typography>
                        </Paper>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Booked Slots */}
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                    <Schedule color="primary" />
                    <Typography variant="h5" fontWeight="600" color="primary">
                      Booked Slots
                    </Typography>
                  </Stack>
                  
                  <Grid container spacing={3}>
                    {turf.bookedSlots.map((slot) => (
                      <Grid item xs={12} sm={6} lg={4} key={slot.slotId}>
                        <Paper
                          elevation={4}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)',
                            border: '1px solid rgba(103, 126, 234, 0.1)',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(103, 126, 234, 0.15)'
                            }
                          }}
                        >
                          <Stack spacing={2}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                                  <Schedule sx={{ fontSize: 18 }} />
                                </Avatar>
                                <Typography variant="h6" fontWeight="600">
                                  {slot.time}
                                </Typography>
                              </Stack>
                              <Chip
                                icon={slot.isBooked ? <CheckCircle /> : <Pending />}
                                label={slot.isBooked ? 'Confirmed' : 'Available'}
                                color={slot.isBooked ? 'success' : 'warning'}
                                variant="filled"
                                size="small"
                                sx={{ fontWeight: 600 }}
                              />
                            </Box>
                            
                            <Divider sx={{ opacity: 0.7 }} />
                            
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                                <CalendarToday sx={{ fontSize: 18 }} />
                              </Avatar>
                              <Typography variant="body1" color="text.secondary" fontWeight="500">
                                {new Date(slot.date).toLocaleDateString('en-IN', {
                                  weekday: 'short',
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}

export default UserBooking;