import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import image1 from "../../Images/Wedding.jpg";
import image2 from "../../Images/Entertainment.jpg";
import backgroundImage from "../../Images/Home.jpg";
import Websvg from "../../Images/fourth-munky-weddings-floral.svg";

const ButtonComponent = () => {
  const [hoverBackgroundImage, setHoverBackgroundImage] = useState("");

  const handleMouseEnter = (image) => {
    setHoverBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoverBackgroundImage("");
  };

  return (
    <div className="page-container">
      <div className="svg-icon-container-home">
        <img src={Websvg} alt="Icon" className="svg-icon-home" />
      </div>
      <div
        className="background-container"
        style={{
          backgroundImage: hoverBackgroundImage
            ? `url(${hoverBackgroundImage})`
            : `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          {/* <p className="button-header">FOURTH MUNKY ENTERTAINMENT</p> */}
          <div className="button-container">
            <Link
              data-aos="fade-right"
              to="/WeddingHome"
              style={{ display: "flex", flexDirection: "column" }}
              className="full-width-button"
              onMouseEnter={() => handleMouseEnter(image1)}
              onMouseLeave={handleMouseLeave}
            >
              <span
                style={{
                  fontSize: "18px",
                  marginBottom: "1rem",
                  fontStyle: "oblique",
                }}
              >
                DISCOVER
              </span>
              WEDDINGS BY FOURTH MUNKY
            </Link>
            <Link
              data-aos="fade-left"
              to="/EntertainmentHome"
              className="full-width-button"
              style={{ display: "flex", flexDirection: "column" }}
              onMouseEnter={() => handleMouseEnter(image2)}
              onMouseLeave={handleMouseLeave}
            >
              <span
                style={{
                  fontSize: "18px",
                  marginBottom: "1rem",
                  fontStyle: "oblique",
                }}
              >
                EXPLORE
              </span>
              FOURTH MUNKY ENTERTAINMENT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
