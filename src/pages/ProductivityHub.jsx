import React from 'react';
import '../styles/ProductivityHub.css';

const ProductivityHub = () => {
  return (
    <div className="productivity-hub-container">
      <div className="page-header">
        <h1 className="page-title">Productivity Hub</h1>
        <p className="page-description">Access tools and resources to help you excel academically.</p>
      </div>
      
      <div className="productivity-categories">
        <div className="category-list">
          <div className="category-item">
            <h3>Resources</h3>
            <p>Study guides, application tips, and academic materials</p>
          </div>
          
          <div className="category-item">
            <h3>Study Tools</h3>
            <p>Productivity apps, planners, and scheduling tools</p>
          </div>
          
          <div className="category-item">
            <h3>Templates</h3>
            <p>Downloadable templates for applications and notes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityHub; 