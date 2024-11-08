import React, { useEffect, useState } from 'react';
import './WeddingHome.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Hightlights from "../Highlights/Highlights"
import AboutUs from '../AboutUs/AboutUs';
import WeddingPlanning from '../WeddingPlanning/WeddingPlanning';
import Contact from '../ContactUs/ContactForm';
const WeddingHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const images = [
    'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  });

  useEffect(() => {
    const updateVH = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    updateVH();
    window.addEventListener('resize', updateVH);

    return () => window.removeEventListener('resize', updateVH);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section">
      <nav className="hero-nav">
        <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>About Us</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-whatsapp"></i>
          <Link to="/" className="switch-icon">Switch to FourthMOneky</Link>
        </div>
      </nav>
      <div className="hero-content" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <h2>We promise moon and stars, and we deliver them.</h2>
        <h1>Fourth_Munky</h1>
        <button>BOOK YOUR FREE CONSULTATION TODAY!</button>
      </div>
      <div className="vow-section">
        <h3>Our Vow to You</h3>
        <p>“Before you take your vows, let us make one to you.”</p>
        <p>We, at Fourth Munky, take a vow that we will do whatever it takes to make your dream come true. We promise that we will always be on our toes to get you everything you need for your wedding. We promise that we will never break your trust. We love you and care for you and are ready to take you to your new journey of life.</p>
      </div>
      <AboutUs />
      <Hightlights />
      <WeddingPlanning />
      <Contact />
      <Footer />
    </div>
  );
};

export default WeddingHome;
