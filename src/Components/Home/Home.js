import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import backgroundVideo from "../../Images/background.mp4";

const ButtonComponent = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setBackgroundImage("");
  };

  return (
    <div className="page-container">
      <video
        autoPlay
        loop
        muted
        className="background-video"
        style={{
          display: backgroundImage ? "none" : "block",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {backgroundImage && (
        <div
          className="hover-background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      )}

      <div className="content">
        <p className="button-header">FOURTH MUNKY ENTERTAINMENT</p>
        <div className="button-container">
          <Link
            data-aos="fade-right"
            to="/WeddingHome"
            className="full-width-button"
            onMouseEnter={() => handleMouseEnter(image1)}
            onMouseLeave={handleMouseLeave}
          >
            DISCOVER WEDDINGS BY FOURTH MUNKY
          </Link>
          <Link
            data-aos="fade-left"
            to="/EntertainmentHome"
            className="full-width-button"
            onMouseEnter={() => handleMouseEnter(image2)}
            onMouseLeave={handleMouseLeave}
          >
            EXPLORE FOURTH MUNKY ENTERTAINMENT
          </Link>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Fourth Munky Entertainment. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ButtonComponent;
