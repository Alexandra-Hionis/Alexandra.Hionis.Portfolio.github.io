import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ServicesTitle from "./servicesTitle";
function Services() {
  return (
    <Container>
      <ServicesTitle />
      <div className="services shadow">
        {/* <p>
          Now I can confidently say I know HTML, CSS, a decent amount of
          Javascript, React.js, Node.js, Git, Version Control, MySQL, MongoDB,
          Express and more
        </p> */}
        <Row>
          <Col md={4} className="">
            {" "}
            <img
              alt="icon"
              src={process.env.PUBLIC_URL + "/images/design.png"}
              width="100"
              height="100"
            />
          </Col>
          <Col md={4} className="border-left">
            {" "}
            <img
              alt="icon"
              src={process.env.PUBLIC_URL + "/images/developer.png"}
              width="100"
              height="100"
            />
          </Col>
          <Col md={4} className="border-left">
            {" "}
            <img
              alt="icon"
              src={process.env.PUBLIC_URL + "/images/experience.png"}
              width="100"
              height="100"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Services;
