import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProjectThumbnail from "./projectThumbnail";
import ProjectDescription from "./projectDesc";
import ProjectsTitle from "./projectsTitle";
import ProjectName from "./projectName";

function Projects() {
  return (
    <div className="projects">
      <Container>
        <ProjectsTitle />
        <Row>
          <Col md={6}>
            <ProjectThumbnail />
          </Col>
          <Col md={6}>
            <ProjectName />
            <ProjectDescription />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
