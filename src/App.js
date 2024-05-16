// App.js
import React, { useState, useEffect } from 'react';
import MapContainer from './components/MapContainer';
import ParkingSpot from './components/ParkingSpot';
import TopBar from './components/TopBar';
import BottomNavbar from './components/BottomNavbar';
import Button from '@mui/material/Button';
import BottomTopBar from './components/BottomTopBar';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    const fetchParkingSpots = async () => {
      try {
        // Simulating fetching data from an API
        const response = await fetchDummyData();
        // Assuming response is an array of parking spots
        setParkingSpots(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchParkingSpots();
  }, []);

  const fetchDummyData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { id: 1, name: 'Parking Spot 1', availability: 'Available', price: 10 },
          { id: 2, name: 'Parking Spot 2', availability: 'Unavailable', price: 15 },
          { id: 3, name: 'Parking Spot 3', availability: 'Available', price: 12 },
          // Adding more dummy data...
        ];
        resolve(data);
      }, 1000);
    });
  };

  const handleSortByCheapest = () => {
    // Logic to sort parking spots by cheapest
  };

  const handleSortByNearest = () => {
    // Logic to sort parking spots by nearest
  };

  return (
    <div className="app">
      <TopBar />
      <BottomTopBar/>
      <br/>
      <div className="main-content">
        <div className="sort-buttons">
          <Button variant="contained" onClick={handleSortByCheapest}>Sort by Cheapest</Button>
          <br></br>
          <Button variant="contained" onClick={handleSortByNearest}>Sort by Nearest</Button>
          <div className="parking-spot-list">
          {parkingSpots.map(spot => (
            <ParkingSpot key={spot.id} spot={spot} />
          ))}
        </div>
        </div>
        <MapContainer parkingSpots={parkingSpots} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignInSide from './components/sign-in-side'; // Ensure the path is correct
// import SignUp from './components/signup'; // Ensure the path is correct
// import LandingPage from './components/landingpage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignInSide />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path = "/landingpage" element = {<LandingPage/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;