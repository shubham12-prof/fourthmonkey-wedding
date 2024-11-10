import React from 'react';
import ProjectCard from '../Cards/Card';  
import './Portfolio.css';

const images = [
  '',
  '',
  '',
];
const projects = [
  {
    title: 'AKSHAY+TWINKLE',
    description: 'At Fourth Munky, we believe that your wedding day should be nothing short of magical.',
    imageUrl: 'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'SAIF + KAREENA',
    description: 'At Fourth Munky, we believe that your wedding day should be nothing short of magical.',
    imageUrl: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'VICKY+KATRINA',
    description: 'At Fourth Munky, we believe that your wedding day should be nothing short of magical.',
    imageUrl: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'RANBIR+ALIA',
    description: 'At Fourth Munky, we believe that your wedding day should be nothing short of magical.',
    imageUrl: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
