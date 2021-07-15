import React from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./styles.css";

function Navigation() {
  return (
    <Navbar className="nav-bar" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/logo-ah.png"}
            to="/services"
            width="50"
            height="50"
            className="d-inline-block
          align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#services">
              <span id="services-nav-link">Services</span>
            </Nav.Link>

            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
