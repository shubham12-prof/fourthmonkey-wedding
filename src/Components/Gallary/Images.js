import React, { useState, useEffect, useRef } from "react";
import "./Images.css";
import { useParams } from "react-router-dom";
import { projects } from "../Portfolio/ProtfolioData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Images = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  const [sortedImages, setSortedImages] = useState([]);
  const loadedImagesRef = useRef({});

  useEffect(() => {
    if (project) {
      const verticalImages = [];
      const horizontalImages = [];

      let loadedCount = 0;
      project.galleryImages.forEach((image) => {
        const img = new Image();
        img.src = image.original;
        img.onload = () => {
          const aspectRatio = img.width / img.height;
          if (aspectRatio > 1) {
            horizontalImages.push(image);
          } else {
            verticalImages.push(image);
          }

          loadedCount++;
          if (loadedCount === project.galleryImages.length) {
            setSortedImages([...verticalImages, ...horizontalImages]);
          }
        };
      });
    }
  }, [project]);

  if (!project) return <p>Project not found</p>;

  const handleImageLoad = (index) => {
    loadedImagesRef.current[index] = true;
  };

  return (
    <div className="gallery-container" style={{ marginTop: "6rem" }}>
      <h1>
        {project.title} Gallery <span className="yellow-line"></span>
      </h1>
      <h1>{project.galleryTitle}</h1>
      <div className="grid-gallery">
        {sortedImages.map((image, index) => {
          const isLarge = index === 0;
          const isLoaded = loadedImagesRef.current[index];

          return (
            <LazyLoadImage
              key={index}
              alt={`Gallery image ${index + 1}`}
              src={image.original}
              effect={isLoaded ? undefined : "blur"}
              className={`gallery-item ${isLarge ? "large" : ""} item-${index + 1}`}
              wrapperClassName={`gallery-item-wrapper ${isLarge ? "large" : ""} ${isLoaded ? "loaded" : "loading"
                }`}
              onLoad={() => handleImageLoad(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;
