import React, { useState } from 'react';
import { Card, Row, Col, List, Button, Modal, Dropdown, Input, Calendar } from 'antd';

const DashboardStats = () => {
  const [selectedAction, setSelectedAction] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [visible, setVisible] = useState(false);

  // Mock data for the dashboard
  const mockData = {
    totalVideos: 32,
    approvedVideos: 20,
    rejectedVideos: 12,
    pendingVideos: 4,
    pendingList: [
      { name: 'Video1', availableDate: '2022-03-01', expiryDate: '2022-03-31' },
      { name: 'Video2', availableDate: '2022-03-03', expiryDate: '2022-03-31' },
      { name: 'Video3', availableDate: '2022-03-05', expiryDate: '2022-03-31' },
    ], // Example list of pending videos
    uploadFrequency: [
      { date: '2022-03-01', count: 5 },
      { date: '2022-03-03', count: 10 },
      { date: '2022-03-05', count: 7 },
    ], // Example upload frequency data
  };

  const dateCellRender = (date) => {
    const currentDate = date.format('YYYY-MM-DD');
    const desiredDate = '2024-03-03'; // Replace with your desired date

    return {
      value: date.format('D'),
      style: currentDate === desiredDate ? { backgroundColor: 'green' } : {},
    };
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleSubmit = () => {
    if (selectedAction === 'Reject' && !rejectionReason) {
      alert('Please provide a rejection reason');
      return;
    }
    handleOk(selectedAction, rejectionReason);
  };

  const handleActionSelect = (value) => {
    console.log(value)
    setSelectedAction(value);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>Welcome, Lokesh</h1>

        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={6}>
            <Card title="Total Videos" styles={{ header: { textAlign: 'center' }, body: { textAlign: 'center' } }}>
              <span style={{ fontWeight: 'bold', fontSize: '35px' }}>
                {mockData.totalVideos}
              </span>
            </Card>
          </Col>

          <Col span={6}>
            <Card title="Pending Videos" styles={{ header: { textAlign: 'center' }, body: { textAlign: 'center' } }}>
              <span style={{ fontWeight: 'bold', fontSize: '35px' }}>
                {mockData.pendingVideos}
              </span>
            </Card>
          </Col>

          <Col span={6}>
            <Card title="Approved Videos" styles={{ header: { textAlign: 'center' }, body: { textAlign: 'center' } }}>
              <span style={{ fontWeight: 'bold', fontSize: '35px' }}>
                {mockData.approvedVideos}
              </span>
            </Card>
          </Col>

          <Col span={6}>
            <Card title="Rejected Videos" styles={{ header: { textAlign: 'center' }, body: { textAlign: 'center' } }}>
              <span style={{ fontWeight: 'bold', fontSize: '35px' }}>
                {mockData.rejectedVideos}
              </span>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <div style={{ marginTop: '20px' }}>
              <h2>Pending Videos</h2>
              <List
                dataSource={mockData.pendingList}
                renderItem={(item) => (
                  <List.Item>
                    <span>{item.name}</span>
                    <span style={{ marginLeft: '20px' }}>{item.availableDate}</span>
                    <span style={{ marginLeft: '20px' }}>{item.expiryDate}</span>
                    <Button type="primary" onClick={showModal}>Action</Button>
                  </List.Item>
                )}
              />
            </div>
          </Col>

          {/* Upload Frequency */}
          <Col span={12}>
            <div style={{ marginTop: '20px' }}>
              <h2>Upload Frequency</h2>
              <Calendar cellRender={() => dateCellRender} fullscreen={false} />
            </div>
          </Col>
        </Row>

        <Modal
          title="Action"
          open={visible}
          onOk={handleSubmit}
          onCancel={handleCancel}
        >
          <Dropdown
            options={[
              {
                label: 'Approve',
                value: 'Approve',
              },
              {
                label: 'Reject',
                value: 'Reject',
              },
            ]}
            onChange={handleActionSelect}
          />
          {selectedAction === 'Reject' && (
            <Input
              placeholder="Rejection reason"
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
          )}
        </Modal>

      </div>
    </>
  );
};

export default DashboardStats;
