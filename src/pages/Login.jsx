import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Row, Col } from 'antd';
import { getDecodedJWT, login, setJwtToken } from '../api';
import { useAuth } from '../AuthProvider';
import showNotification from '../components/showNotification';
import login_page_svg from '../assets/undraw_secure_login.svg';
// import { ReactComponent as SecureLoginSVG } from '../assets/undraw_secure_login.svg';

const { Title } = Typography;

function Login() {
    const navigate = useNavigate();
    const { setIsLoggedIn, user, setUser} = useAuth();

    const onFinish = async (values) => {
        console.log('Received values:', values);

        let { email, password } = values;
        let result = await login({email, password});

        if (result.status == 200 && result.token) {
            setJwtToken(result.token);
            const tokenData = getDecodedJWT(result.token);
            let newUserInstance = user;
            newUserInstance.is_youtube_authenticated=tokenData.is_youtube_authenticated
            newUserInstance.user_type= tokenData.user_data;
            setUser(newUserInstance)
            setIsLoggedIn(true);
            navigate('/dashboard');
        } else {
            showNotification('error', 'Error', result.message);
        }
    };

    return (
        <>
        
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Col xs={0} sm={0} md={0} lg={2} xl={12}>
        <div style={{ padding: 20 }}>
          {/* <SecureLoginSVG width="100%" height="auto" /> */}
          <img src={login_page_svg} alt="" width="60%" height="auto" />
        </div>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={6}>
        <div style={{ padding: 20, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 2 }}>Login</Title>
          <Form
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
  
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
  
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center' }}>
            New to Platform? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Col>
     
    </Row>
      </>
    );
}
export default Login