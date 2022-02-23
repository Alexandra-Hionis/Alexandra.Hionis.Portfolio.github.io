import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./styles.css";

function Navigation() {
  return (
    <Navbar
      className="nav-bar fixed-top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            to="/services"
            width="50"
            height="50"
            className="d-inline-block
          align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle id="nav-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <Nav.Link
              target="_blank"
              href="https://www.dropbox.com/s/w3earkicd58buvy/Resume-Coding.docx?dl=0"
              download
            >
              Resume
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#services">
              <span id="services-nav-link">Services</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
