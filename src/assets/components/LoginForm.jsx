import React from 'react';
import './LoginFormStyle.css';


import user_icon from '../person.png';
import email_icon from '../email.png';
import password_icon from '../password.png';

function LoginForm() {
  return (
    <div className="container">
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>

        <div className='input'>
          <img src={user_icon} alt='' />
          <input type="text" />
        </div>

        <div className='input'>
          <img src={email_icon} alt='' />
          <input type="eamil" />
        </div>

        <div className='input'>
          <img src={password_icon} alt='' />
          <input type="password" />
        </div>
      </div>

      <div className="submitContainer"></div>
    </div>
  );
}

export default LoginForm;
