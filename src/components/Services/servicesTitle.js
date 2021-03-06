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
        transition: { duration: 0.3 },
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
              <Col md={2}></Col>
              <Col md={8}>
                <h1 className="component-title">Services</h1>
                <h1 className="sub-title">
                  I will build a website for you or your small business and
                  manage it, making sure it is up to date and reliable! Check
                  out my skills below.
                </h1>
                <h1 className="sub-title">
                  I can make running your website easy! I also offer website
                  hosting, domain transfer, SEO, lighthouse, and other services.
                </h1>
                <p className="interested">
                  Interested?{" "}
                  <a href="#contact" id="collaborate-link">
                    Contact me!
                  </a>
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesTitle;
