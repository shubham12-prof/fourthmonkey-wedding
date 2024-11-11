import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const ButtonComponent = () => {
  return (
    <div className="line-background-container">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="content">
        <p className="button-header">Fourth Munky Entertainment</p>
        <div className="button-container">
          <Link data-aos="fade-right" to="/WeddingHome" className="full-width-button">
            Discover Weddings by Fourth Munky
          </Link>
          <Link data-aos="fade-left" to="/EntertainmentHome" className="full-width-button">
            Explore Fourth Munky Entertainment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
