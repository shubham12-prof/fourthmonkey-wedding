import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";

const ButtonComponent = () => {
  const defaultBackground = image3;
  const [backgroundImage, setBackgroundImage] = useState("");

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(defaultBackground);
  };
  return (
    <div className="line-background-container">
      {/* <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div> */}
      <div className="content"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}>
        <p className="button-header">FOURTH MUNKY ENTERTAINMENT</p>
        <div className="button-container">
          <Link data-aos="fade-right" to="/WeddingHome"
            className="full-width-button"
            onMouseEnter={() => handleMouseEnter(image1)} onMouseLeave={handleMouseLeave}>
            DISCOVER WEDDINGS BY FOURTH MUNKY
          </Link>
          <Link data-aos="fade-left" to="/EntertainmentHome" className="full-width-button" onMouseEnter={() => handleMouseEnter(image2)} onMouseLeave={handleMouseLeave}>
            EXPLORE FOURTH MUNKY ENTERTAINMENT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
