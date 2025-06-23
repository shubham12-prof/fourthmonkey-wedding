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
        tabIndex={-1}
        style={{ outline: "none", userSelect: "none" }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        >
          <path
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
          &times;
        </div>
        <li>
          <Link onClick={handleLinkClick} className="link-style" to="/AboutUs">ABOUT US</Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} className="link-style" to="/ContactForm">CONNECT</Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} className="link-style" to="/WeddingHome">HOME</Link>
        </li>
        <p style={{ alignItems: "center", textAlign: "center", fontSize: "1.3rem", fontFamily: "itelic" }}>
          We promise moon and stars, and we deliver them.
          Weddings by Fourth Munky</p>
        <button className="contact-button">CONTACT US!</button>
      </ul>

      <div style={{ outline: "none", userSelect: "none" }}>
        <Link to="/WeddingHome" tabIndex={-1}>
          <img
            className="svg-icon-header"
            src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738242677/p9x32n7xaw3pkt7ufdff.png"
            alt="Your Icon"
            tabIndex={-1}
            draggable={false}
          />
        </Link>
      </div>

      <Link to="/" className="switch-icon-header">
        <FontAwesomeIcon className="shuffle-icon" icon={faShuffle} />
      </Link>
    </nav>

  );
};

export default Header;