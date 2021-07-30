import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";

function ProjectThumbnail() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({ x: 0, transition: { duration: 1 } });
    }
    // Slide in from left
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <Row>
          <Col ms={6}>
            <div className="project-image-container">
              <img
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/gbkt.png"}
                className="project-thumbnail"
              />
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
}
export default ProjectThumbnail;
