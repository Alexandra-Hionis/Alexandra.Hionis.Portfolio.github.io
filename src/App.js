import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
// import Portfolio from "./pages/portfolio";
import Home from "./components/Home/video-background";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { Accessibility } from "accessibility/src/main";

window.addEventListener(
  "load",
  function () {
    new Accessibility();
  },
  false
);

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
              <Route exact path="/" component={Home} />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer />
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
