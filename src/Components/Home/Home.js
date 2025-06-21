import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const location = useLocation();
  const [hoverBackgroundImage, setHoverBackgroundImage] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false);


  const weddingImage = "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178852/pett6crpdfr4rp0embkr.jpg";
  const entertainmentImage = "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178851/qde4wqb4uyvp8l0w1krr.jpg";


  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = [weddingImage, entertainmentImage].map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = reject;
            img.src = src;
          });
        });

        await Promise.all(imagePromises);

        setImagesLoaded(true);
      } catch (error) {

        setImagesLoaded(true);
      }
    };

    preloadImages();
    return () => {
      setHoverBackgroundImage("");
    };
  }, []);

  useEffect(() => {
    setHoverBackgroundImage("");
  }, [location.pathname]);

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
        />
      </div>
      <div
        className="background-container"
        style={{
          backgroundImage: hoverBackgroundImage ? `url(${hoverBackgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          style={{ opacity: hoverBackgroundImage ? 0 : 1 }}
        >
          <source
            src="https://res.cloudinary.com/dmj6ur8sm/video/upload/v1744056248/l0fjilghhypu0qrlymoc.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

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
              className="full-width-button"
              onMouseEnter={() => handleMouseEnter(weddingImage)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="span-subtitle">DISCOVER</span>
              WEDDINGS BY
              <span>FOURTH MUNKY</span>
            </Link>

            <Link
              data-aos="fade-left"
              to="/NotFound"
              className="full-width-button"
              onMouseEnter={() => handleMouseEnter(entertainmentImage)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="span-subtitle">EXPLORE</span>
              FOURTH MUNKY
              <span>ENTERTAINMENT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;