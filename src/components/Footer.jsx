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
        px: { xs: 2, sm: 4, md: 2 },
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

      <Grid container spacing={{ xs: 4, md: 12, sm: 2 }} justifyContent="center">
        {/* Contact Us */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Contact Us
          </Typography>
          <Box>
            <Typography variant="body2">Toll free customer care</Typography>
            <Typography variant="body2">+017 123 456 78</Typography>
            <Typography variant="body2" mt={1}>
              Need Live Support
            </Typography>
            <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
              vsports@example.com
            </Typography>
            <Box mt={1} sx={{ textAlign: 'left' }}>
              <IconButton sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" display="block">
              About us
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Services
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Events
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Blogs
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Contact us
            </Link>
          </Box>
        </Grid>

        {/* Support */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Support
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" display="block">
              Contact Us
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              FAQ
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Pricing
            </Link>
          </Box>
        </Grid>

        {/* Other Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Other Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" display="block">
              Coaches
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Sports Venue
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Join As Coach
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Add Venue
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              My Account
            </Link>
          </Box>
        </Grid>

        {/* Location */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Location
          </Typography>
          <Typography variant="body2">Chennai</Typography>
        </Grid>

        {/* Download Sect */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" mb={2}>
            Download
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box
              component="img"
              src="/Apple.png"
              alt="App Store"
              sx={{ width: 140, mb: 1, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="google_play.png"
              alt="Google Play"
              sx={{ width: 140, cursor: "pointer" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box textAlign="left" mt={5} borderTop="1px solid #333" pt={2}>
        <Typography variant="body2" color="gray">
          V Sports – All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;