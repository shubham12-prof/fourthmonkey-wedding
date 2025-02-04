import React from "react";
import "./Images.css";
import { useParams } from "react-router-dom";
import { projects } from "../Portfolio/ProtfolioData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Images = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  if (!project) return <p>Project not found</p>;

  return (
    <div style={{ marginTop: "5rem" }} className="gallery-container">
      <h1>
        {project.title} Gallery <span className="yellow-line"></span>
      </h1>
      <h1>{project.galleryTitle}</h1>
      <div className="grid-gallery">
        {project.galleryImages.map((image, index) => {
          const isLarge = index === 0;
          return (
            <LazyLoadImage
              key={index}
              alt={`Gallery image ${index + 1}`}
              src={image.original}
              effect="blur"
              className={`gallery-item ${isLarge ? "large" : ""} item-${
                index + 1
              }`}
              wrapperClassName={`gallery-item-wrapper ${
                isLarge ? "large" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;
