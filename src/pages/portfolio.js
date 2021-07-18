import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import AboutHeader from "../components/AboutHeader";
import About from "../components/About";
import ProjectsHeader from "../components/ProjectsHeader";
import Projects from "../components/Projects";

function Portfolio() {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <AboutHeader></AboutHeader>
      <About></About>
      <ProjectsHeader></ProjectsHeader>
      <Projects></Projects>
    </div>
  );
}
export default Portfolio;
