import React, { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import AddSocialPlatform from '../components/AddSocialPlatform';
import showNotification from '../components/showNotification';
import axios from 'axios';
import DashboardStats from '../components/DashboardStats';

const { Content } = Layout;

const Dashboard = () => {
  const { token } = theme.useToken() || {};
  const { colorBgContainer, borderRadiusLG } = token || {};
  const youtubeLogined = false;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      showNotification('success', 'Auth Success', 'YouTube Authentication Successful');

      axios.post('http://localhost:5000/saveyoutubedetails',
        { code },
        {
          headers: {
            Authorization: `${localStorage.getItem('Authorization')}` // Assuming your token is stored in localStorage
          }
        }
      )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      //clear url extra part leave till dashboard
      window.history.replaceState({}, document.title, window.location.pathname);
      window.location.href = '/dashboard';
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
          <AddSocialPlatform />
        : <DashboardStats />}
      </Content>
    </Layout>
  );
};

export default Dashboard;
