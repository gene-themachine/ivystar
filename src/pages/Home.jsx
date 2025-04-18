import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Import assets
import columbiaFlag from '../assets/colombia-flag.png';
import sarahImg from '../assets/sarah.png';
import harvardLogo from '../assets/harvard.png';
import uscLogo from '../assets/usc.png';
import dartmouthLogo from '../assets/dartmouth.png';
import brownLogo from '../assets/brown.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section fade-in-section">
        <div className="parallax-bg">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Discover</h1>
          <p className="hero-subtitle">Connect with mentors who've walked the path you're exploring</p>
          
          <div className="mentor-categories-box">
            <h2 className="categories-header">Discover mentors specializing in:</h2>
            
            <div className="category-list">
              <div className="category-item tech">
                <h3>AI & Technology</h3>
              </div>
              
              <div className="category-item design">
                <h3>Design & Creativity</h3>
              </div>
              
              <div className="category-item academic">
                <h3>Academic Excellence</h3>
              </div>
              
              <div className="category-item startup">
                <h3>Startup & Entrepreneurship</h3>
              </div>
            </div>
          </div>
          
          <div className="cta-container">
            <Link to="/signup" className="primary-button">Find Your Mentor</Link>
            <Link to="/stories" className="secondary-button">Explore Success Stories</Link>
          </div>
        </div>
      </section>

      {/* Student Profile Section */}
      <section className="student-profile fade-in-section">
        <div className="profile-content">
          <div className="profile-text">
            <h2>Meet <span className="student-name">Sarah</span>,</h2>
            <p className="student-description">a high school junior applying early decision to <span className="school-highlight">Columbia</span></p>
            <div className="pennant-container">
              <img src={columbiaFlag} alt="Columbia Pennant" className="pennant-image" />
            </div>
            <div className="student-struggles">
              <p><span className="platform">Scrolls Reddit</span>, but finds <span className="highlight">contradictory advice</span>.</p>
              <p><span>Doesn't want to ask their counselor</span>—what if they think they're aiming too high?</p>
              <p><span>Tries LinkedIn</span>, but who's going to answer a <span className="highlight">random DM</span>?</p>
              <p className="emotion">Feels <span className="highlight-strong">stuck</span>, unsure, <span className="and">and</span> overwhelmed.</p>
            </div>
          </div>
          <div className="profile-image-container">
            <img src={sarahImg} alt="Student studying" className="profile-image" />
            <span>Sarah</span>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section fade-in-section">
        <h2 className="solution-title">Guidance When You Need It Most</h2>
        <div className="solution-features">
          <h3 className="mentors-title">Mentors from <span className="highlight-anywhere">everywhere</span></h3>
          <h3 className="guide-title">To guide <span className="highlight-you">YOU</span> through your challenges</h3>
        </div>
        <div className="mentor-categories">
          {/* Scholars */}
          <div className="category-section scholars-section">
            <h3 className="category-title">Scholars</h3>
            <div className="category-content">
              <p className="category-description">Connect with academic mentors from prestigious universities worldwide.</p>
              <div className="university-logos">
                <img src={harvardLogo} alt="Harvard University" className="university-logo" />
                <img src={uscLogo} alt="USC" className="university-logo" />
                <img src={dartmouthLogo} alt="Dartmouth" className="university-logo" />
                <img src={brownLogo} alt="Brown University" className="university-logo" />
              </div>
            </div>
          </div>
          
          {/* Professionals */}
          <div className="category-section professionals-section">
            <h3 className="category-title">Professionals</h3>
            <div className="category-content">
              <p className="category-description">Learn from industry experts with real-world experience across various fields.</p>
              <div className="category-fields">
                <span className="field-label">Technology</span>
                <span className="field-label">Healthcare</span>
                <span className="field-label">Business</span>
                <span className="field-label">Arts & Media</span>
                <span className="field-label">Law</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="find-mentor-area">
          <Link to="/signup" className="primary-button">Find Your Mentor</Link>
          <Link to="/stories" className="secondary-button">Explore Success Stories</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 