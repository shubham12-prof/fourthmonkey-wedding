import React from "react";
import "./AboutPage.css";
import TeamSection from "./TeamSection/TeamSection";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";

const AboutPage = () => {
  return (
    <div className="about-container">
      <img
        className="about-bg-img"
        src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1743843117/abrkeihpwmyyvyrlhrba.png"
        alt="Wedding Background"
      />
      <AboutUs />
      <div style={{ marginTop: "0rem" }}>
        <div className="about-text">
          <h2>
            We provide complete wedding planning and designing solutions. Right
            from listening to your dreams & fantasies, to finding dreamland for
            it, and designing the space, creating and delivering invitations,
            managing logistics, to on-ground management, and hospitality,
            entertainment, to the final vow; we get everything sorted. And we
            assure class and luxury in our services.
          </h2>
        </div>
        <section className="wedding-decor">
          <h2>Wedding Décor</h2>
          <p>
            Known for the extraordinary ability to beautify the spaces by using
            imaginations and creativity. At Wedding by Fourth Munky, we have an
            in-house team of multi- talented designers and technicians. We have
            our own production house of decorative setups and elements. We have
            inhouse inventory of world- class artificial flowers, decorative
            elements, linens and setups. We ensure that everything will be best
            and premium. Single flower bud used at your wedding will be
            personally picked from the market by our in-house floral designer.
            We will give you value for money.
          </p>
        </section>

        <section className="who-we-are">
          <h2>Who We Are</h2>
          <p>
            We are highly considerate human beings, united to bring happiness in
            the faces of others by fulfilling their wishes. We started bringing
            happiness from the year 2015, and are regularly working hard every
            day to see happy faces around us. We are proud to be a part of the
            incredible event stories. The stories are written by the ink of
            dreams, fantasies, imaginations, hard- work and perfection, the
            stories that bring joy and happiness to each and every one who were
            part of it. Our world class team- comprising of the wonderful people
            who live in the imaginary world and are the best – continues to push
            the boundaries of imagination and creativity. Team detail with
            pictures..
          </p>
        </section>

        <TeamSection />

        <section className="testimonials">
          <h2>Testimonials</h2>
          <h2>Fourth Munky Entertainment</h2>
          <p>
            Where Passion Meets Performance At Fourth Munky Live,
            <br></br>
            <span>
              we take your events beyond imagination. From conceptualization to
              flawless execution, we bring unparalleled energy, ideas, and
              technology to every experience. “We do events because we can't
              imagine life without them.”
            </span>
          </p>
        </section>

        <section className="entertainment-services">
          <Link to="/portfolio" className="explore-events">
            EXPLORE OUR PORTFOLIO
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
