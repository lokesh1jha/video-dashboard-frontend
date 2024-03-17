import React, { useEffect } from 'react';
import { Form, Input, Button, Typography, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api';

const { Title } = Typography;
const { Option } = Select;
import showNotification from '../components/showNotification';

const Signup = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Received values:', values);
    
        let { username, email, password, user_type } = values;
        let result = await register({ username, email, password, user_type });
        if (result.status === 200) {
            showNotification('success', 'Success', 'User registered successfully');
            navigate('/login');
        } else {
            showNotification('error', 'Error', result.message);
        }
    };
    
    return (
        <>
        <div style={{ maxWidth: 300, margin: 'auto', marginTop: 50 }}>
            <Title level={2}>Sign Up</Title>
            <Form
                name="signupForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please enter your username!' }]}
                >
                    <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm Password" />
                </Form.Item>

                <Form.Item
                    name="user_type"
                    rules={[{ required: true, message: 'Please select your registration type!' }]}
                >
                    <Select placeholder="Select registration type">
                        <Option value="client">Register as a client</Option>
                        <Option value="service_provider">Register as a service provider</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
            Already Registered? <Link to="/login">Login</Link>
        </div>
        </>
    );
};

export default Signup;
