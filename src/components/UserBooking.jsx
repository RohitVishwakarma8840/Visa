import React, { useEffect, useState } from 'react';
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
  Stack,
  Tabs,
  Tab,
  Badge
} from '@mui/material';
import {
  LocationOn,
  Schedule,
  CalendarToday,
  CurrencyRupee,
  CheckCircle,
  Pending,
  Cancel,
  BookOnline,
  HourglassEmpty,
  ThumbUp,
  ThumbDown
} from '@mui/icons-material';

function UserBooking() {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);
  const [selectedTab, setSelectedTab] = useState(0);

  console.log('bookings', bookings);

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.user?.id;
  console.log('userId', userId);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserBookings(userId));
    }
  }, [dispatch, userId]);

  // Filter bookings by status
  const getFilteredBookings = () => {
    if (!bookings || bookings.length === 0) return [];

    switch (selectedTab) {
      case 0: // All
        return bookings;
      case 1: // Pending
        return bookings.map(turf => ({
          ...turf,
          bookedSlots: turf.bookedSlots.filter(slot => slot.bookingStatus === 'pending')
        })).filter(turf => turf.bookedSlots.length > 0);
      case 2: // Approved
        return bookings.map(turf => ({
          ...turf,
          bookedSlots: turf.bookedSlots.filter(slot => slot.bookingStatus === 'approved')
        })).filter(turf => turf.bookedSlots.length > 0);
      case 3: // Rejected
        return bookings.map(turf => ({
          ...turf,
          bookedSlots: turf.bookedSlots.filter(slot => slot.bookingStatus === 'rejected')
        })).filter(turf => turf.bookedSlots.length > 0);
      default:
        return bookings;
    }
  };

  // Count bookings by status
  const getBookingCounts = () => {
    if (!bookings || bookings.length === 0) {
      return { all: 0, pending: 0, approved: 0, rejected: 0 };
    }

    let pending = 0, approved = 0, rejected = 0;
    
    bookings.forEach(turf => {
      turf.bookedSlots.forEach(slot => {
        if (slot.bookingStatus === 'pending') pending++;
        else if (slot.bookingStatus === 'approved') approved++;
        else if (slot.bookingStatus === 'rejected') rejected++;
      });
    });

    return {
      all: pending + approved + rejected,
      pending,
      approved,
      rejected
    };
  };

  // Get status config
  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return {
          icon: <CheckCircle />,
          label: 'Approved',
          color: 'success',
          bgColor: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
          borderColor: 'rgba(40, 167, 69, 0.3)'
        };
      case 'pending':
        return {
          icon: <HourglassEmpty />,
          label: 'Pending',
          color: 'warning',
          bgColor: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
          borderColor: 'rgba(255, 193, 7, 0.3)'
        };
      case 'rejected':
        return {
          icon: <Cancel />,
          label: 'Rejected',
          color: 'error',
          bgColor: 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
          borderColor: 'rgba(220, 53, 69, 0.3)'
        };
      default:
        return {
          icon: <Pending />,
          label: 'Unknown',
          color: 'default',
          bgColor: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)',
          borderColor: 'rgba(108, 117, 125, 0.3)'
        };
    }
  };

  const filteredBookings = getFilteredBookings();
  const counts = getBookingCounts();

  if (loading) return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #8e54e9 0%, #4776e6 100%)'
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
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)'
    }}>
      {/* Header Section */}
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 100%)',
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
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              My Bookings
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              Track all your turf reservations and their status
            </Typography>
            <Box
              sx={{
                width: 100,
                height: 4,
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: 2,
                mx: 'auto'
              }}
            />
          </Box>
        </Container>
      </Paper>

      {/* Tabs Filter Section */}
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Paper
          elevation={8}
          sx={{
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            overflow: 'hidden'
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '1rem',
                py: 2.5
              }
            }}
          >
            <Tab 
              icon={
                <Badge badgeContent={counts.all} color="primary" max={99}>
                  <BookOnline />
                </Badge>
              } 
              iconPosition="start"
              label="All Bookings" 
            />
            <Tab 
              icon={
                <Badge badgeContent={counts.pending} color="warning" max={99}>
                  <HourglassEmpty />
                </Badge>
              } 
              iconPosition="start"
              label="Pending" 
            />
            <Tab 
              icon={
                <Badge badgeContent={counts.approved} color="success" max={99}>
                  <ThumbUp />
                </Badge>
              } 
              iconPosition="start"
              label="Approved" 
            />
            <Tab 
              icon={
                <Badge badgeContent={counts.rejected} color="error" max={99}>
                  <ThumbDown />
                </Badge>
              } 
              iconPosition="start"
              label="Rejected" 
            />
          </Tabs>
        </Paper>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {filteredBookings.length === 0 ? (
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
                {selectedTab === 0 
                  ? "You haven't made any turf bookings yet."
                  : `You don't have any ${['', 'pending', 'approved', 'rejected'][selectedTab]} bookings.`
                }
              </Typography>
            </Paper>
          </Box>
        ) : (
          <Stack spacing={4}>
            {filteredBookings.map((turf) => (
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
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
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
                            background: 'rgba(255, 255, 255, 0.25)',
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
                      Booked Slots ({turf.bookedSlots.length})
                    </Typography>
                  </Stack>
                  
                  <Grid container spacing={3}>
                    {turf.bookedSlots.map((slot) => {
                      const statusConfig = getStatusConfig(slot.bookingStatus);
                      
                      return (
                        <Grid item xs={12} sm={6} lg={4} key={slot.slotId}>
                          <Paper
                            elevation={4}
                            sx={{
                              p: 3,
                              borderRadius: 3,
                              background: statusConfig.bgColor,
                              border: `2px solid ${statusConfig.borderColor}`,
                              transition: 'all 0.2s ease-in-out',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
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
                                  icon={statusConfig.icon}
                                  label={statusConfig.label}
                                  color={statusConfig.color}
                                  variant="filled"
                                  size="small"
                                  sx={{ 
                                    fontWeight: 700,
                                    fontSize: '0.75rem',
                                    height: 28
                                  }}
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

                              {/* Status Message */}
                              {slot.bookingStatus === 'pending' && (
                                <Alert severity="info" sx={{ mt: 1, py: 0.5 }}>
                                  <Typography variant="caption" fontWeight="500">
                                    Awaiting manager approval
                                  </Typography>
                                </Alert>
                              )}
                              {slot.bookingStatus === 'approved' && (
                                <Alert severity="success" sx={{ mt: 1, py: 0.5 }}>
                                  <Typography variant="caption" fontWeight="500">
                                    Your booking is confirmed!
                                  </Typography>
                                </Alert>
                              )}
                              {slot.bookingStatus === 'rejected' && (
                                <Alert severity="error" sx={{ mt: 1, py: 0.5 }}>
                                  <Typography variant="caption" fontWeight="500">
                                    Booking was not approved
                                  </Typography>
                                </Alert>
                              )}
                            </Stack>
                          </Paper>
                        </Grid>
                      );
                    })}
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