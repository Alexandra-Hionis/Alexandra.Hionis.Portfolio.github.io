import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";

function Message() {
  return (
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4} id="message">
          <p>For the best experience, flip your mobile browser horizontally!</p>
          <div>
            <img
              alt="arrow"
              src={process.env.PUBLIC_URL + "/images/arrow-down.png"}
              width="50"
              height="50"
              paddingBottom="20%"
              id="arrow"
            />
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
export default Message;
