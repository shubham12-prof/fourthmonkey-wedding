import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
// import AboutPage from "../../assets/aboutcover.JPG";
const AboutUs = () => {
  return (
    <div style={{ marginTop: "2rem" }} className="about-us-container">
      <div className="image-section">
        <img
          className="aboutus-image"
          data-aos="fade-right"
          src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738334064/pkycpvd9vqk6i0aaysfq.webp"
          alt="about-image"
        />
      </div>
      <div className="text-section">
        <h2>WHAT WE DO</h2>
        <p data-aos="fade-left">
          We provide complete wedding planning and designing solutions. Right
          from listening to your dreams & fantasies, to finding dreamland for
          it, and designing the space, creating and delivering invitations,
          managing logistics, to on-ground management, and hospitality,
          entertainment, to the final vow; we get everything sorted. And we
          assure class and luxury in our services.
        </p>
        <button className="know-more-button">
          <Link className="know-more" to="/AboutUs">
            Know More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
