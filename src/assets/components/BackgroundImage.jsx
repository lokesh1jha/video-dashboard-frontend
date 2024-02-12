// BackgroundImage.js
import React from 'react';
import backgroundImage from '../images/home_background_image.jpg';

function BackgroundImage({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundImage;
