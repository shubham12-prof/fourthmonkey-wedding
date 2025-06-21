import React from "react";
import "./WeddingHome.css";
import "aos/dist/aos.css";
import AboutUs from "../AboutUs/AboutUs";
import WeddingPlanning from "../WeddingPlanning/WeddingPlanning";
import Contact from "../ContactUs/ContactForm";
import Vow from "../VowSection/Vow";
import VenueSlider from "../Venue/VenueSlider";
import "../AboutPage/AboutPage.css";
import Portfolio from "../Portfolio/Portfolio";
const WeddingHome = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <video autoPlay loop muted playsInline className="background-video">
          <source
            src="https://res.cloudinary.com/dmj6ur8sm/video/upload/v1739343671/cuvvrvdxmkd9tocvmtqy.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-content-wedding">
          <h2>We promise moon and stars, and we deliver them.</h2>
          <h1> Weddings by Fourth Munky</h1>
          <a
            href="https://wa.me/7417065899?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20for%20wedding%20planning."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            BOOK YOUR FREE CONSULTATION TODAY!
          </a>
        </div>
      </div>
      <Vow />
      <AboutUs />
      <WeddingPlanning />
      <Portfolio />
      <VenueSlider />
      <Contact />
    </div>
  );
};

export default WeddingHome;
