import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import "../App.css";

const LandingPage = () => {
  return (
    <div className='landingpage'>
      {/* Background video */}
      <video autoPlay loop muted className='background-video'>
        <source src='https://videos.pexels.com/video-files/5607782/5607782-uhd_3840_2160_30fps.mp4' type='video/mp4' />
      </video>

      {/* Content */}
      <div className='content'>
        <AppBar position="static" className='appbar'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Park n Go
            </Typography>
            <Button color="inherit" component={Link} to="/">Sign In</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Box className = 'header'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh',
            }}
          >
            <Typography variant="h3" gutterBottom>
              Welcome to Park n Go
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              Easily find and book parking spots in your city with our smart parking system.
            </Typography>
            <TextField
              id="search-bar"
              label="Search for parking"
              variant="outlined"
              fullWidth
              sx={{ maxWidth: 600, marginBottom: 2 }}
            />
            <Button variant="contained" color="primary">
              Find Parking
            </Button>
          </Box>
          {/* Two-column layout */}
          <Grid container spacing={3} sx={{ marginTop: 4 }}>
            {/* Column with picture */}
            <Grid item xs={12} md={6}>
              <img src="https://img.freepik.com/premium-vector/car-parking-illustration_7095-314.jpg" alt="Placeholder" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            {/* Column with description */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Our Services
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet magna nec ex interdum tempor. Donec vel nisl nec ligula ultricies consectetur.
                </Typography>
                <Typography variant="body1">
                  Vivamus scelerisque, arcu et interdum feugiat, lacus nisi ullamcorper elit, nec ultricies justo eros et neque. Sed vehicula arcu vitae metus aliquam, vel semper felis mattis.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ marginTop: 4 }}>
            {/* Column with description */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Our Services
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet magna nec ex interdum tempor. Donec vel nisl nec ligula ultricies consectetur.
                </Typography>
                <Typography variant="body1">
                  Vivamus scelerisque, arcu et interdum feugiat, lacus nisi ullamcorper elit, nec ultricies justo eros et neque. Sed vehicula arcu vitae metus aliquam, vel semper felis mattis.
                </Typography>
              </Box>
            </Grid>
            
            {/* Column with image */}
            <Grid item xs={12} md={6}>
              <img src="https://p7.hiclipart.com/preview/768/198/436/droid-razr-hd-iphone-telephone-clip-art-cell-phone-graphics.jpg" alt="Placeholder" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
