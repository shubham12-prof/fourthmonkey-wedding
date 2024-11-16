import React from 'react';
import './AboutPage.css';
import aboutImage from '../AboutPage/TeamSection/TeamSection';
import TeamSection from './TeamSection/TeamSection';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-background">
        <h1 className="about-background-text">We promise moon and stars, and we deliver them.
        Fourth_Munky</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m6aE6Z5rz9CkX-D-zn0sJlAZikxJjbUsgg&s" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are a team dedicated to providing excellent services. With expertise in our field,
            we aim to meet and exceed your expectations. Our approach is client-centered,
            and we focus on quality, commitment, and professionalism.
          </p>
        </div>
        
      </div>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
