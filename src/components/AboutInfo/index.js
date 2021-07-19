import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./styles.css";
import { useInView } from "react-intersection-observer";
// import { TweenMax, Power3 } from "gsap";
// import { gsap } from "gsap";

const AboutInfo = () => {
  // inView results in a boolean that specify if an element is in view. Ture means in view. The ref we assign to the element we want to target.
  const { ref, inView } = useInView();
  //We can tell React that our component needs to do something after it renders. the function inside the useEffect hook is called everytime the component renders. Or when the data in our component changes. So when <Col lg={6} ref={ref}> is in view, sets to true. If false, sets it to false
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
  });

  return (
    <div ref={ref}>
      <Container>
        <Row>
          <Col lg={6}>
            {/* we want to puth parent div left off screen and let it slide in. We use x and y, so x moves it to the left when it's a negative numeber. Y translates to top when it's a negative number*/}
            <motion.div
              className={classes.image}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            >
              <img
                // ref={(el) => {
                //   logoItem = el;
                // }}
                alt="Alexandra Hionis"
                src={process.env.PUBLIC_URL + "/images/my-photo.JPG"}
                to="/services"
                width="100%"
                height="100%"
                className="my-photo"
              />
            </motion.div>
          </Col>

          <Col lg={6}>
            {/* we want to puth parent div left off screen and let it slide in */}
            <motion.div
              className={classes.info}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "slide", duration: 2 }}
            >
              {/* initial={{ x: "100vw" }} */}
              <h1>Web Developer</h1>
              <p>
                I am an aspiring full stack web developer, with focus on front
                end development. I love to study new code and build a more
                intuitive user experience on the web. With each project, my aim
                is to best engage my audience for an impactful user experience,
                both visually and behind the scenes.
              </p>
              <p>
                In my spare time I enjoy spending time with my girlfriend,
                family and friends. I enjoy cooking, kickboxing, photography,
                traveling and skiing. I am a part of the LGBTQIA+ community and
                I am always open to new adventures!
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutInfo;
