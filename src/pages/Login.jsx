import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { getDecodedJWT, login, setJwtToken } from '../api';
import { useAuth } from '../AuthProvider';
import showNotification from '../components/showNotification';

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
        <div style={{ maxWidth: 300, margin: 'auto', marginTop: 50 }}>
            <Title level={2}>Login</Title>
            <Form
                name="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email!', type:'email' }]}
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
            New to Platform? <Link to="/signup">Sign Up</Link>
        </div>
    );
}
export default Login