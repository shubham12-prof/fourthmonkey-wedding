import React from "react";
import "./Images.css";
import { useParams } from "react-router-dom";
import { projects } from "../Portfolio/ProtfolioData";

const Images = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  if (!project) return <p>Project not found</p>;

  return (
    <div className="gallery-container">
      <h1>{project.title} Gallery</h1>

      <div className="custom-gallery">
        {project.galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`Gallery image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
