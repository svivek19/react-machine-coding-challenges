import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      Projects
      <div style={{ padding: "30px 0" }}>
        <p>-----------------------</p>
        <Link to={"/projects/1"}>more details</Link>
      </div>
    </div>
  );
};

export default Projects;
