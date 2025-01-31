import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../Portfolio/ProtfolioData";

const ImageDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Project not found!</h2>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ImageDetails;
