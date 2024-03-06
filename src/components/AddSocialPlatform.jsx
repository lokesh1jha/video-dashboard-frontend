import React from 'react';
import { Card, Row, Col } from 'antd';
import { YoutubeOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

function AddSocialPlatform() {
  const handleConnect = (platform) => {
    //redirect to youtubeauthwizard
    window.location.href = `/youtubeauthwizard`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Add a Social Platform">
        <Row gutter={[16, 16]}>
          <Col span={8} onClick={() => handleConnect('YouTube')}>
            <Card hoverable style={{ textAlign: 'center' }}>
              <YoutubeOutlined style={{ fontSize: '32px', color: '#FF0000' }} />
              <p>YouTube</p>
            </Card>
          </Col>
          {/* Features to be release in future versions
          <Col span={8} onClick={() => handleConnect('Instagram')}>
            <Card hoverable style={{ textAlign: 'center' }}>
              <InstagramOutlined style={{ fontSize: '32px', color: '#8a3ab9' }} />
              <p>Instagram</p>
            </Card>
          </Col>
          <Col span={8} onClick={() => handleConnect('Facebook')}>
            <Card hoverable style={{ textAlign: 'center' }}>
              <FacebookOutlined style={{ fontSize: '32px', color: '#3b5998' }} />
              <p>Facebook</p>
            </Card>
          </Col> */}
        </Row>
      </Card>
    </div>
  );
}

export default AddSocialPlatform;
