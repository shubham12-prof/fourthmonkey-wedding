import React from "react";
import "./WeddingPlanning.css";
import { FaHeart, FaPalette, FaMusic } from "react-icons/fa";

const WeddingPlanning = () => {
  const services = [
    {
      icon: <FaHeart size={50} color="#e91e63" />,
      title: "Complete Wedding Planning",
      description:
        "From start to finish, we handle every detail of your dream wedding, ensuring a stress-free and unforgettable experience.",
    },
    {
      icon: <FaPalette size={50} color="#ff9800" />,
      title: "Concept Planning & Decor Designing",
      description:
        "Our expert designers bring your vision to life with unique concepts and breathtaking decorations, making your event truly special.",
    },
    {
      icon: <FaMusic size={50} color="#3f51b5" />,
      title: "Entertainment Planning & Management",
      description:
        "We organize top-tier entertainment, from live performances to DJ setups, ensuring your guests have a fantastic time.",
    },
  ];

  return (
    <div className="wedding-planning-container">
      {services.map((service, index) => (
        <div key={index} className="card">
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button className="learn-more">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default WeddingPlanning;
