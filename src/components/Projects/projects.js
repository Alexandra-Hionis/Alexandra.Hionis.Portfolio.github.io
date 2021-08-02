import React from "react";
import { Container } from "react-bootstrap";
import ProjectsTitle from "./projectsTitle";
import ProjectsRendered from "./projectsRendered";

function Projects() {
  return (
    <div className="projects">
      <Container>
        <ProjectsTitle />
        <ProjectsRendered />
      </Container>
    </div>
  );
}

export default Projects;
