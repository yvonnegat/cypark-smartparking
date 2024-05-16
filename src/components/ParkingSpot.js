// ParkingSpot.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const ParkingSpot = ({ spot }) => {
  const handleBookNow = () => {
    // Logic to book the parking spot
    alert(`Booking ${spot.name} now...`); // Example: Show an alert for demonstration
  };

  return (
    <Card variant="outlined" sx={{ minWidth: 275, marginBottom: 10 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {spot.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Availability: {spot.availability}
        </Typography>
        <Typography variant="body2">
          Price: ${spot.price}/hour
        </Typography>
        <Button variant="contained" onClick={handleBookNow}>Book Now</Button> {/* Book Now button */}
      </CardContent>
    </Card>
  );
};

export default ParkingSpot;
