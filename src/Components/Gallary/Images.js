import React, { useState, useEffect } from "react";
import "./Images.css";
import { useParams } from "react-router-dom";
import { projects } from "../Portfolio/ProtfolioData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Images = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));
  const [sortedImages, setSortedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (project && project.galleryImages.length > 0) {
      setSortedImages(project.galleryImages);
    }
  }, [project]);

  const handleFirstImageLoad = () => {
    setLoading(false);
  };

  if (!project) return <p>Project not found</p>;

  return (
    <div className="gallery-container" style={{ marginTop: "6rem" }}>
      <h1>
        {project.title} Gallery <span className="yellow-line"></span>
      </h1>

      {loading ? (
        <div className="loading-indicator">Loading gallery...</div>
      ) : null}

      <div className={`grid-gallery ${loading ? "hidden" : ""}`}>
        {sortedImages.map((image, index) => {
          const isLarge = index === 0;
          return (
            <LazyLoadImage
              key={index}
              alt={`Gallery image ${index + 1}`}
              src={image.original}
              effect="blur"
              onLoad={index === 0 ? handleFirstImageLoad : undefined}
              className={`gallery-item ${isLarge ? "large" : ""} item-${index + 1}`}
              wrapperClassName={`gallery-item-wrapper ${isLarge ? "large" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;
