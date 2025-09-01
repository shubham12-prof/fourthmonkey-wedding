import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2 className="footer-title">
            FOURTH MUNY ENTERTAINMENT PRIVATE LIMITED
          </h2>
          <p className="footer-subtitle">For Business Enquiries only:</p>
          <button className="contact-button"> <a
            href="https://wa.me/7417065899?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20for%20wedding%20planning."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            CONTACT US!
          </a>
          </button>
        </div>

        <div className="footer-section">
          <h4>VISIT US</h4>
          <p>Address :- 36, Phase 2. Engineers Enclave, GMS Road, Dehradun</p>
          <p>
            <strong>Phone:</strong> +91 7247889013
          </p>
          <p>
            <strong>Email:</strong> weddings@fourthmunky.com
          </p>
        </div>

        <div className="footer-section">
          <h4>SOCIAL</h4>
          <div className="social-icons">
            <Link to="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="#" className="social-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Take Pride 25</p>
      </div>
    </footer>
  );
};

export default Footer;
