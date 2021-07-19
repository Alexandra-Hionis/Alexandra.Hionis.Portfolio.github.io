import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Arrow() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <img
            alt="down arrow"
            src={process.env.PUBLIC_URL + "/images/arrow.png"}
            to="/about"
            width="50"
            height="50"
            className=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Arrow;
