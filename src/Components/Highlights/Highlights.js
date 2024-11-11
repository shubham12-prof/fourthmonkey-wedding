import React from 'react';
import "./Highlights.css"
const images = [
  'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function ImageBox() {
  const handleViewAllProjects = () => {
    alert("View All Projects clicked!");
  };

  return (
    <div className="container">
        {/* <h3>
          Take time to see our previous weddings to understand …………………………
        </h3> */}
      <h2 className="header">HIGHLIGHTS</h2>
      <div data-aos="zoom-in"  className="image-box">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="image" />
        ))}
      </div>
      <button className="view-all-button" onClick={handleViewAllProjects}>VIEW ALL PROJECTS</button>
    </div>
  );
}

export default ImageBox;
