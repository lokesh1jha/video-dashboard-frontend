import React, { useEffect } from 'react';
import './App.css';
import AuthRoute from './Route/AuthRoute.jsx';
import NonAuthRoute from './Route/NonAuthRoute.jsx';
import { useAuth } from './AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import { getDecodedJWT } from './api/index.js';

function App() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (token) {
      try {
        const decodedToken = getDecodedJWT(token);
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

        // Check if token is expired
        if (Date.now() >= expirationTime) {
          localStorage.removeItem('Authorization');
          setIsLoggedIn(false);
          navigate('/login');
        } else {
          let newUserContent = user
          newUserContent.is_youtube_authenticated = decodedToken.is_youtube_authenticated;
          setUser(newUserContent);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('Authorization');
        setIsLoggedIn(false);
        navigate('/login');
      }
    } else {
      setIsLoggedIn(false);
      navigate('/login');
    }
  }, [navigate, setIsLoggedIn]);

  
  return (
    <>
      {isLoggedIn ? <AuthRoute /> : <NonAuthRoute />}
    </>
  );
}

export default App;
