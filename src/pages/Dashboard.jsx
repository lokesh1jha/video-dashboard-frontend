import React, { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import AddSocialPlatform from '../components/AddSocialPlatform';
import showNotification from '../components/showNotification';

const { Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      showNotification('success', 'Auth Success', 'Youtube Authentication Successful');
      axios.post('http://localhost:5000/uploadtoyoutube', { code: code })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      console.log('Code found:', code);
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
        Content
        <AddSocialPlatform />
      </Content>
    </Layout>
  );
};

export default Dashboard;
