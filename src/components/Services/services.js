import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import ServicesTitle from "./servicesTitle";
import ServicesList from "./servicesList";
function Services() {
  return (
    <div className="services">
      <Container>
        <ServicesTitle />

        <ServicesList />
      </Container>
    </div>
  );
}

export default Services;
