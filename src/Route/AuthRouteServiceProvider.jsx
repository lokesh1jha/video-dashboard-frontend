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
import Home from '../pages/Home';
import DashboardServiceProvider from '../pages/serviceProvider/DashboardServiceProvider';
import UploadYoutubeVideo from '../components/UploadYoutubeVideo';

const { Sider } = Layout;

function AuthRouteServiceProvider() {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const handleMenuClick = (key) => {
        switch (key) {
            case '1':
                navigate('/dashboard');
                break;
            case '2':
                navigate('/uploadvideo');
                break;
            case '3':
                navigate('/history');
                break;
            case '4':
                navigate('/profile');
                break;
            default:
                break;
        }
    };

    // Conditionally render the Sider component based on the current route
    const isHomeRoute = location.pathname === '/home';

    const handleLogout = async () => {
        localStorage.removeItem('Authorization');
        window.location.reload();
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {!isHomeRoute && (
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
                        <Menu.Item key="/uploadvideo" icon={<UploadOutlined />}>
                            <Link to="/uploadvideo">Upload Video</Link>
                        </Menu.Item>
                        <Menu.Item key="/history" icon={<VideoCameraOutlined />}>
                            <Link to="/history">History</Link>
                        </Menu.Item>
                        <Menu.Item key="/profile" icon={<UploadOutlined />}>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                    </Menu>

                    <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                        <Button type="primary" onClick={handleLogout}>Logout</Button>
                    </div>
                </Sider>
            )}
            <Layout className="site-layout">
                {!isHomeRoute && (<Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />)}
                <Routes>
                    <Route path="/dashboard" element={<DashboardServiceProvider />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/uploadvideo" element={<UploadYoutubeVideo />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Layout>
        </Layout>
    );
}

export default AuthRouteServiceProvider;
