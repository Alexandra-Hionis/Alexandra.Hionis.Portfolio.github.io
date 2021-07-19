import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import Arrow from "../components/Arrow";
import AboutHeader from "../components/AboutHeader";
import About from "../components/About";
import AboutInfo from "../components/AboutInfo";
import ProjectsHeader from "../components/ProjectsHeader";
import Projects from "../components/Projects";

function Portfolio() {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <Arrow></Arrow>
      <AboutHeader></AboutHeader>
      <About></About>
      <AboutInfo></AboutInfo>
      <ProjectsHeader></ProjectsHeader>
      <Projects></Projects>
    </div>
  );
}
export default Portfolio;
