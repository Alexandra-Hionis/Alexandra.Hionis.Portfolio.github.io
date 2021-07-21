import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import Welcome from "../components/Welcome";
import Arrow from "../components/Arrow";
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
      <Arrow></Arrow>
      <Welcome></Welcome>
      <br></br>

      <AboutHeader></AboutHeader>
      <About></About>

      <Row>
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
