import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ServicesIcon = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

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

  return (
    <Container>
      <div ref={ref}>
        <motion.div animate={animation}>
          <div
            className="shadow "
            style={{
              color: "#252d3f",
              border: "lightgrey solid 0.5px",
              borderRadius: "25px",
              padding: "1em",
              height: "5%",
            }}
          >
            <Row>
              <Col md={4}>
                {" "}
                <img
                  alt="icon"
                  src={process.env.PUBLIC_URL + "/images/design.png"}
                  width="100"
                  height="100"
                />
                <Col>
                  <h3 className="list list-title">Design</h3>
                </Col>
                <Col>
                  {" "}
                  <p className="list list-desc">
                    I am not a designer, but I am design savvy. I value simple
                    content structure and a clean, responsive design.{" "}
                  </p>
                </Col>
                <Col>
                  <p className="list">Things I enjoy designing:</p>
                  <p className="list">UX, UI, Websites</p>
                </Col>
                <Col>
                  <p className="list">Design Aids:</p>
                  <p className="list">HTML, CSS, JavaScript</p>
                </Col>
              </Col>
              <Col md={4}>
                {" "}
                <img
                  alt="icon"
                  src={process.env.PUBLIC_URL + "/images/compass.png"}
                  width="100"
                  height="100"
                />
                <Col>
                  <h3 className="list list-title">Front-End Developer</h3>
                </Col>
                <Col>
                  {" "}
                  <p className="list list-desc">
                    As a freelance developer, I love to code and enjoy bringing
                    client's ideas to life in the browser.{" "}
                  </p>
                </Col>
                <Col>
                  <p className="list">Languages I know:</p>
                  <p className="list">HTML, CSS, JavaScript</p>
                </Col>
                <Col>
                  <p className="list">Dev Tools:</p>
                  <p className="list">HTML, CSS, JavaScript</p>
                </Col>
              </Col>{" "}
              <Col md={4}>
                {" "}
                <img
                  alt="icon"
                  src={process.env.PUBLIC_URL + "/images/experience.png"}
                  width="100"
                  height="100"
                />
                <Col>
                  <h3 className="list list-title">Experience</h3>
                </Col>
                <Col>
                  {" "}
                  <p className="list list-desc">
                    I've gained a great skill set as a coding bootcamp graduate,
                    as well as a self-taught coder.{" "}
                  </p>
                </Col>
                <Col>
                  <p className="list">Experiences I draw from:</p>
                  <p className="list">Inspiring sites, building projects</p>
                </Col>
                <Col>
                  <p className="list">Experience:</p>
                  <p className="list">HTML, CSS, JavaScript</p>
                </Col>
              </Col>
            </Row>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default ServicesIcon;
