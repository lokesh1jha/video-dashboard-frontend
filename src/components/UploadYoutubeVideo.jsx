import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Select, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { URLConstants } from '../api/urlConstants';
import SingleFileUploader from './SingleFileUploader';
import MultipleFileUploader from './MultipleFileUploader';

const { Option } = Select;

function UploadYoutubeVideo() {
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);


  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    startUpload(values);
  };


  const startUpload = (formData) => {
    console.log('Form data:', formData);

    axios.post(URLConstants.uploadTocloud, formData)
      .then(response => {
        console.log('Upload response:', response.data);
      })
      .catch(error => {
        console.error('Upload error:', error);
      });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Upload Edited Video</h2>
      <br />

      <h3>Upload Video</h3>
      <SingleFileUploader />
      <br />

      <h3>Upload Thumbnails</h3>
      <MultipleFileUploader />
      <br />

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          language: 'en',
          visibility: 'private',
          tags: [],
        }}
      >
        <Form.Item
          name="videoTitle"
          label="Video Title"
          rules={[{ required: true, message: 'Please enter the video title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="videoDescription"
          label="Video Description"
          rules={[{ required: true, message: 'Please enter the video description' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item name="language" label="Language">
          <Select>
            <Option value="en">English</Option>
            <Option value="es">Spanish</Option>
            {/* Add more language options as needed */}
          </Select>
        </Form.Item>
        <Form.Item name="visibility" label="Visibility">
          <Select>
            <Option value="private">Private</Option>
            <Option value="public">Public</Option>
            {/* Add more visibility options as needed */}
          </Select>
        </Form.Item>
        <Form.Item label="Tags">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              closable
              onClose={() => handleClose(tag)}
            >
              {tag}
            </Tag>
          ))}
          {inputVisible && (
            <Input
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              ref={inputRef}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag onClick={() => setInputVisible(true)}>
              <PlusOutlined /> New Tag
            </Tag>
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Upload
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
}

export default UploadYoutubeVideo;