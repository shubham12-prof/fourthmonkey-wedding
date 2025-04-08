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
          <button className="contact-button">CONTACT US!</button>
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
    </footer>
  );
};

export default Footer;
