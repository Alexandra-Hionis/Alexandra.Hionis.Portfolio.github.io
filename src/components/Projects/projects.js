import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProjectThumbnail from "./projectThumbnail";
import ProjectDescription from "./projectDesc";
import ProjectsTitle from "./projectsTitle";
import ProjectName from "./projectName";
import ProjectButtons from "./projectButtons";
function Projects() {
  return (
    <div className="projects">
      <Container>
        <ProjectsTitle />
        <Row>
          <Col lg={6}>
            <ProjectThumbnail />
          </Col>
          <Col lg={6}>
            <ProjectName />
            <ProjectDescription />
            <ProjectButtons />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
