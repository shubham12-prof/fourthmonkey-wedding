import React from "react";
import ProjectCard from "../Cards/Card";
import "./Portfolio.css";
import { projects } from "../Portfolio/ProtfolioData";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="header-image">
        <h1 className="header-text">Welcome to Our Portfolio</h1>
      </div>
      <div className="project-gallery">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            galleryImages={project.galleryImages}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
