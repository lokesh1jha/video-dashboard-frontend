import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom'; 
import './HomePage.css';

const IMAGE_URL = "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const { Header, Content, Footer } = Layout;

function HomePage() {
  return (
    <Layout>
      <Header className="header">
        <h1 className="title">Streamease</h1>
      </Header>
      <Content className="content">
        <div className="content-wrapper">
          <div className="image-wrapper">
            <img src={IMAGE_URL} alt="StreamEase" className="image" />
          </div>
          <div className="text-wrapper">
            <h2>About Streamease</h2>
            <p>
              This application will automate your work. Users can view your video and approve it to get uploaded to platforms like Youtube and others.
            </p>
            <Link to="/signup">
              <Button type="primary" size="large">Register Now</Button>
            </Link>
          </div>
        </div>
      </Content>
      <Footer className="footer">
        © {new Date().getFullYear()} StreamEase. All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default HomePage;
