import React from 'react';
import ProjectCard from '../Cards/Card';  
import './Portfolio.css';

const projects = [
  { title: 'AKSHAY+TWINKLE', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg' },
  { title: 'SAIF + KAREENA', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg' },
  { title: 'VICKY+KATRINA', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg' },
  { title: 'RANBIR+ALIA', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg' },
  { title: 'AKSHAY+TWINKLE', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg' },
  { title: 'SAIF + KAREENA', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg' },
  { title: 'VICKY+KATRINA', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg' },
  { title: 'RANBIR+ALIA', description: 'Your wedding day should be magical.', imageUrl: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg' },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="header-image">
        <h1 className="header-text">Welcome to Our Portfolio</h1>
      </div>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
