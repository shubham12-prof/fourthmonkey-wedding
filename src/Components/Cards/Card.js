import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const ProjectCard = ({ id, title, description, imageUrl }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/Images/${id}`} className="view-project">
          View Project
        </Link>  
      </div>
    </div>
  );
};

export default ProjectCard;
