import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Cards = ({ title, description, image, location, availability, rating, reviews, price, user }) => {
  return (
    <Box
      sx={{
        width: 320,
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: 160, objectFit: "cover" }}
      />

      <Box p={2}>
        {/* Title */}
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: 600, mb: 1 }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          {description}
        </Typography>

        {/* Location */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {location}
          </Typography>
        </Box>

        {/* Availability */}
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

        {/* Coach */}
        <Typography variant="body2">
          <b>Coach:</b> {user}
        </Typography>
      </Box>
    </Box>
  );
};

export default Cards;
