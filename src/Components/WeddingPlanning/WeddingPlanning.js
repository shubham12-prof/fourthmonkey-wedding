import React from "react";
import "./WeddingPlanning.css";
import { FaRing, FaCameraRetro, FaMusic, FaBirthdayCake } from "react-icons/fa";

const services = [
  {
    icon: <FaRing size={36} color="#d81b60" />,
    title: "Complete Wedding Planning",
    desc: "From start to finish, we handle every detail of your dream wedding, ensuring a stress-free and unforgettable experience.",
  },
  {
    icon: <FaCameraRetro size={36} color="#8e24aa" />,
    title: "Concept Planning & Decor Designing",
    desc: "Our expert designers bring your vision to life with unique concepts and breathtaking decorations, making your event truly special.",
  },
  {
    icon: <FaMusic size={36} color="#3949ab" />,
    title: "Entertainment Planning & Management",
    desc: "We organize top-tier entertainment, from live performances to DJ setups, ensuring your guests have a fantastic time.",
  },
];

const WeddingServices = () => {
  return (
    <section className="wedding-services">
      <h2 data-aos="zoom-in" className="section-title">Our Services</h2>
      <p data-aos="zoom-in" className="section-subtitle">Crafted with love, delivered with perfection.</p>
      <div className="services-grid" >
        {services.map((service, idx) => (
          <div data-aos="flip-left" className="service-card" key={idx}>
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingServices;
