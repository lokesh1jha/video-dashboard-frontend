import React, { useState } from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
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
import UploadVideo from '../pages/serviceProvider/UploadVideo';

const { Sider } = Layout;

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
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
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    onClick={({ key }) => handleMenuClick(key)}
                >
                    <Menu.Item key="/dashboard" icon={<UserOutlined />} >
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="/history" icon={<VideoCameraOutlined />}>
                        <Link to="/history">History</Link>
                    </Menu.Item>
                    <Menu.Item key="/profile" icon={<UploadOutlined />}>
                        <Link to="/profile">Profile</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
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
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/uploadvideo" element={<UploadVideo />} />
                </Routes>
            </Layout>
        </Layout>
    );
}

export default AuthRoute;
