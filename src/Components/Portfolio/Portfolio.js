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
      {/* <h2 className="header-text-portfolio">Welcome to Our Portfolio</h2> */}
      <section className="header-portfolio">
        <div className="header-text">
          Crafting <span className="word-highlight">timeless love stories</span> with breathtaking designs, seamless planning, and unforgettable moments. From intimate gatherings to grand celebrations, we bring your dream wedding to life with <span className="word-highlight">elegance, luxury, and perfection</span>. Take a moment to explore what we've created — a world apart, designed just for them.
        </div>
      </section>
      <div className="card-link">
        {projects.map((project) => (
          <Link
            to={`/Images/${project.id}`}
            key={project.id}
            className="card-image-link"
          >
            <div className="card-portfolio">
              <LazyLoadImage
                src={getImageUrl(project.imageUrl)}
                alt={project.title}
                effect="blur"
                className="card-image-portfolio"
                width="420"
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
