import React from "react";
import { Box } from "@mui/material";    


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
      <img src={image} alt={title} style={{ width: "100%", height: 160, objectFit: "cover" }} />
      <Box p={2}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><b>Location:</b> {location}</p>
        <p><b>Next Availability:</b> {availability}</p>
        <p><b>Rating:</b> {rating} ⭐ ({reviews} Reviews)</p>
        <p><b>Price:</b> ₹{price}/hr</p>
        <p><b>Coach:</b> {user}</p>
      </Box>
    </Box>
  )
}


export default Cards;