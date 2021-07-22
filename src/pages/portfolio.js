import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import Message from "../components/Message";
import Welcome from "../components/Welcome";
import ScrollDown from "../components/ScrollDown";

import AboutHeader from "../components/AboutHeader";
import About from "../components/About";
import AboutInfo from "../components/AboutInfo";
import AboutImage from "../components/AboutImage";
import ProjectsHeader from "../components/ProjectsHeader";
import Projects from "../components/Projects";
import { Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <VideoCarousel></VideoCarousel>
      <Message></Message>
      <Welcome></Welcome>
      <ScrollDown></ScrollDown>
      <AboutHeader></AboutHeader>
      <About></About>

      <Row style={{ textAlign: "center" }}>
        <Col md={6}>
          <AboutImage></AboutImage>
        </Col>
        <Col md={6}>
          <AboutInfo></AboutInfo>
        </Col>
        <ProjectsHeader></ProjectsHeader>
      </Row>
      <Projects></Projects>
    </>
  );
}
export default Portfolio;
