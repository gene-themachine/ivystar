import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MentorCategories.css';

const MentorCategories = () => {
  return (
    <div className="mentor-categories-container">
      <h2 className="categories-title">Discover mentors specializing in:</h2>
      
      <div className="categories-grid">
        <Link to="/mentors/tech" className="category-card tech">
          <h3>AI & Technology</h3>
        </Link>
        
        <Link to="/mentors/design" className="category-card design">
          <h3>Design & Creativity</h3>
        </Link>
        
        <Link to="/mentors/academic" className="category-card academic">
          <h3>Academic Excellence</h3>
        </Link>
        
        <Link to="/mentors/startup" className="category-card startup">
          <h3>Startup & Entrepreneurship</h3>
        </Link>
      </div>
    </div>
  );
};

export default MentorCategories; 