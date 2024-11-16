import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import MySvg from '../../Common/Icons/images.svg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [images.length]);
  return (
    <nav className="hero-nav">
    {/* <div className='header' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}> */}
      <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} >
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li> <Link onClick={handleLinkClick} className='link-style' to="/AboutUs" > ABOUT US</Link></li>
        <li><Link to="/portfolio" onClick={handleLinkClick} className='link-style'>
          PORTFOLIO
        </Link></li>
        <li>BLOG</li>
      </ul>
      <div className="svg-icon">
       <Link to ="WeddingHome" >
       <img src={MySvg} alt="My SVG Icon" />
       </Link> 
      </div>
      <div className="social-icons">
        {/* <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-whatsapp"></i> */}
        <Link to="/" className="switch-icon">Switch to FourthMOneky</Link>
      </div>
    {/* </div> */}
    </nav>  
  );
};

export default Header;
