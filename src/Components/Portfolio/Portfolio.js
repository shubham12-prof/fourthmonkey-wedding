import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Portfolio.css";
import { projects } from "../Portfolio/ProtfolioData";

const Portfolio = () => {
  const getImageUrl = (url) => {
    return url.match(/\.(png|jpg)$/i)
      ? url.replace(/\.(png|jpg)$/i, ".webp")
      : url;
  };

  useEffect(() => {
    const preloadImages = projects.map((project) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = getImageUrl(project.imageUrl);
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages).catch((err) =>
      console.error("Image preload error:", err)
    );
  }, []);

  return (
    <div className="portfolio-container">
      <h1 className="header-text">Welcome to Our Portfolio</h1>
      <div className="card-link">
        {projects.map((project) => (
          <Link
            to={`/Images/${project.id}`} 
            key={project.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card-portfolio">
              <LazyLoadImage
                src={getImageUrl(project.imageUrl)}
                alt={project.title}
                effect="blur"
                className="card-image-portfolio"
                width="400"
                height="400"
                loading="eager"
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
