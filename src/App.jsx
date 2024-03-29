import React, { useEffect } from 'react';
import './App.css';
import AuthRouteClent from './Route/AuthRouteClent.jsx';
import NonAuthRoute from './Route/NonAuthRoute.jsx';
import { useAuth } from './AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import { getDecodedJWT } from './api/index.js';
import AuthRouteServiceProvider from './Route/AuthRouteServiceProvider.jsx';

function App() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      let nonAuthPages = ['/login', '/signup', '/home']

      if (nonAuthPages.indexOf(window.location.pathname) == -1) {
        navigate('/login');
      }
      return;
    }
    else {
      console.log("here toooooo")
      try {
        const decodedToken = getDecodedJWT(token);
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

        // Check if token is expired
        if (Date.now() >= expirationTime) {
          localStorage.removeItem('Authorization');
          setIsLoggedIn(false);
          navigate('/login');
        } else {
          console.log(user, "dfdsfdsf", decodedToken)
          let newUserContent = user
          newUserContent.is_youtube_authenticated = decodedToken.is_youtube_authenticated;
          newUserContent.user_type = decodedToken.user_type;
          console.log("newUserContent", newUserContent)
          setUser(newUserContent);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('Authorization');
        setIsLoggedIn(false);
        navigate('/login');
      }
    }
  }, [navigate, setIsLoggedIn, user]);

  // console.log("user_type", user.user_type)

  return (
    <>
      {isLoggedIn
        ? (user.user_type && user.user_type == "client")
          ? <AuthRouteClent />
          : <AuthRouteServiceProvider />
        : <NonAuthRoute />}
    </>
  );
}

export default App;
