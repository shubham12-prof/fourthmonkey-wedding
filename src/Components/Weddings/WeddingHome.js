import React, { useEffect, useState } from 'react';
import './WeddingHome.css';
// import Aos from "aos";
import "aos/dist/aos.css"
import Hightlights from '../Highlights/Highlights';
import AboutUs from '../AboutUs/AboutUs';
import WeddingPlanning from '../WeddingPlanning/WeddingPlanning';
import Contact from '../ContactUs/ContactForm';

const WeddingHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section">
      <div className="hero-content" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div data-aos="fade-left">
          <h2>We promise moon and stars, and we deliver them.</h2>
          <h1>Fourth_Munky</h1>
          <a
            href="https://wa.me/7906304629?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20for%20wedding%20planning."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            BOOK YOUR FREE CONSULTATION TODAY!</a>
        </div>
      </div>
      <div className="vow-section">
        <h3>Our Vow to You</h3>
        <p>“Before you take your vows, let us make one to you.”</p>
        <p data-aos="zoom-in"> We, at Fourth Munky, take a vow that we will do whatever it takes to make your dream come true. We promise that we will always be on our toes to get you everything you need for your wedding. We promise that we will never break your trust. We love you and care for you and are ready to take you to your new journey of life.</p>
      </div>
      <AboutUs />
      <Hightlights />
      <WeddingPlanning />
      <Contact />
    </div>
  );
};

export default WeddingHome;
