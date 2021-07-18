import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
// import Portfolio from "./pages/portfolio";
import { useRef } from "react";
import { useIntersection } from "react-use";
// Animation library
import gsap from "gsap";

import VideoCarousel from "./components/VideoCarousel";
import AboutHeader from "./components/AboutHeader";
import About from "./components/About";
import ProjectsHeader from "./components/ProjectsHeader";
import Projects from "./components/Projects";
function Wrapper(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="background-color">
          <Switch>
            <Wrapper>
              <Route exact path="/" />
              <VideoCarousel></VideoCarousel>
              <AboutHeader></AboutHeader>
              <About></About>
              <ProjectsHeader></ProjectsHeader>
              <Projects></Projects>
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
