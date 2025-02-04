import React from "react";
import "./WeddingHome.css";
import "aos/dist/aos.css";
import Hightlights from "../Highlights/Highlights";
import AboutUs from "../AboutUs/AboutUs";
import WeddingPlanning from "../WeddingPlanning/WeddingPlanning";
import Contact from "../ContactUs/ContactForm";
// import WeddingCover from "../../assets/weddingCover.jpg";

const WeddingHome = () => {
  return (
    <div className="hero-section">
      <link rel="preload" as="image" />

      <div
        className="hero-content"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178241/td6saxehedpuzrotdv5x.jpg"})`,
        }}
      >
        <div className="hero-content-wedding">
          <h2>We promise moon and stars, and we deliver them.</h2>
          <h1>FourthMonkey</h1>
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
      <div className="vow-section">
        <h1>Our Vow to You</h1>
        <h2>“Before you take your vows, let us make one to you."</h2>
        <p>
          We, at Fourth Munky, take a vow that we will do whatever it takes to
          make your dream come true. toes to get you everything you need for
          your wedding. We promise that we will never break your trust. We love
          you and care for you and are ready to take you to your new journey of
          life. We promise that we will always be on our
        </p>
      </div>
      <AboutUs />
      <Hightlights />
      <WeddingPlanning />
      <Contact />
    </div>
  );
};

export default WeddingHome;
