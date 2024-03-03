import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './css/youtubeAuth.css'

const YOUTUBE_REDIRECT_URL = 'http://localhost:5173/dashboard';

function YoutubeAuthLogin() {
  const [clientId, setClientId] = useState('');

  const handleLogin = async () => {
    const formDetails = {
      clientId: clientId,
      redirectUrl: YOUTUBE_REDIRECT_URL
    };
    const redirect_uri = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${formDetails.clientId}&redirect_uri=${formDetails.redirectUrl}&scope=https://www.googleapis.com/auth/youtube`
    window.location.href = redirect_uri
    // will land on dashboard
    console.log('Initiating OAuth flow...');
  };

  return (
    <div className="container">
      <div className="documentation">
        <h1>Welcome to YouTube Auth Wizard</h1>
        <br />
        <div className="step">
          <strong>Step 1:</strong> Turn on the YouTube Data API (Use your Google account on which your youtube channel is registered)
        </div>
        <ul>
          <br />
          <li>
            Use this <a href='https://console.developers.google.com/start/api?id=youtube'>wizard</a> to create Google Developers Console.
          </li>
          <li>
            Accept the term and conditions by marking the box and click on "Accept and continue"
          </li>
          <li>
            Now
            or select a project in the Google Developers Console and automatically turn on the API. Click Continue, then Go to credentials.
            <img src={require("../assets/youtubeAuthImages/Youtube_auth_google_console_pic_1.png").default} alt="Wizard Screenshot" />

          </li>
          <li>
            On the Create credentials page, click the Cancel button.
          </li>
          <li>
            At the top of the page, select the OAuth consent screen tab. Select an Email address, enter a Product name if not already set, and click the Save button.
          </li>
          <li>
            Select the Credentials tab, click the Create credentials button and select OAuth client ID.
          </li>
          <li>
            Select the application type Other, enter the name "YouTube Data API Quickstart", and click the Create button.
          </li>
          <li>
            Click OK to dismiss the resulting dialog.
          </li>
          <li>
            Click the <strong>Download JSON</strong> button to the right of the client ID.
          </li>
          <li>
            Move the downloaded file to your working directory and rename it <strong>client_secret.json</strong>.
          </li>
        </ul>
      </div>
      <div className="form-container">
        <div className="form">
          <Input
            placeholder="Client ID"
            style={{ marginBottom: '10px' }}
            value={clientId}
            onChange={e => setClientId(e.target.value)}
          />
          <Button type="primary" onClick={handleLogin}>Login with Google</Button>
        </div>
      </div>
    </div>
  );
}

export default YoutubeAuthLogin;
