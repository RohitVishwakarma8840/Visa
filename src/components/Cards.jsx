import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; 

const Cards = ({ title, description, image, location, availability, rating, reviews,  user }) => {
  return (
    <Box
      sx={{
        width: 320,
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
        overflowX: "hidden",
        
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: 160, objectFit: "cover" }}
      />

      <Box p={2} sx={{overflow:'hidden'}}>
        {/* Title */}
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: 600, mb: 1 }}
        >
          {title}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {location}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <EventAvailableIcon fontSize="small" color="action" />
          <Typography variant="body2">
            Next Availability:{" "}
            <Typography
              component="span"
              sx={{ color: "green", fontWeight: 600 }}
            >
              {availability}
            </Typography>
          </Typography>
        </Box>

        {/* Rating */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          <b>Rating:</b> {rating} ⭐ ({reviews} Reviews)
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src="pro_pic.jpg" alt={user} sx={{ width: 38, height: 38 }} />
            <Typography variant="body2">{user}</Typography>
          </Box>

          <Button
            variant="text"
            startIcon={<CalendarMonthIcon />}
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
