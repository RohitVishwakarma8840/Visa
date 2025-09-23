import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Chip,
  Container,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
} from "@mui/material";

const Booking = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const games = [
    { id: 1, name: "Football", type: "Outdoor", icon: "⚽", color: "#4CAF50" },
    { id: 2, name: "Badminton", type: "Indoor", icon: "🏸", color: "#FF9800" },
    { id: 3, name: "Volleyball", type: "Outdoor", icon: "🏐", color: "#2196F3" },
    { id: 4, name: "Chess", type: "Indoor", icon: "♟️", color: "#9C27B0" },
    { id: 5, name: "Tennis", type: "Outdoor", icon: "🎾", color: "#F44336" },
    { id: 6, name: "Basketball", type: "Outdoor", icon: "🏀", color: "#FF5722" },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setBookingConfirmed(false);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setBookingConfirmed(false);
  };

  const handleBooking = () => {
    if (selectedGame && selectedDate && selectedTime) {
      setBookingConfirmed(true);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        background:"#0B7690",
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant={isMobile ? "h3" : "h2"} 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'white',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            🎯 Game Booking
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Reserve your favorite game slot and enjoy an amazing experience with friends!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Column - Booking Form */}
          <Grid item xs={12} lg={8}>
            {/* Game Selection */}
            <Card 
              elevation={8}
              sx={{ 
                mb: 4, 
                borderRadius: 3,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
                  🎮 Select Your Game
                </Typography>
                <Grid container spacing={2}>
                  {games.map((game) => (
                    <Grid item xs={12} sm={6} md={4} key={game.id}>
                      <Paper
                        elevation={selectedGame?.id === game.id ? 8 : 2}
                        sx={{
                          p: 2,
                          cursor: 'pointer',
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          transform: selectedGame?.id === game.id ? 'scale(1.05)' : 'scale(1)',
                          background: selectedGame?.id === game.id 
                            ? `linear-gradient(45deg, ${game.color}20, ${game.color}10)`
                            : 'white',
                          border: selectedGame?.id === game.id 
                            ? `3px solid ${game.color}` 
                            : '3px solid transparent',
                          '&:hover': {
                            transform: 'scale(1.02)',
                            elevation: 4,
                          }
                        }}
                        onClick={() => handleGameSelect(game)}
                      >
                        <Box textAlign="center">
                          <Typography variant="h3" sx={{ mb: 1 }}>
                            {game.icon}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                            {game.name}
                          </Typography>
                          <Chip
                            label={game.type}
                            size="small"
                            sx={{
                              mt: 1,
                              backgroundColor: game.type === 'Outdoor' ? '#4CAF50' : '#2196F3',
                              color: 'white',
                              fontWeight: 'bold'
                            }}
                          />
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Date Selection */}
            <Card 
              elevation={8}
              sx={{ 
                mb: 4, 
                borderRadius: 3,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
                  📅 Select Date
                </Typography>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={getMinDate()}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    backgroundColor: 'white',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1976d2'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </CardContent>
            </Card>

            {/* Time Selection */}
            <Card 
              elevation={8}
              sx={{ 
                mb: 4, 
                borderRadius: 3,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
                  ⏰ Select Time
                </Typography>
                <Grid container spacing={2}>
                  {timeSlots.map((time) => (
                    <Grid item xs={6} sm={4} md={3} key={time}>
                      <Button
                        variant={selectedTime === time ? "contained" : "outlined"}
                        onClick={() => handleTimeSelect(time)}
                        sx={{
                          width: '100%',
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease',
                          transform: selectedTime === time ? 'scale(1.05)' : 'scale(1)',
                          ...(selectedTime === time && {
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                          })
                        }}
                      >
                        {time}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Booking Button */}
            <Box textAlign="center">
              <Button
                variant="contained"
                size="large"
                onClick={handleBooking}
                disabled={!selectedGame || !selectedDate || !selectedTime}
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: 3,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  background: selectedGame && selectedDate && selectedTime
                    ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                    : 'grey',
                  boxShadow: selectedGame && selectedDate && selectedTime
                    ? '0 6px 10px 2px rgba(33, 150, 243, .3)'
                    : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: selectedGame && selectedDate && selectedTime ? 'scale(1.05)' : 'none',
                  },
                  '&:disabled': {
                    background: 'grey',
                    color: 'white',
                  }
                }}
              >
                {selectedGame && selectedDate && selectedTime 
                  ? '🎉 Confirm Booking' 
                  : '⏳ Complete Selection'}
              </Button>
            </Box>
          </Grid>

          {/* Right Column - Summary */}
          <Grid item xs={12} lg={4}>
            {/* Booking Summary */}
            <Card 
              elevation={8}
              sx={{ 
                mb: 4, 
                borderRadius: 3,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
                  📋 Booking Summary
                </Typography>
                <Box space={2}>
                  <Paper sx={{ p: 2, mb: 2, backgroundColor: '#f5f5f5' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography color="textSecondary">Game:</Typography>
                      <Typography fontWeight="bold">
                        {selectedGame ? `${selectedGame.icon} ${selectedGame.name}` : 'Not selected'}
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper sx={{ p: 2, mb: 2, backgroundColor: '#f5f5f5' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography color="textSecondary">Date:</Typography>
                      <Typography fontWeight="bold">
                        {selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Not selected'}
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography color="textSecondary">Time:</Typography>
                      <Typography fontWeight="bold">
                        {selectedTime || 'Not selected'}
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              </CardContent>
            </Card>

            {/* Confirmation */}
            {/* {bookingConfirmed && (
              <Zoom in={bookingConfirmed}>
                <Card 
                  elevation={12}
                  sx={{ 
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h2" sx={{ mb: 2 }}>🎉</Typography>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Booking Confirmed!
                    </Typography>
                    <Paper 
                      sx={{ 
                        p: 3, 
                        mt: 3, 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        {selectedGame.icon} {selectedGame.name}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {formatDate(selectedDate)}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {selectedTime}
                      </Typography>
                    </Paper>
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.9 }}>
                      Check your email for booking details!
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            )} */}




            {/* Features */}
            <Card 
              elevation={8}
              sx={{ 
                mt: 4, 
                borderRadius: 3,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                 width: '100vw',padding: '0px'
              }}
            >
              <CardContent sx={{ p: 4,   width:'100vw'}}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                  ✨ Why Book With Us?
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {[
                    { icon: '✅', text: 'Premium equipment included' },
                    { icon: '🔄', text: 'Flexible cancellation policy' },
                    { icon: '🏆', text: 'Professional venue standards' }
                  ].map((feature, index) => (
                    <Box key={index} display="flex" alignItems="center" sx={{ mb: 2 }}>
                      <Typography variant="h6" sx={{ mr: 2 }}>{feature.icon}</Typography>
                      <Typography>{feature.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Booking;