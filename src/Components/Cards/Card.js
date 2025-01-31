import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Card.css";

const ProjectCard = ({ id, title, description, imageUrl }) => {
  return (
    <Link to={`/Images/${id}`} className="view-project">
      <div className="card">
        <LazyLoadImage
          alt={title}
          src={imageUrl}
          effect="blur"
          className="card-image"
        />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
