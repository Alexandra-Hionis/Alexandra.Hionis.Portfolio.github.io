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
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    //   if parent in view, start animation
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      });
    }
    // if not in view, start another animation. Completely off screen
    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView]);

  return (
    <Container>
      <div ref={ref}>
        <Row>
          <Col>
            <motion.div animate={animation}></motion.div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutInfo;
