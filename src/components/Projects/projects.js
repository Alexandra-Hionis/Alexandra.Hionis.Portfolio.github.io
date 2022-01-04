import React from "react";
import { Container } from "react-bootstrap";
import ProjectsTitle from "./projectsTitle";
import ProjectsRendered from "./projectsRendered";
import ProjectsRenderedWP from "./projectsRenderedWP";

function Projects() {
  return (
    <div className="projects">
      <Container>
        <ProjectsTitle />
        <ProjectsRendered />
        <ProjectsRenderedWP />
      </Container>
    </div>
  );
}

export default Projects;
