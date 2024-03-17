import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Upload, Button, Select, Tag } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

function UploadYoutubeVideo() {
  const [form] = Form.useForm();
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleVideoUpload = (file) => {
    setVideoFile(file);
  };

  const handleThumbnailUpload = (file) => {
    setThumbnailFile(file);
  };

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
    console.log('Video file:', videoFile);
    console.log('Thumbnail file:', thumbnailFile);
    // Example API call:
    // fetch('your-upload-api-endpoint', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log('Upload response:', data))
    // .catch(error => console.error('Upload error:', error));
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Upload YouTube Video</h2>
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
        <Form.Item
          name="videoFile"
          label="Upload Video"
          valuePropName="fileList"
          getValueFromEvent={handleVideoUpload}
          rules={[{ required: true, message: 'Please upload a video' }]}
        >
          <Upload maxCount={1} accept="video/*">
            <Button icon={<UploadOutlined />}>Select Video File</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="thumbnailFile"
          label="Upload Thumbnail"
          valuePropName="fileList"
          getValueFromEvent={handleThumbnailUpload}
          rules={[{ required: true, message: 'Please upload a thumbnail' }]}
        >
          <Upload maxCount={1} accept="image/*">
            <Button icon={<UploadOutlined />}>Select Thumbnail File</Button>
          </Upload>
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