import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './assets/pages/Login.jsx'; 
// import Home from './assets/pages/HomePage.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
