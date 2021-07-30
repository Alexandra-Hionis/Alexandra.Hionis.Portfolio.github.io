import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import ServicesTitle from "./servicesTitle";
import ServicesList from "./servicesList";
function Services() {
  return (
    <Container>
      <ServicesTitle />

      <ServicesList />
    </Container>
  );
}

export default Services;
