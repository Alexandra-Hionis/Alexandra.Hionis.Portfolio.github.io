import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function ProjectsHeader() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Projects</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectsHeader;
