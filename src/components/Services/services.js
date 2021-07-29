import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ServicesTitle from "./servicesTitle";
function Services() {
  return (
    <Container>
      <ServicesTitle />
      <div className="services shadow rounded">
        {/* <p>
          Now I can confidently say I know HTML, CSS, a decent amount of
          Javascript, React.js, Node.js, Git, Version Control, MySQL, MongoDB,
          Express and more
        </p> */}
        <Row>
          <Col md={4}>
            {" "}
            <img
              alt="icon"
              src={process.env.PUBLIC_URL + "/images/design.png"}
              to="/services"
              width="100"
              height="100"
              //   className="d-inline-block
              // align-top"
            />
          </Col>
          <Col md={4}>
            {" "}
            <img
              alt="icon"
              src={process.env.PUBLIC_URL + "/images/developer.png"}
              to="/services"
              width="100"
              height="100"
              //   className="d-inline-block
              // align-top"
            />
          </Col>
          <Col md={4}>
            {" "}
            <img
              alt="icon"
              src={process.env.PUBLIC_URL + "/images/responsive.png"}
              to="/services"
              width="100"
              height="100"
              //   className="d-inline-block
              // align-top"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Services;
