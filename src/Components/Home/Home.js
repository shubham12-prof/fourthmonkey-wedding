import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import HomeVideo from './HomeVideo.mp4';

const ButtonComponent = () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={HomeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <p className="button-header">Fourth Munky Entertainment</p>
        <div className="button-container">
          <Link to="/WeddingHome" className="full-width-button">
            Discover Weddings by Fourth Munky
          </Link>
          <Link to="/EntertainmentHome" className="full-width-button">
            Explore Fourth Munky Entertainment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
