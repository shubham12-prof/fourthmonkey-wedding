import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Portfolio.css";
import { projects } from "../Portfolio/ProtfolioData";
import headerImage from "../../Images/Home.jpg";
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="header-text">Welcome to Our Portfolio</h1>
      <div className="project-gallery">
        {projects.map((project) => (
          <Link
            to={`/Images/${project.id}`}
            key={project.id}
            className="card-link"
          >
            <div className="card-portfolio">
              <LazyLoadImage
                src={project.imageUrl}
                alt="Lazy Image"
                effect="blur"
                className="card-image-portfolio"
              />
              <div className="card-content-portfolio">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
