import React from 'react';
import "./Highlights.css"
import { Link } from 'react-router-dom';
const images = [
  'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function ImageBox() {
  return (
    <div className="container">
        {/* <h3>
          Take time to see our previous weddings to understand …………………………
        </h3> */}
      <h2 className="header">HIGHLIGHTS</h2>
      <div data-aos="zoom-in"  className="image-box">
        {images.map((src, index) => (
          <img key={index} src={src} alt="pictures" className="image" />
        ))}
      </div>
      <button className="view-all-button"><Link to = "/portfolio"> VIEW ALL PROJECTS</Link></button>
    </div>
  );
}

export default ImageBox;
