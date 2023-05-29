import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import "./Projects.css";
import { data } from "../../Components/ProjectItem/ProjectItemData";
import { moreData } from "../../Components/ProjectItem/ProjectItemData";
import ProjectItem from "../../Components/ProjectItem/ProjectItem1";

function Projects() {
  const [moreProjects, setMoreProjects] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setMoreProjects(() => !moreProjects);
  };

  return (
    <div className={"projects"} id="projects">
      <Container className="projects-cont">
        <div className="projects-content-wrapper">
          <div className="projects-header">
            <h1>
              My <tag className="dot">Story</tag>
            </h1>
          </div>
          <ProjectItem />
        </div>
        <a href="#projects" onClick={handleClick} className="more-btn">
          {!moreProjects ? "More" : "Less"}
        </a>
      </Container>
    </div>
  );
}

export default Projects;
