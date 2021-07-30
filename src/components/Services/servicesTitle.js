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
        transition: { duration: 2 },
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
        <div ref={ref}>
          <motion.div animate={animation}>
            <Row>
              <Col md={12}>
                <h1 className="services-title">Services</h1>
                <h1 className="sub-title">
                  I will build websites for you or your small business! Check
                  out my skills below.
                </h1>
                <p className="interested">
                  Interested?{" "}
                  <a href="#contact" id="collaborate-link">
                    Let's colaborate!
                  </a>
                </p>
              </Col>
            </Row>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesTitle;
