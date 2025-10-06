import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  CircularProgress,
  Alert,
  AlertTitle,
  Paper,
  Divider,
  Avatar,
} from '@mui/material';
import {
  CalendarMonth,
  LocationOn,
  AccessTime,
  Person,
  Email,
  ErrorOutline,
} from '@mui/icons-material';
import { getAllBooking } from '../../store/slices/bookingSlice';

function GetBookings() {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);
  const allBook = bookings?.bookings || [];

  useEffect(() => {
    dispatch(getAllBooking());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'confirmed':
        return 'success';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} thickness={4} />
          <Typography variant="h6" sx={{ mt: 3, color: 'text.secondary' }}>
            Loading bookings...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
          p: 2,
        }}
      >
        <Alert severity="error" sx={{ maxWidth: 500 }}>
          <AlertTitle>Error loading bookings</AlertTitle>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            All Turf Bookings
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {allBook.length} {allBook.length === 1 ? 'turf' : 'turfs'} with active bookings
          </Typography>
        </Box>

        {/* Bookings Grid */}
        {allBook.length === 0 ? (
          <Paper
            elevation={0}
            sx={{
              textAlign: 'center',
              py: 8,
              borderRadius: 2,
            }}
          >
            <ErrorOutline sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              No bookings found
            </Typography>
          </Paper>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {allBook.map((turf, index) => (
              <Card
                key={turf.turfId || index}
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                {/* Turf Header */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #5e35b1 0%, #7e57c2 100%)',
                    p: 3,
                    color: 'white',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      justifyContent: 'space-between',
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                        {turf.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: 18 }} />
                        <Typography variant="body2">{turf.location}</Typography>
                      </Box>
                    </Box>
                    <Chip
                      label={`${turf.bookings.length} ${turf.bookings.length === 1 ? 'Booking' : 'Bookings'}`}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </Box>
                </Box>

                {/* Bookings List */}
                <CardContent sx={{ p: 4 }}>
                  <Grid container spacing={3}>
                    {turf.bookings.map((booking, bookingIndex) => (
                      <Grid item xs={12} sm={6} lg={4} key={booking.slotId || bookingIndex}>
                        <Paper
                          elevation={1}
                          sx={{
                            p: 3,
                            height: '100%',
                            borderRadius: 2,
                            transition: 'all 0.3s',
                            border: '1px solid',
                            borderColor: 'grey.200',
                            '&:hover': {
                              borderColor: 'primary.main',
                              transform: 'scale(1.02)',
                              boxShadow: 3,
                            },
                          }}
                        >
                          {/* Status Badge */}
                          <Box sx={{ mb: 2 }}>
                            <Chip
                              label={booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              color={getStatusColor(booking.status)}
                              size="small"
                              sx={{ fontWeight: 600 }}
                            />
                          </Box>

                          {/* Date & Time */}
                          <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                              <CalendarMonth
                                sx={{
                                  color: 'primary.main',
                                  mr: 1.5,
                                  mt: 0.5,
                                  fontSize: 20,
                                }}
                              />
                              <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight={600}>
                                  Date
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                  {formatDate(booking.date)}
                                </Typography>
                              </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                              <AccessTime
                                sx={{
                                  color: 'primary.main',
                                  mr: 1.5,
                                  mt: 0.5,
                                  fontSize: 20,
                                }}
                              />
                              <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight={600}>
                                  Time
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                  {booking.time}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>

                          <Divider sx={{ my: 2 }} />

                          {/* Booked By */}
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              fontWeight={600}
                              sx={{ mb: 1.5, display: 'block' }}
                            >
                              Booked By
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                              <Avatar sx={{ width: 32, height: 32, mr: 1.5, bgcolor: 'primary.light' }}>
                                <Person sx={{ fontSize: 18 }} />
                              </Avatar>
                              <Typography variant="body2" noWrap>
                                {booking.bookedBy.name}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.5 }}>
                              <Email sx={{ fontSize: 16, color: 'text.disabled', mr: 1 }} />
                              <Typography variant="body2" color="text.secondary" noWrap>
                                {booking.bookedBy.email}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default GetBookings;