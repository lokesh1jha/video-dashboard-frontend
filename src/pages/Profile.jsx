import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const initialData = {
  name: 'John Doe',
  organizationName: 'ABC Company',
  email: 'john.doe@example.com',
  phoneNumber: '1234567890',
  activePlan: 'Premium',
  planExpiry: '2024-12-31',
  address: {
    street: '123 Main St',
    state: 'California',
    country: 'USA',
    pincode: '12345',
  },
};

const Profile = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [])


  const handleEditReset = () => {
    if (isEditing) {
      form.setFieldsValue(initialData);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  
  
  const handleSave = () => {
    form.submit(); 
    const formData = form.getFieldsValue();
    //api call
    console.log(formData);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="profileForm"
      style={{ maxWidth: 600 }}
      onFinish={values => {
        console.log('Form values:', values); // Handle form submission
      }}
    >
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Organization Name" name="organizationName">
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Phone Number" name="phoneNumber">
        <Input />
      </Form.Item>

      <Form.Item label="Active Plan" name="activePlan">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Plan Expiry" name="planExpiry">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Address">
        <Space size="small">
          <Form.Item name={['address', 'street']} noStyle>
            <Input placeholder="Street" />
          </Form.Item>
          <Form.Item name={['address', 'state']} noStyle>
            <Input placeholder="State" />
          </Form.Item>
          <Form.Item name={['address', 'country']} noStyle>
            <Input placeholder="Country" />
          </Form.Item>
          <Form.Item name={['address', 'pincode']} noStyle>
            <Input placeholder="Pincode" />
          </Form.Item>
        </Space>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" onClick={handleEditReset}>
          {isEditing ? 'Reset' : 'Edit'}
        </Button>
        {isEditing && (
          <Button type="primary" onClick={handleSave} style={{ marginLeft: 10 }}>
            Save
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Profile;
