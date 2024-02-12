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
          <input type="text" placeholder="Username" />
        </div>
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type="email" placeholder="Email" />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgetPassword">
        <a href="/forget-password">Forget Password?</a>
      </div>
      <div className="alreadyRegistered">
        <div className="smallText">Already Registered ?<a href="/login">Login</a></div>
      </div>
      <div className="submitContainer">
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default LoginForm;
