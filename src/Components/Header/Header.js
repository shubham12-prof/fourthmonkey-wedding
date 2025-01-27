import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";
import MySvg from "../../Common/Icons/images.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="hero-nav">
      <div
        className="hamburger-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link onClick={handleLinkClick} className="link-style" to="/AboutUs">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            onClick={handleLinkClick}
            className="link-style"
          >
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            onClick={handleLinkClick}
            className="link-style"
          >
            BLOG
          </Link>
        </li>
      </ul>
      <div className="svg-icon-header">
        <Link to="WeddingHome">
          <img src={MySvg} alt="My SVG Icon" />
        </Link>
      </div>
      <div className="social-icons-header">
        <Link to="/" className="switch-icon-header">
          Switch to FourthMOneky
        </Link>
      </div>
    </nav>
  );
};

export default Header;
