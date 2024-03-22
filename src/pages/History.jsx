import React, { useState } from 'react';
import { Table, Modal, Button, Form, Input, message } from 'antd';

const { Column } = Table;
const { TextArea } = Input;

const dummyData = [
  {
    key: '1',
    serialNumber: '1',
    videoName: 'Video 1',
    uploadedAt: '2024-02-28',
    status: 'Processed',
  },
  {
    key: '2',
    serialNumber: '2',
    videoName: 'Video 2',
    uploadedAt: '2024-02-27',
    status: 'Processing',
  },
  {
    key: '3',
    serialNumber: '3',
    videoName: 'Video 3',
    uploadedAt: '2024-02-26',
    status: 'Pending',
  },
];

function History() {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [editForm] = Form.useForm();
  const [rejectComment, setRejectComment] = useState('');

  const handleActionClick = (action) => {
    switch (action) {
      case 'Edit':
        setModalTitle('Edit Video');
        break;
      case 'Approve':
        // Handle approve action here, e.g., make API call
        message.success('Video approved!');
        setVisible(false);
        break;
      case 'Reject':
        // Handle reject action here, e.g., open reject modal
        setModalTitle('Reject Video');
        break;
      default:
        break;
    }
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleRejectSubmit = () => {
    // Handle reject submission, e.g., make API call with rejectComment
    message.success('Video rejected with comment: ' + rejectComment);
    setVisible(false);
  };

  return (
    <>
      <Table dataSource={dummyData} pagination={false}>
        <Column title="S.no." dataIndex="serialNumber" key="serialNumber" />
        <Column title="Name of Video" dataIndex="videoName" key="videoName" />
        <Column title="Uploaded At" dataIndex="uploadedAt" key="uploadedAt" />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="Actions"
          key="actions"
          render={(text, record) => (
            <Button onClick={() => handleActionClick('Edit')}>+</Button>
          )}
        />
      </Table>
      <Modal
        open={visible}
        title={modalTitle}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          modalTitle === 'Reject Video' && (
            <Button key="reject" type="primary" onClick={handleRejectSubmit}>
              Reject
            </Button>
          ),
          modalTitle === 'Edit Video' && (
            <Button key="submit" type="primary" onClick={editForm.submit}>
              Save
            </Button>
          ),
        ]}
      >
        {modalTitle === 'Edit Video' && (
          <Form form={editForm} layout="vertical" onFinish={(values) => {
            console.log('Received values:', values);
            // Handle edit submission, e.g., make API call with updated values
            message.success('Video edited!');
            setVisible(false);
          }}>
            <Form.Item label="Video Name" name="videoName" initialValue={dummyData[0].videoName}>
              <Input />
            </Form.Item>
          </Form>
        )}
        {modalTitle === 'Reject Video' && (
          <div>
            <TextArea rows={4} value={rejectComment} onChange={(e) => setRejectComment(e.target.value)} />
          </div>
        )}
      </Modal>
    </>
  );
}

export default History;
