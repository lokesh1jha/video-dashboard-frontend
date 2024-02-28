import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthRoute from './Route/AuthRoute.jsx';
import NonAuthRoute from './Route/NonAuthRoute.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
        {isLoggedIn ? <AuthRoute /> : <NonAuthRoute />}
    </>
  );
}

export default App;
