import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./styles.css";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// import { TweenMax, Power3 } from "gsap";
// import { gsap } from "gsap";

const AboutInfo = () => {
  // inView results in a boolean that specify if an element is in view. Ture means in view. The ref we assign to the element we want to target.
  const { ref, inView } = useInView();
  const animation = useAnimation();
  // here we combine the 3 hooks together useAnimation, useEffect and useInView
  //We can tell React that our component needs to do something after it renders. the function inside the useEffect hook is called everytime the component renders. Or when the data in our component changes. So when <Col lg={6} ref={ref}> is in view, sets to true. If false, sets it to false
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    //   if parent in view, start animation
    if (inView) {
      animation.start({ x: 0, transition: { duration: 1 } });
    }
    // if not in view, start another animation. Completely off screen
    if (!inView) {
      animation.start({ x: "100vw" });
    }
  }, [inView]);
  //   useEffect hook accepts another parameter of type array and in that array you can specify what data can be monitored

  return (
    <Container>
      <div ref={ref}>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            {/* we want to puth parent div left off screen and let it slide in */}
            <motion.div
              className="info-div"
              // inside prop we give hook animation
              // initial={{ x: "100vw" }}
              animate={animation}
              // transition={{ type: "slide", duration: 2, bounce: 0.3 }}
            >
              <p id="about-me">
                I am a{" "}
                <span className="about-info">Front End Web Developer</span>{" "}
                living in Philadelphia, PA. I have 1 year experience building
                20+ projects and gained great skills in{" "}
                <span className="about-info">
                  HTML5, CSS3, JAVASCRIPT, REACT.JS, NODE.JS, BOOTSTRAP,{" "}
                </span>{" "}
                and more! I have a serious passion for coding and bringing ideas
                to life. If you're looking for a{" "}
                <span className="about-info">
                  simple and beauftiful website,{" "}
                </span>{" "}
                you've found the right place! And if you're looking for a{" "}
                <span className="about-info">
                  quietly confident and naturally curious developer,
                </span>{" "}
                you've found one!
              </p>
            </motion.div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutInfo;
