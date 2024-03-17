import React, { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import { useAuth } from '../../AuthProvider';

const { Content } = Layout;

const DashboardServiceProvider = () => {
  const {user} = useAuth()
  const { token } = theme.useToken() || {};
  const { colorBgContainer, borderRadiusLG } = token || {};

  
  useEffect(() => {
    
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
          <div>Service Provider Dashboard</div>
      </Content>
    </Layout>
  );
};

export default DashboardServiceProvider;
