import React, { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import AddSocialPlatform from '../components/AddSocialPlatform';
import showNotification from '../components/showNotification';
import axios from 'axios';
import DashboardStats from '../components/DashboardStats';
import { useAuth } from '../AuthProvider';
import { setJwtToken } from '../api';
import { URLConstants } from '../api/urlConstants';

const { Content } = Layout;

const Dashboard = () => {
  const { user, setUser } = useAuth()
  const { token } = theme.useToken() || {};
  const { colorBgContainer, borderRadiusLG } = token || {};
  const youtubeLogined = user.is_youtube_authenticated == 1;


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log("111111", code)

    if (code) {
      showNotification('success', 'Auth Success', 'YouTube Authentication Successful');

      axios.post(URLConstants.saveYoutubeDetails,
        { code },
        {
          headers: {
            Authorization: `${localStorage.getItem('Authorization')}` // Assuming your token is stored in localStorage
          }
        }
      )
        .then(response => {
          let newUser = { ...user };
          newUser.is_youtube_authenticated = 1
          setUser(newUser)
          // setJwtToken(response.token)
        })
        .then(res => {
          //clear url extra part leave till dashboard
          window.history.replaceState({}, document.title, window.location.pathname);
          window.location.href = '/dashboard';
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, []);

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
        {youtubeLogined ?
          <DashboardStats />
          : <AddSocialPlatform />}
      </Content>
    </Layout>
  );
};

export default Dashboard;
