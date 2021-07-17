import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Portfolio from "./pages/portfolio";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { Container, H1, StyledBox } from "./Styles";

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
              <Route exact path="/" component={Portfolio} />
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

// import React, { useEffect } from "react";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Container, H1, StyledBox } from "./Styles";
// import "./App.css";

// const BoxVariants = {
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } },
//   hidden: { opacity: 0, x: 300 },
// };

// const Box = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <StyledBox
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={BoxVariants}
//     />
//   );
// };

// function App() {
//   return (
//     <Container>
//       <H1>Scroll down to see the magic 🌟 </H1>
//       <Box />
//       <Box />
//       <Box />
//       <Box />
//       <Box />
//       <Box />
//       <Box />
//     </Container>
//   );
// }

// export default App;
