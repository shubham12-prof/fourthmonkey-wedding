import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import image1 from "../../Images/Wedding.jpg";
import image2 from "../../Images/Entertainment.jpg";
import backgroundImage from "../../Images/Home.jpg";
import Websvg from "../../Images/fourth-munky-weddings-floral.svg";

const ButtonComponent = () => {
  const [hoverBackgroundImage, setHoverBackgroundImage] = useState("");

  // Preload images and SVG icon
  useEffect(() => {
    const images = [
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178852/pett6crpdfr4rp0embkr.jpg",
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178851/qde4wqb4uyvp8l0w1krr.jpg",
      backgroundImage,
      Websvg,
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleMouseEnter = (image) => {
    setHoverBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoverBackgroundImage("");
  };

  return (
    <div className="page-container">
      <div className="svg-icon-container-home">
        <img
          src="https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_300,h_80/v1738178375/fn6ioy0xhovof24vsvrt.png"
          alt="Icon"
          // className="svg-icon-home"
        />
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
          <div className="button-container">
            <Link
              data-aos="fade-right"
              to="/WeddingHome"
              style={{ display: "flex", flexDirection: "column" }}
              className="full-width-button"
              onMouseEnter={() =>
                handleMouseEnter(
                  "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178852/pett6crpdfr4rp0embkr.jpg"
                )
              }
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
              onMouseEnter={() =>
                handleMouseEnter(
                  "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178851/qde4wqb4uyvp8l0w1krr.jpg"
                )
              }
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
