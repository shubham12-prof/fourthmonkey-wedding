import React, { useState, useEffect } from "react";
import "./Images.css";
import { useParams } from "react-router-dom";
import { projects } from "../Portfolio/ProtfolioData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Portfolio from "../Portfolio/Portfolio";

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
    <>
      <div className="gallery-container">
        <div>
          {project.headImageUrl && (
            <img
              src={project.headImageUrl}
              alt="Header Image"
              className="gallery-container-headImage"
            />
          )}
        </div>
        <h1>
          {project.title} Gallery <span className="yellow-line"></span>
        </h1>

        {loading && <div className="loading-indicator">Loading gallery...</div>}

        <div className="grid-gallery">
          {sortedImages.map((image, index) => (
            <LazyLoadImage
              key={index}
              alt={`Gallery image ${index + 1}`}
              src={image.original}
              effect="blur"
              onLoad={index === 0 ? handleFirstImageLoad : undefined}
              className="gallery-item"
              wrapperClassName="gallery-item-wrapper gallery-item-with-logo"
              wrapperProps={{
                'data-logo-url': 'https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750595644/osk6shpe0kkpxoaa0coc.png'
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;