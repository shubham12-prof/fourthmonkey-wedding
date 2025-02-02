import React from "react";
// import { Helmet } from "react-helmet";
import "./AboutPage.css";
import TeamSection from "./TeamSection/TeamSection";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* <Helmet>
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738242677/p9x32n7xaw3pkt7ufdff.png"
          type="image/jpeg"
        />
      </Helmet> */}

      {/* <div className="about-content"> */}
      {/* <div className="about-image">
          <img
            className="about-svg-image"
            src="https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_80,h_80/v1738242677/p9x32n7xaw3pkt7ufdff.png"
            alt="About Us"
          />
        </div> */}
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are a team dedicated to providing excellent services. With
          expertise in our field, we aim to meet and exceed your expectations.
          Our approach is client-centered, and we focus on quality, commitment,
          and professionalism.
        </p>
        {/* </div> */}
      </div>

      <section className="wedding-decor">
        <h2>Wedding Décor</h2>
        <p>
          Known for our extraordinary ability to beautify spaces with
          creativity. We have an in-house team of multi-talented designers and
          technicians. Our production house ensures premium quality décor.
        </p>
      </section>

      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Since 2015, we have been bringing happiness to our clients by making
          their dreams a reality. Our dedicated team pushes the boundaries of
          creativity to make every event extraordinary.
        </p>
      </section>

      <TeamSection />

      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>
          "We do events because we can't imagine life without them." Experience
          unforgettable moments with Fourth Munky Entertainment.
        </p>
      </section>

      <section className="entertainment-services">
        <h2>Entertainment Services</h2>
        <ul>
          <li>Artist & Talent Management</li>
          <li>Stage Design & Production</li>
          <li>Sound & Light Engineering</li>
          <li>Crowd Management</li>
          <li>Brand Collaborations & Sponsorships</li>
        </ul>
        <a href="/events" className="explore-events">
          Explore Our Events
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
