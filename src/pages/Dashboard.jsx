import React, { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import AddSocialPlatform from '../components/AddSocialPlatform';
import showNotification from '../components/showNotification';
import axios from 'axios';
import { useAuth } from '../AuthProvider';

const { Content } = Layout;

const Dashboard = () => {
  const { token } = theme.useToken() || {};
  const { colorBgContainer, borderRadiusLG } = token || {};

  const { youtubeClientId, setYoutubeClientId, clientSecret, setClientSecret } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('Code:', code, youtubeClientId, clientSecret);
    if (code && youtubeClientId && clientSecret) {
      showNotification('success', 'Auth Success', 'YouTube Authentication Successful');

      axios.post('http://localhost:5000/saveyoutubedetails',
        { code, clientId: youtubeClientId, clientSecret },
        {
          headers: {
            Authorization: `${localStorage.getItem('Authorization')}` // Assuming your token is stored in localStorage
          }
        }
      )
        .then(response => {
          console.log(response);
          setYoutubeClientId(null); // Reset the client ID after authentication
          setClientSecret(null); // Reset the client secret after authentication
        })
        .catch(error => {
          console.error('Error:', error);
        });


      console.log('Code found:', code);
    }
  }, [youtubeClientId, clientSecret, setYoutubeClientId, setClientSecret]);

  return (
    <Layout>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
        <AddSocialPlatform />
      </Content>
    </Layout>
  );
};

export default Dashboard;
