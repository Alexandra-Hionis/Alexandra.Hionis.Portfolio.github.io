import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ServicesTitle from "./servicesTitle";
import ServicesIcons from "./servicesList";
function Services() {
  return (
    <Container>
      <ServicesTitle />

      <ServicesIcons />
      {/* <p>
          Now I can confidently say I know HTML, CSS, a decent amount of
          Javascript, React.js, Node.js, Git, Version Control, MySQL, MongoDB,
          Express and more
        </p> */}
    </Container>
  );
}

export default Services;
