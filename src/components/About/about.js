import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import AboutTitle from "./aboutTitle";
import AboutInfo from "./aboutInfo";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    //   if parent in view, start animation
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 2 },
      });
    }
    // if not in view, start another animation. Completely off screen
    if (!inView) {
      animation.start({ opacity: 0, scale: 0, transition: { duration: 2 } });
    }
  }, [inView]);
  return (
    <div ref={ref} className="about-div" style={{ position: "", zIndex: -1 }}>
      <Container>
        <AboutTitle />
        <AboutInfo />
        <motion.div animate={animation}></motion.div>
      </Container>
    </div>
  );
};

export default About;
