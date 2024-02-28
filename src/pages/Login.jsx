import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

function Login() {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle form submission logic (e.g., send data to server)
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