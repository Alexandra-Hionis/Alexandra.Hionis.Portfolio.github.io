import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./styles.css";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// import { TweenMax, Power3 } from "gsap";
// import { gsap } from "gsap";

const AboutImage = () => {
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
      animation.start({ x: "-100vw", transition: { duration: 1 } });
    }
  }, [inView]);
  //   useEffect hook accepts another parameter of type array and in that array you can specify what data can be monitored

  return (
    <Container>
      <Row>
        <Col lg={12}>
          {/* we want to puth parent div left off screen and let it slide in. We use x and y, so x moves it to the left when it's a negative numeber. Y translates to top when it's a negative number*/}
          <motion.div
            className={classes.image}
            // initial={{ x: "-100vw" }}
            animate={animation}
            // transition={{ type: "slide", duration: 2, bounce: 0.3 }}
          >
            <img
              // ref={(el) => {
              //   logoItem = el;
              // }}
              alt="Alexandra Hionis"
              src={process.env.PUBLIC_URL + "/images/myPhoto.JPG"}
              to="/services"
              width="320px"
              height="300px"
              border="3px solid black"
              // width="100%"
              // height="100%"
              className="my-photo"
            />
          </motion.div>
        </Col>
      </Row>
      <div ref={ref}></div>
    </Container>
  );
};

export default AboutImage;
