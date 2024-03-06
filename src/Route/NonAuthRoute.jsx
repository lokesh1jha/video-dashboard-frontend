import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login'; 
import Signup from '../pages/Signup';
import Home from '../pages/Home';

function NonAuthRoute() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
}

export default NonAuthRoute;
