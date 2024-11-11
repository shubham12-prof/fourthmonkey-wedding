import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="image-section">
        <img data-aos="fade-right" src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Studio Kintsugi" className="about-image" />
      </div>
      <div className="text-section">
        <h2>WHAT WE DO</h2>
        <p data-aos="fade-left">
          We provide complete wedding planning and designing solutions. Right from
          listening to your dreams & fantasies, to finding dreamland for it, and
          designing the space, creating and delivering invitations, managing
          logistics, to on-ground management, and hospitality, entertainment, to
          the final vow; we get everything sorted. And we assure class and luxury
          in our services.</p>
        <button className="know-more-button">Know More</button>
      </div>
    </div>
  );
};

export default AboutUs;
