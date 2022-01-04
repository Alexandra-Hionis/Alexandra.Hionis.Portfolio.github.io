import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { projects } from "./projectData";

const ProjectsTitle = () => {
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
    <Container>
      <div ref={ref} id="projects">
        <motion.div animate={animation}>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h1 className="project-title">Projects</h1>

              <h1 className="sub-title" id="projects-sub">
                {" "}
                Here are some recent and upcoming projects. Feel free to scroll
                through the images, and visit the sites!
              </h1>
            </Col>
            <Col md={2}></Col>
          </Row>
        </motion.div>
      </div>
    </Container>
  );
};

export default ProjectsTitle;
