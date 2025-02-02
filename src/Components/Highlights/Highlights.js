import React from "react";
import "./Highlights.css";
import { Link } from "react-router-dom";
const images = [
  "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738349280/z4qn0uqrpmefibcflwi8.jpg",
  "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738334064/yfu6fy9fhqvw77zez1yx.webp",
  "https://res.cloudinary.com/dmj6ur8sm/image/upload/c_fill,w_300,h_400/v1738349281/wnvfdaizzfwh25ewnghx.jpg",
];

function ImageBox() {
  return (
    <div className="container">
      {/* <h3>
          Take time to see our previous weddings to understand …………………………
        </h3> */}
      <h2 style={{ color: "#FEDE00", fontSize: "3rem" }} className="header">
        HIGHLIGHTS
      </h2>
      <div data-aos="zoom-in" className="image-box">
        {images.map((src, index) => (
          <img key={index} src={src} alt="pictures" className="image" />
        ))}
      </div>
      <button className="view-all-button">
        <Link to="/portfolio"> VIEW ALL PROJECTS</Link>
      </button>
    </div>
  );
}

export default ImageBox;
