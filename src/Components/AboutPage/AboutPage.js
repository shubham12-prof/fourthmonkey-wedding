import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="section">
        <h1>WHAT WE DO</h1>
        <p>
          We provide complete wedding planning and designing solutions. Right
          from listening to your dreams & fantasies, to finding dreamland for
          it, and designing the space, creating and delivering invitations,
          managing logistics, to on-ground management, and hospitality,
          entertainment, to the final vow; we get everything sorted. And we
          assure class and luxury in our services.
        </p>
        <h1>OUR STORY</h1>
        <img
          className="about-bg-img"
          src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1743843117/abrkeihpwmyyvyrlhrba.png"
          alt="Wedding Background"
        />
      </section>

      <section className="section">
        <h2>WHO WE ARE</h2>
        <img
          className="about-bg-img"
          src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1743879644/whuovzhdngfp7d7l48cx.jpg"
          alt="Team Background"
        />
        <p>
          We are highly considerate human beings, united to bring happiness in
          the faces of others by fulfilling their wishes. We started bringing
          happiness from the year 2015, and are regularly working hard every day
          to see happy faces around us. We are proud to be a part of the
          incredible event stories. The stories are written by the ink of
          dreams, fantasies, imaginations, hard-work and perfection. Our
          world-class team — comprising of the wonderful people who live in the
          imaginary world and are the best — continues to push the boundaries of
          imagination and creativity.
        </p>
      </section>

      <section className="section">
        <h2>Wedding Décor</h2>
        <p>
          Known for the extraordinary ability to beautify the spaces by using
          imaginations and creativity. At Wedding by Fourth Munky, we have an
          in-house team of multi-talented designers and technicians. We have our
          own production house of decorative setups and elements. We have
          inhouse inventory of world-class artificial flowers, decorative
          elements, linens and setups. We ensure that everything will be best
          and premium. Single flower bud used at your wedding will be personally
          picked from the market by our in-house floral designer. We will give
          you value for money.
        </p>
      </section>

      <section className="section">
        <h2>Testimonials</h2>
        <p>
          <strong>Fourth Munky Entertainment</strong> <br />
          Where Passion Meets Performance. At Fourth Munky Live, we take your
          events beyond imagination. From conceptualization to flawless
          execution, we bring unparalleled energy, ideas, and technology to
          every experience. “We do events because we can't imagine life without
          them.”
        </p>
      </section>

      <section className="section">
        <Link to="/portfolio" className="explore-events">
          EXPLORE OUR PORTFOLIO
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
