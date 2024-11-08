import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        {/* <img src="logo-url" alt="Logo" className="logo" /> */}
        <p className="footer-title">FOURTH MUNY ENTERTAINMENT PRIVATE LIMITED</p>
        <p className='footer-subtitle'>
        For Business Enquires only:
        </p>
        <button className="contact-button">CONTACT US!</button>
      </div>
      <div className="footer-section">
        <h4>VISIT US</h4>
        <p>561, INDIRA NAAR Colony, Dehradun- 248001</p>
        <p><strong>Phone:</strong>+91 7247889013</p>
        <p><strong>Email:</strong> weddings@fourthmunky.com</p>
      </div>
      <div className="footer-section">
        <h4>QUICK LINKS</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Portfolio</p>
        <p>Blog</p>
      </div>
      <div className="footer-section">
        <h4>SOCIAL</h4>
        <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
        <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
        <p><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</p>
      </div>
    </footer>
  );
};

export default Footer;
