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
  const handlePinterestShare = (imageUrl, imageIndex) => {
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(`${project.title} - Gallery Image ${imageIndex + 1}`)}`;
    window.open(pinterestUrl, '_blank', 'width=750,height=750');
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
            <div
              key={index}
              className="gallery-item-wrapper"
              style={{ position: 'relative' }}
            >
              <LazyLoadImage
                key={index}
                alt={`Gallery image ${index + 1}`}
                src={image.original}
                effect="blur"
                onLoad={index === 0 ? handleFirstImageLoad : undefined}
                className="gallery-item"
                wrapperClassName="gallery-item-wrapper"
              />
              <div
                className="pinterest-logo-overlay"
                onClick={() => handlePinterestShare(image.original, index)}
                style={{ cursor: 'pointer' }}
                title="Share on Pinterest"
              >
                <img
                  src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1752853775/bknbxprv7xylmig7jkw1.png"
                  alt="Pinterest"
                  className="pinterest-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;