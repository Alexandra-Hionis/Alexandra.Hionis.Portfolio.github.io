import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function AboutHeader() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>About</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutHeader;
