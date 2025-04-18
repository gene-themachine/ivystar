import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <h2 className="logo-text-footer">ivystar</h2>
          </Link>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/find-mentor">Find a mentor</Link></li>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li><Link to="/productivity-hub">Productivity Hub</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ivystar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
