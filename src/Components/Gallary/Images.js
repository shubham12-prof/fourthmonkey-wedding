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
    <div className="gallery-container">
      <h1>{project.title} Gallery</h1>
      <div className="custom-gallery">
        {project.galleryImages.map((image, index) => (
          <LazyLoadImage
            key={index}
            alt={`Gallery image ${index + 1}`}
            src={image.original}
            effect="blur"
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
