import React, { useState } from 'react';
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
