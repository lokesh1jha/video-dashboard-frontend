import React, { useEffect } from 'react';
import './App.css';
import AuthRoute from './Route/AuthRoute.jsx';
import NonAuthRoute from './Route/NonAuthRoute.jsx';
import { useAuth } from './AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function App() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (token) {
      try {
        // Decode the token to get expiration date
        const decodedToken = decodeToken(token);
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

        // Check if token is expired
        if (Date.now() >= expirationTime) {
          // Token is expired, remove it from localStorage and redirect to login page
          localStorage.removeItem('Authorization');
          setIsLoggedIn(false);
          navigate('/login');
        } else {
          // Token is still valid, set isLoggedIn to true
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

  const decodeToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      throw new Error('Invalid token');
    }
  };
  return (
    <>
      {isLoggedIn ? <AuthRoute /> : <NonAuthRoute />}
    </>
  );
}

export default App;
