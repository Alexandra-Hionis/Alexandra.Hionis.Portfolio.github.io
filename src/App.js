import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function Wrapper(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Home></Home>
      </Wrapper>
    </div>
  );
}

export default App;
