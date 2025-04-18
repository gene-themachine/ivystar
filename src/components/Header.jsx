import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <h1 className="logo-text">ivystar</h1>
        </Link>
        
        <nav className="nav-menu">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/find-mentor" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Find a mentor
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/how-it-works" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/productivity-hub" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Productivity Hub
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="auth-buttons">
          <Link to="/signin" className="signin-button">Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;