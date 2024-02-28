import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { Layout, Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import Profile from '../pages/Profile';
import History from '../pages/History';

const { Sider, Header } = Layout;

function AuthRoute() {
    const [collapsed, setCollapsed] = useState(false);

    const handleMenuClick = (key) => {
        switch (key) {
            case '1':
                navigate('/dashboard');
                break;
            case '2':
                navigate('/history');
                break;
            case '3':
                navigate('/profile');
                break;
            default:
                break;
        }
    };

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        onClick={({ key }) => handleMenuClick(key)}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />} >
                            <Link to="/dashboard">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/history">History</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/* <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    > */}
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    {/* </Header> */}
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Layout>
            </Layout>
        </Router>
    );
}

export default AuthRoute;