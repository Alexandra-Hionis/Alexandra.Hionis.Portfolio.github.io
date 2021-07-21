import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";

function Arrow() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <p id="scroll-down"></p>
        </Col>
        <Col md={6}>
          <p id="scroll-down">
            For the best experience, flip your browser horizontally.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Arrow;
