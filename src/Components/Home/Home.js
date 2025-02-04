import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import backgroundImage from "../../Images/Home.jpg";
import Websvg from "../../Images/fourth-munky-weddings-floral.svg";
import { motion } from "framer-motion";

const ButtonComponent = () => {
  const [hoverBackgroundImage, setHoverBackgroundImage] = useState("");

  useEffect(() => {
    const images = [
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178852/pett6crpdfr4rp0embkr.jpg",
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178851/qde4wqb4uyvp8l0w1krr.jpg",
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738587314/izrv2pdz9iy9x9vfwykn.jpg",
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
          src="https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_300,h_80/v1738178375/heelourbhu4c0t3ijrch.png"
          alt="Icon"
          // className="svg-icon-home"
        />
      </div>
      <div
        className="background-container"
        style={{
          backgroundImage: hoverBackgroundImage
            ? `url(${hoverBackgroundImage})`
            : `url(${"https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738587314/izrv2pdz9iy9x9vfwykn.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <motion.p
            style={{
              fontSize: "2rem",
              textTransform: "uppercase",
              fontStyle: "none",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span style={{ fontSize: "3rem" }}>Two Divisions,</span> One
            Promise: Perfection
          </motion.p>
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
              WEDDINGS BY
              <span>FOURTH MUNKY</span>
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
              FOURTH MUNKY
              <span>ENTERTAINMENT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
