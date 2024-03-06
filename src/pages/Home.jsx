import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Row, Col } from 'antd';
import { UploadOutlined, CloudUploadOutlined, EditOutlined, BellOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

const { Header } = Layout;

const Home = () => {
    return (
        <>
            <Header style={{ background: 'white', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', position: 'sticky', top: 0, zIndex: 1000 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <UploadOutlined style={{ fontSize: '2rem', marginRight: '10px' }} />
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>StreamEase</span>
                </div>
                <div>
                    <Link to="/" style={{ marginRight: '20px', color: 'black', fontSize: '1.2rem' }}>Home</Link>
                    <Link to="/features" style={{ marginRight: '20px', color: 'black', fontSize: '1.2rem' }}>Features</Link>
                    <Link to="/pricing" style={{ marginRight: '20px', color: 'black', fontSize: '1.2rem' }}>Pricing</Link>
                    <Link to="/contact" style={{ marginRight: '20px', color: 'black', fontSize: '1.2rem' }}>Contact</Link>
                    <Button type="primary" style={{ background: 'black', color: 'white', fontSize: '1.2rem', width: '200px', height: '50px'}}>
                        <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Get Started</Link>
                    </Button>

                </div>
            </Header>
            <Content style={{ padding: '50px 50px', textAlign: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Automate Your YouTube Uploads</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Save time and effort by automating your YouTube uploads</p>
                    <Button type="primary" size="large"><Link to="/login" style={{ color: 'white' }}>Upload Your Videos</Link></Button>
                </div>
            </Content>
            <Content style={{ padding: '50px 50px', textAlign: 'center' }}>
                <div style={{ marginBottom: '50px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '40px' }}>How It Works</h1>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={12} md={6}>
                            <CloudUploadOutlined style={{ fontSize: '2rem', marginBottom: '20px' }} />
                            <p>Upload your raw video</p>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <EditOutlined style={{ fontSize: '2rem', marginBottom: '20px' }} />
                            <p>Edited by Professional Editors</p>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <BellOutlined style={{ fontSize: '2rem', marginBottom: '20px' }} />
                            <p>Get notified</p>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <YoutubeOutlined style={{ fontSize: '2rem', marginBottom: '20px' }} />
                            <p>Browse your content and meta data and approve for upload</p>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Content style={{ padding: '50px 50px', textAlign: 'center' }}>
                <div style={{ marginBottom: '50px' }}>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '20px' }}>Service Providers</h1>
                    <p style={{ fontSize: '1rem', marginBottom: '20px' }}>Join us as a service provider to grow your business</p>
                    <Button type="primary" size="large"><Link to="/signup" style={{ color: 'white' }}>Become a Service Provider</Link></Button>
                </div>
            </Content>

        </>
    );
}

export default Home;
