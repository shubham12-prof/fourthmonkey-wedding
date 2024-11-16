import React from 'react';
import "./Images.css"
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { projects } from "../Portfolio/Portfolio"; // Ensure the path to the projects array is correct

const Images = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  if (!project) return <p>Project not found</p>;

  return (
    <div className="gallery-container">
      <h1>{project.title} Gallery</h1>
      <ImageGallery items={project.galleryImages} />
    </div>
  );
};

export default Images;
