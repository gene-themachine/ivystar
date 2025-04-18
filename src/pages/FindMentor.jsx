import React from 'react';
import '../styles/FindMentor.css';
import MentorCategories from '../components/MentorCategories';

const FindMentor = () => {
  return (
    <div className="find-mentor-container">
      <div className="page-header">
        <h1 className="page-title">Find a Mentor</h1>
        <p className="page-description">Connect with mentors who can guide you through your academic journey.</p>
      </div>
      
      <MentorCategories />
    </div>
  );
};

export default FindMentor; 