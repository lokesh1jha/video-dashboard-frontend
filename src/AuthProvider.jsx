import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      setIsLoggedIn(false)
    }
    else {
      const tokenDecoded = token ? jwtDecode(token) : null;
      setUser({
        user_type: tokenDecoded.user_type,
        is_youtube_authenticated: tokenDecoded.is_youtube_authenticated
      })
    }
    
  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
