import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="page-header">
        <h1 className="page-title">How It Works</h1>
        <p className="page-description">Our mentorship process is designed to help you succeed.</p>
      </div>
      
      <div className="steps-overview">
        <div className="steps-list">
          <div className="step-item">
            <h3>1. Create Your Profile</h3>
            <p>Sign up and share your academic interests and goals.</p>
          </div>
          
          <div className="step-item">
            <h3>2. Browse Mentors</h3>
            <p>Explore mentors with various backgrounds and expertise.</p>
          </div>
          
          <div className="step-item">
            <h3>3. Connect and Chat</h3>
            <p>Reach out to mentors who match your needs.</p>
          </div>
          
          <div className="step-item">
            <h3>4. Schedule Sessions</h3>
            <p>Book regular mentoring sessions through our platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 