// import React from "react";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
// import "./styles.css";
// import { projects } from "./projectData";

// function ProjectName() {
//   const { ref, inView } = useInView();
//   const animation = useAnimation();
//   useEffect(() => {
//     console.log("use effect hook, inView = ", inView);
//     //   if parent in view, start animation
//     if (inView) {
//       animation.start({
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 2 },
//       });
//     }
//     // if not in view, start another animation. Completely off screen
//     if (!inView) {
//       animation.start({ opacity: 0, scale: 0 });
//     }
//   }, [inView]);

//   return (
//     <div ref={ref}>
//       {projects.map((project) => (
//         <motion.div animate={animation}>
//           <div className="">
//             <h1 className="project-name">{project.title}</h1>
//             <p className="tech-used">{project.subtitle}</p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
// export default ProjectName;
