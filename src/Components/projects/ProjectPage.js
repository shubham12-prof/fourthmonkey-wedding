import React from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProjectPage = () => {
  const { projectId } = useParams();

  const images = [
    `${process.env.PUBLIC_URL}/projects/${projectId}/image1.jpg`,
    `${process.env.PUBLIC_URL}/projects/${projectId}/image2.jpg`,
    `${process.env.PUBLIC_URL}/projects/${projectId}/image3.jpg`,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="project-gallery-page">
      <h2>Project Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container-page">
            <img src={image} alt={`Project ${projectId} - ${index + 1}`} className="carousel-image-page" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectPage;
