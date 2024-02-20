import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './assets/pages/Login.jsx'; 
import Signup from './assets/pages/Signup.jsx';
import Dashboard from './assets/pages/Dashboard.jsx'
import Home from './assets/pages/HomePage.jsx';


function App() {

  return (
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
