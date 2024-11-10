import React from 'react';
import './Card.css';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="view-project">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
