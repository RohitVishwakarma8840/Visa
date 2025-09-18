import React from "react";
import { Box, Grid, Typography, Button, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0a1f44",
        color: "#fff",
        width: '100%',
        overflowX: 'hidden',
        mt: 5,
        pt: 6,
        pb: 3,
        px: { xs: 3, sm: 4, md: 6 },
      }}
    >
      <Box textAlign="center" mb={4}>
        <Typography variant="h6" fontWeight="bold">
          We Welcome Your Passion and Expertise
        </Typography>
        <Typography variant="body2" color="gray" mt={1}>
          Join our empowering sports community today & grow with us.
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "green", mt: 2, textTransform: "none" }}
        >
          Join With Us
        </Button>
      </Box>

      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Contact Us
          </Typography>
          <Box>
            <Typography variant="body2" mb={0.5}>
              Toll free customer care
            </Typography>
            <Typography variant="body2" mb={1.5}>
              +017 123 456 78
            </Typography>
            <Typography variant="body2" mb={0.5}>
              Need Live Support
            </Typography>
            <Typography variant="body2" sx={{ wordBreak: "break-word" }} mb={2}>
              vsports@example.com
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: "#fff", p: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#fff", p: 1 }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#fff", p: 1 }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "#fff", p: 1 }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              About us
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Services
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Events
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Blogs
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Contact us
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Support
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Contact Us
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              FAQ
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Pricing
            </Link>
          </Box>
        </Grid>

      
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Other Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Coaches
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Sports Venue
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Join As Coach
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Add Venue
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              My Account
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={1.5}>
          <Typography fontWeight="bold" mb={2}>
            Location
          </Typography>
          <Typography variant="body2">Chennai</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={1.5}>
          <Typography fontWeight="bold" mb={2}>
            Download
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box
              component="img"
              src="/Apple.png"
              alt="App Store"
              sx={{ 
                width: { xs: 120, md: 140 }, 
                height: 'auto',
                cursor: "pointer",
                display: 'block'
              }}
            />
            <Box
              component="img"
              src="google_play.png"
              alt="Google Play"
              sx={{ 
                width: { xs: 120, md: 140 }, 
                height: 'auto',
                cursor: "pointer",
                display: 'block'
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box textAlign="left" mt={4} borderTop="1px solid #333" pt={2}>
        <Typography variant="body2" color="gray">
          V Sports – All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;