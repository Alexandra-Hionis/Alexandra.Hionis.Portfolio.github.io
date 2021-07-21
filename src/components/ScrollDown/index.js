import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./styles.css";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// import { TweenMax, Power3 } from "gsap";
// import { gsap } from "gsap";

const Welcome = () => {
  // inView results in a boolean that specify if an element is in view. Ture means in view. The ref we assign to the element we want to target.
  const { ref, inView } = useInView();
  const animation = useAnimation();
  // here we combine the 3 hooks together useAnimation, useEffect and useInView
  //We can tell React that our component needs to do something after it renders. the function inside the useEffect hook is called everytime the component renders. Or when the data in our component changes. So when <Col lg={6} ref={ref}> is in view, sets to true. If false, sets it to false
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    //   if parent in view, start animation
    if (inView) {
      animation.start({ y: 0, transition: { duration: 3 } });
    }
    // if not in view, start another animation. Completely off screen
    if (!inView) {
      animation.start({ y: "90vw" });
    }
  }, [inView]);
  //   useEffect hook accepts another parameter of type array and in that array you can specify what data can be monitored

  //   return (
  //     <Container>
  //       <Row>
  //         <Col lg={12}>
  //           {/* we want to puth parent div left off screen and let it slide in */}
  //           <motion.div className={classes.info} animate={animation}>
  //             <h1 style={{ fontSize: "30px" }}>
  //               <span className="span">w</span>
  //               <span className="span">e</span>
  //               <span className="span">l</span>
  //               <span className="span">c</span>
  //               <span className="span">o</span>
  //               <span className="span">m</span>
  //               <span className="span">e</span>
  //             </h1>
  //             <h1>Scroll DOWN</h1>
  //           </motion.div>
  //         </Col>
  //       </Row>
  //       <div ref={ref}></div>
  //     </Container>
  //   );
  return (
    <Container>
      <div ref={ref}>
        <Row>
          <Col lg={12} style={{ marginTop: "40px" }}>
            {/* we want to puth parent div left off screen and let it slide in */}
            <motion.div className={classes.info} animate={animation}>
              {/* <h1 style={{ fontSize: "30px" }}>
              <span className="span">w</span>
              <span className="span">e</span>
              <span className="span">l</span>
              <span className="span">c</span>
              <span className="span">o</span>
              <span className="span">m</span>
              <span className="span">e</span>
            </h1>
            <h1>Scroll DOWN</h1> */}
              <div className="">
                <h1 className="box one">scroll down for more!</h1>
                {/* <div className="box two">ease-in</div>
                <div className="box three">ease-out</div> */}
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Welcome;
