import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to StreamEase</h1>
        <p>Your go-to platform for easy and trustworthy video editing and uploading.</p>
      </header>
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Effortlessly edit your videos with our intuitive tools.</li>
          <li>Upload and manage your content with ease.</li>
          <li>Automate repetitive tasks to save time.</li>
          <li>Trustworthy platform with secure data handling.</li>
        </ul>
      </section>
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Sign up now to experience the simplicity of StreamEase.</p>
        <button>Sign Up</button>
      </section>
      <footer>
        <p>&copy; 2024 StreamEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
