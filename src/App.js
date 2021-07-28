import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
// import Portfolio from "./pages/portfolio";
import VideoCarousel from "./components/Home/video-background";
import AboutHeader from "./components/AboutHeader";
import About from "./components/About";
import AboutInfo from "./components/AboutInfo";
import AboutImage from "./components/AboutImage";
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
              <Route exact path="/" component={VideoCarousel} />
              {/* <VideoCarousel></VideoCarousel> */}

              <AboutHeader></AboutHeader>
              <About></About>

              <AboutImage></AboutImage>

              <AboutInfo></AboutInfo>

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
