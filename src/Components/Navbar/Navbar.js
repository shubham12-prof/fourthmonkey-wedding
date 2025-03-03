import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".nav-links, .hamburger-icon")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="hero-nav">
      <div
        className="hamburger-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
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
            to="/WeddingHome"
            onClick={handleLinkClick}
            className="link-style"
          >
            HOME
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/WeddingHome">
          <picture>
            <source
              srcSet="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738242677/p9x32n7xaw3pkt7ufdff.png"
              type="image/webp"
            />
            <img
              className="svg-icon-header"
              src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738242677/f_auto,q_auto,w_50,h_50/p9x32n7xaw3pkt7ufdff.png"
              alt="My SVG Icon"
              loading="eager"
            />
          </picture>
        </Link>
      </div>
      <div className="social-icons-header">
        <Link to="/" className="switch-icon-header">
          <FontAwesomeIcon className="shuffle-icon" icon={faShuffle} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
