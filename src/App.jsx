// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import JourneyPage from './Components/JourneyPage';
// import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Routes */}
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/journey" element={<JourneyPage />} />
</Routes>
    </Router>
  );
}

export default App;