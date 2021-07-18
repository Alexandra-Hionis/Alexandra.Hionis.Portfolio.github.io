import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import AboutHeader from "../components/AboutHeader";
import About from "../components/About";
import ProjectsHeader from "../components/ProjectsHeader";
import Projects from "../components/Projects";

function Portfolio() {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <AboutHeader></AboutHeader>
      <About></About>
      <ProjectsHeader></ProjectsHeader>
      <Projects></Projects>
    </div>
  );
}
export default Portfolio;

// import React from "react";
// import { useEffect } from "react";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import VideoCarousel from "../components/VideoCarousel";
// import AboutHeader from "../components/AboutHeader";
// import About from "../components/About";
// import { Container, H1, StyledBox } from "../Styles";

// const BoxVariants = {
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } },
//   hidden: { opacity: 0, x: 300 },
// };

// const Box = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <StyledBox
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={BoxVariants}
//     />
//   );
// };
// function Portfolio() {
//   return (
//     <div>
//       <VideoCarousel></VideoCarousel>
//       <AboutHeader></AboutHeader>
//       <About></About>
//       <Container>
//         <H1>Scroll down to see the magic 🌟 </H1>
//         <Box />
//         <Box />
//         <Box />
//         <Box />
//         <Box />
//         <Box />
//         <Box />
//       </Container>
//     </div>
//   );
// }
// export default Portfolio;
