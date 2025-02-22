import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>
        We are working on it! Else, you can explore our
        <span style={{ fontSize: "2rem", color: "white", fontStyle: "italic" }}>
          {" "}
          Weddings by Fourth Munkey{" "}
        </span>
        page.
      </p>
      <Link to="/WeddingHome" className="explore-button">
        Explore Wedding Page
      </Link>
    </div>
  );
};

export default NotFound;
