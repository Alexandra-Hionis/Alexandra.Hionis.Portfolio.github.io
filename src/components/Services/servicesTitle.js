import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ServicesTitle = () => {
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
    <div id="services">
      <Container>
        <motion.div animate={animation}>
          <Row>
            <Col md={12}>
              <h1 className="services-title">Services</h1>
              <h1 className="sub-title">Need a website?</h1>
              <p>I build and code websites for you or your small business!</p>
            </Col>
          </Row>
        </motion.div>
        <div ref={ref}></div>
      </Container>
    </div>
  );
};

export default ServicesTitle;
