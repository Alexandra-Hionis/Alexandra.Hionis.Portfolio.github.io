import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { projectswp } from "./projectDataWP";
import Button from "react-bootstrap/Button";
import "./styles.css";

function ProjectsRenderedWP() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({ x: 0, transition: { duration: 0.3 } });
    }
    // Slide in from left
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Scroll down
    </Tooltip>
  );

  return (
    <Container>
      <div ref={ref}>
        {projectswp.map((project) => (
          <motion.div animate={animation}>
            <Row>
              <Col lg={6}>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <div className="project-image-container">
                    <img
                      variant="success"
                      alt="project thumbnail"
                      src={project.image}
                      className="project-thumbnail"
                    />
                  </div>
                </OverlayTrigger>
              </Col>
              <Col lg={6}>
                <div className="project-description-container">
                  <h1 className="project-name">{project.title}</h1>
                  <p className="tech-used">{project.subtitle}</p>
                  <p className="sub-title">{project.description}</p>
                  <div id="btn-space">
                    <Button
                      target="_blank"
                      className="btn-sm"
                      style={{ margin: "5px" }}
                      variant="dark"
                      href={project.link1}
                    >
                      Visit Site
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
export default ProjectsRenderedWP;
