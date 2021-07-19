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
      animation.start({ x: 0, transition: { type: "slide, duration: 3" } });
    }
    // if not in view, start another animation. Completely off screen
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);
  //   useEffect hook accepts another parameter of type array and in that array you can specify what data can be monitored

  return (
    <Container>
      <Row>
        <Col lg={6}>
          {/* we want to puth parent div left off screen and let it slide in. We use x and y, so x moves it to the left when it's a negative numeber. Y translates to top when it's a negative number*/}
          <motion.div className={classes.image} animate={animation}>
            <img
              // ref={(el) => {
              //   logoItem = el;
              // }}
              alt="Alexandra Hionis"
              src={process.env.PUBLIC_URL + "/images/my-photo.JPG"}
              to="/services"
              width="100%"
              height="100%"
              className="my-photo"
            />
          </motion.div>
        </Col>

        <Col lg={6}>
          {/* we want to puth parent div left off screen and let it slide in */}
          <motion.div
            className={classes.info}
            // inside prop we give hook animation
            animate={animation}
          >
            {/* initial={{ x: "100vw" }} */}
            <h1>Web Developer</h1>
            <p>
              I am an aspiring full stack web developer, with focus on front end
              development. I love to study new code and build a more intuitive
              user experience on the web. With each project, my aim is to best
              engage my audience for an impactful user experience, both visually
              and behind the scenes.
            </p>
            <p>
              In my spare time I enjoy spending time with my girlfriend, family
              and friends. I enjoy cooking, kickboxing, photography, traveling
              and skiing. I am a part of the LGBTQIA+ community and I am always
              open to new adventures!
            </p>
          </motion.div>
        </Col>
        <div ref={ref}></div>
      </Row>
    </Container>
  );
};

export default AboutInfo;
