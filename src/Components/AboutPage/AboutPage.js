import React from "react";
import { Helmet } from "react-helmet";
import "./AboutPage.css";
import aboutImage from "../../Images/Home.jpg";
import TeamSection from "./TeamSection/TeamSection";
import aboutSvg from "../../Images/fourth-munky-weddings-floral.svg";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Helmet>
        <link rel="preload" as="image" href={aboutImage} type="image/jpeg" />
      </Helmet>

      <div className="about-background">
        <h1 className="about-background-text">
          <img
            className="about-background-image"
            src={aboutImage}
            alt="About Us"
          />
          We promise moon and stars, and we deliver them. Fourth_Munky
        </h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img className="about-svg-image" src={aboutSvg} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are a team dedicated to providing excellent services. With
            expertise in our field, we aim to meet and exceed your expectations.
            Our approach is client-centered, and we focus on quality,
            commitment, and professionalism.
          </p>
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
