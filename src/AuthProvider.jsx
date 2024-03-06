import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [youtubeClientId, setYoutubeClientId] = useState("267936848773-tml5tfm219hn7uig6t4e1qjrg9b6ar2n.apps.googleusercontent.com");
  const [clientSecret, setClientSecret] = useState("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");

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, youtubeClientId, setYoutubeClientId, clientSecret, setClientSecret }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
