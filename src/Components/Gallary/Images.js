import React, { useState } from 'react';
import "./Images.css";
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import { projects } from "../Portfolio/Portfolio";
import { projects } from "../Portfolio/ProtfolioData";

const Images = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  if (!project) return <p>Project not found</p>;

  const openGallery = (index) => {
    setStartIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="gallery-container">
      <h1>{project.title} Gallery</h1>

      <div className="custom-gallery">
        {project.galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`Gallery click ${index + 1}`}
            className="gallery-image"
            onClick={() => openGallery(index)}
          />
        ))}
      </div>


      {isGalleryOpen && (
        <div className="fullscreen-gallery">
          <ImageGallery
            items={project.galleryImages}
            startIndex={startIndex}
            showFullscreenButton={true}
            showPlayButton={true}
            showThumbnails={true}
            onScreenChange={(isFullScreen) => {
              if (!isFullScreen) closeGallery();
            }}
          />
          <button className="close-gallery" onClick={closeGallery}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Images;
