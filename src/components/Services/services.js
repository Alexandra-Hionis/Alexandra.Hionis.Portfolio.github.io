import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import ServicesTitle from "./servicesTitle";
import ServicesIcons from "./servicesList";
function Services() {
  return (
    <Container>
      <ServicesTitle />

      <ServicesIcons />
    </Container>
  );
}

export default Services;
