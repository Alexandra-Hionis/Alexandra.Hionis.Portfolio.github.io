import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { projects } from "./projectData";
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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Scroll down
    </Tooltip>
  );

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <div className="project-image-container">
            <img
              variant="success"
              alt="project thumbnail"
              src={projects.image}
              className="project-thumbnail d-block w-100"
            />
          </div>
        </OverlayTrigger>
      </motion.div>
    </div>
  );
}
export default ProjectThumbnail;
