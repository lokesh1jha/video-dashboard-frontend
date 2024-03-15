import React, { useEffect, useState } from 'react';
import { Button, Input, Image } from 'antd';
import './css/youtubeAuth.css'
import axios from 'axios';
const YOUTUBE_REDIRECT_URL = 'http://localhost:5173/dashboard';

function YoutubeAuthLogin() {
  const [clientId, setClientId] = useState('');
  const [secretID, setSecretID] = useState('');


  const handleLogin = async () => {
    //get form valus
    const formDetails = {
      clientId: clientId,
      client_secret: secretID,
      redirectUrl: YOUTUBE_REDIRECT_URL
    };

    axios.post('http://localhost:5000/saveyoutubedetails',
      {
        clientId: clientId,
        clientSecret: secretID,
        redirectUrl: YOUTUBE_REDIRECT_URL
      },
      {
        headers: {
          Authorization: `${localStorage.getItem('Authorization')}`
        }
      }
    )
      .then(response => {
        console.log(response);
        const redirect_uri = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${formDetails.clientId}&redirect_uri=${formDetails.redirectUrl}&scope=https://www.googleapis.com/auth/youtube`
        window.location.href = redirect_uri
        // will land on dashboard
        console.log('Initiating OAuth flow...');
      })
      .catch(error => {
        console.log(error);
      });

  };

  return (
    <div className="container">
      <div className="documentation">
        <h1>Welcome to YouTube Auth Wizard</h1>
        <br />
        <div className="scroll-box">
          <div className="step">
            <strong>Step 1:</strong> Turn on the YouTube Data API (Use your Google account on which your YouTube channel is registered)
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
              If you are new to Google Cloud Console, then you will not have any Projects.
            </li>
            <Image
              width={500}
              src="https://res.cloudinary.com/dywazof7j/image/upload/v1709485976/Youtube_auth_google_console_pic_1_ulspsk.png"
            />
            <li>
              Click on "Select a Project" as you can see in the image. Then click on "New Project".
            </li>
            <Image
              width={500}
              src="https://res.cloudinary.com/dywazof7j/image/upload/v1709485976/Youtube_auth_google_console_pic_2_swie9g.png"
            />

            <li>
              In Project Name field, enter a name for your project. Ex: "YouTubeAPI".
            </li>

            <Image
              width={500}
              src="https://res.cloudinary.com/dywazof7j/image/upload/v1709485976/Youtube_auth_google_console_pic_3_gwkz6x.png" />
            <li>
              Click on "Create Project".
            </li>
            Then Click on Next and the Enable, as you can see in the image.

            <Image
              width={500}
              src="https://res.cloudinary.com/dywazof7j/image/upload/v1709485976/Youtube_auth_google_console_pic_4_fubd2a.png" />
            <br />
            <Image
              width={500}
              src="https://res.cloudinary.com/dywazof7j/image/upload/v1709485976/Youtube_auth_google_console_pic_5_j4jzzo.png" />
            <li>
              Then by clciking on Menu button and then on "APIs & Services". Then "Credentials".
            </li>
            <Image
              width={500}
              src="https://res.cloudinary.com/dywazof7j/image/upload/v1709485977/Youtube_auth_google_console_pic_6_es6goq.png"
            />
            <Image
              width={500}
              src="https://res.cloudinary.com/dywazof7j/image/upload/v1709485977/Youtube_auth_google_console_pic_7_uahefh.png"
            />
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
      </div>

      <div className="form-container">
        <div className="form">
          <Input
            placeholder="Client ID"
            style={{ marginBottom: '10px' }}
            value={clientId}
            onChange={e => setClientId(e.target.value)}
          />
          <Input
            placeholder="Client Secret"
            style={{ marginBottom: '10px' }}
            value={secretID}
            onChange={e => setSecretID(e.target.value)}
          />
          <Button
            type="primary"
            onClick={handleLogin}
            disabled={!(clientId.trim() && secretID.trim())}
          >
            Login with Google
          </Button>

        </div>
      </div>
    </div>
  );
}

export default YoutubeAuthLogin;
