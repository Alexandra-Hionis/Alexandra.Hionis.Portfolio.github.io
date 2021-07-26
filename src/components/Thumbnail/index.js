import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "./styles.css";

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to="">
        <div className="project-image">
          <img src="" alt="Project Image" />
        </div>
        <div className="project-title">""</div>
        <div className="project-category">""</div>
      </Link>
    </div>
  );
}

export default Thumbnail;

import React from "react";
import "./styles.css";

import { Container, Row, Col } from "react-bootstrap";

function ServicesList() {
  // Create and array
  const serviceInfo = [
    {
      image: "/images/resume.png",
      description: "Resume writing and development, and personal branding",
    },
    {
      image: "/images/pencil.png",
      description:
        "Help with college essays and personal statements, including topic selection, formatting, structure, and content",
    },
    {
      image: "/images/grad-cap.png",
      description:
        "Assistance with college applications and guidance on the college application process as a whole",
    },
    {
      image: "/images/dollarsign.png",
      description:
        "Understanding basic financial aid options and FAFSA overview",
    },
    {
      image: "/images/calendar.png",
      description:
        "Scheduling college visits, what to expect and things to look out for",
    },
    {
      image: "/images/check.png",
      description:
        "Sending AP and Dual Enrollment scores to different college options",
    },
    {
      image: "/images/linkedin.png",
      description:
        "LinkedIn assistance. Including professional development skills on how",
    },
    {
      image: "/images/start.png",
      description:
        "We will tackle any other related issues or topics depending on the situation; if you do not see a service provided - please inquire!",
    },
  ];

  const renderGrid = (service, index) => {
    return (
      <Container>
        <div className="services-grid shadow rounded login-wrap-div">
          {/* Top row */}
          <Row key={index}>
            <Col sm={1} className="icon-border"></Col>

            {/* Service L */}
            <Col sm={5} className="description-border">
              <Row>
                <Col sm={4}>
                  <img
                    alt="icon"
                    src={service.image}
                    width="80px"
                    height="80px"
                  />
                </Col>
                <Col sm={8} className="service-description-L">
                  {service.description}
                </Col>
              </Row>
            </Col>
            {/* Service R */}
            <Col sm={5} className="description-border">
              <Row>
                <Col sm={4}>
                  <img
                    alt="icon"
                    src={service.image}
                    width="80px"
                    height="80px"
                  />
                </Col>
                <Col sm={8} className="service-description-R">
                  {service.description}
                </Col>
              </Row>
            </Col>

            <Col sm={1} className="description-border"></Col>
          </Row>
        </div>
      </Container>
    );
  };
  return <div className="services">{serviceInfo.map(renderGrid)}</div>;
}

export default ServicesList;

// {/* <Container>
//   <div className="services-grid shadow rounded login-wrap-div">
//     {/* Top row */}
//     <Row>
//       <Col sm={1} className="icon-border"></Col>

//       {/* Service #1 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="resume icon"
//               src={process.env.PUBLIC_URL + "/images/resume.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>
//             Resume writing and development, and personal branding
//           </Col>
//         </Row>
//       </Col>
//       {/* Service #2 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="pencil icon"
//               src={process.env.PUBLIC_URL + "/images/pencil.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>

//             Help with college essays and personal statements, including topic
//             selection, formatting, structure, and content
//           </Col>
//         </Row>
//       </Col>

//       <Col sm={1} className="description-border"></Col>
//     </Row>
//     {/* Second Row */}
//     <Row>
//       <Col sm={1} className="icon-border"></Col>

//       {/* Service #3 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="graduation cap icon"
//               src={process.env.PUBLIC_URL + "/images/grad-cap.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>
//             Assistance with college applications and guidance on the college
//             application process as a whole{" "}
//           </Col>
//         </Row>
//       </Col>
//       {/* Service #4 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="dollar sign icon"
//               src={process.env.PUBLIC_URL + "/images/dollarsign.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>
//             Understainding basic financial aid options and FAFSA overview
//           </Col>
//         </Row>
//       </Col>

//       <Col sm={1} className="description-border"></Col>
//     </Row>

//     {/* Third Row */}
//     <Row>
//       <Col sm={1} className="icon-border"></Col>

//       {/* Service #5 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="calender icon"
//               src={process.env.PUBLIC_URL + "/images/calender.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>
//             Scheduling college visits, what to expect and things to look out for
//           </Col>
//         </Row>
//       </Col>
//       {/* Service #6 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="checkmark icon"
//               src={process.env.PUBLIC_URL + "/images/check.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>
//             Sending AP and Dual Enrollment scores to different college options
//           </Col>
//         </Row>
//       </Col>

//       <Col sm={1} className="description-border"></Col>
//     </Row>

//     {/* Fourth Row */}
//     <Row>
//       <Col sm={1} className="icon-border"></Col>

//       {/* Service #7 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="LinkedIn icon"
//               src={process.env.PUBLIC_URL + "/images/linkedin.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>
//             LinkedIn assistance. Including profesional devlopment skills on how
//             to network and connect!
//           </Col>
//         </Row>
//       </Col>
//       {/* Service #8 */}
//       <Col sm={5} className="description-border">
//         <Row>
//           <Col sm={4}>
//             <img
//               alt="star icon"
//               src={process.env.PUBLIC_URL + "/images/start.png"}
//               width="80px"
//               height="80px"
//             />
//           </Col>
//           <Col sm={8}>
//             We will tackle any other related issues or topics depending on the
//             situation; if you do not see a service provided - please inquire!
//           </Col>
//         </Row>
//       </Col>

//       <Col sm={1} className="description-border"></Col>
//     </Row>
//   </div>
// </Container>; */}

// import React from "react";
// import "./styles.css";
// import { Container, Row, Col } from "react-bootstrap";

// function ServicesList() {
//   return (
//     <Container>
//       <div className="services-table shadow rounded login-wrap-div">
//         {/* Top row */}
//         <Row>
//           <Col sm={1} className="icon-border"></Col>

//           {/* Service #1 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="resume icon"
//                   src={process.env.PUBLIC_URL + "/images/resume.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 Resume writing and development, and personal branding
//               </Col>
//             </Row>
//           </Col>
//           {/* Service #2 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="pencil icon"
//                   src={process.env.PUBLIC_URL + "/images/pencil.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 Help with college essays and personal statements, including
//                 topic selection, formatting, structure, and content
//               </Col>
//             </Row>
//           </Col>

//           <Col sm={1} className="description-border"></Col>
//         </Row>
//         {/* Second Row */}
//         <Row>
//           <Col sm={1} className="icon-border"></Col>

//           {/* Service #3 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="graduation cap icon"
//                   src={process.env.PUBLIC_URL + "/images/grad-cap.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 Assistance with college applications and guidance on the college
//                 application process as a whole{" "}
//               </Col>
//             </Row>
//           </Col>
//           {/* Service #4 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="dollar sign icon"
//                   src={process.env.PUBLIC_URL + "/images/dollarsign.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 Understainding basic financial aid options and FAFSA overview
//               </Col>
//             </Row>
//           </Col>

//           <Col sm={1} className="description-border"></Col>
//         </Row>

//         {/* Third Row */}
//         <Row>
//           <Col sm={1} className="icon-border"></Col>

//           {/* Service #5 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="calender icon"
//                   src={process.env.PUBLIC_URL + "/images/calender.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 Scheduling college visits, what to expect and things to look out
//                 for
//               </Col>
//             </Row>
//           </Col>
//           {/* Service #6 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="checkmark icon"
//                   src={process.env.PUBLIC_URL + "/images/check.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 Sending AP and Dual Enrollment scores to different college
//                 options
//               </Col>
//             </Row>
//           </Col>

//           <Col sm={1} className="description-border"></Col>
//         </Row>

//         {/* Fourth Row */}
//         <Row>
//           <Col sm={1} className="icon-border"></Col>

//           {/* Service #7 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="LinkedIn icon"
//                   src={process.env.PUBLIC_URL + "/images/linkedin.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 LinkedIn assistance. Including profesional devlopment skills on
//                 how to network and connect!
//               </Col>
//             </Row>
//           </Col>
//           {/* Service #8 */}
//           <Col sm={5} className="description-border">
//             <Row>
//               <Col sm={4}>
//                 <img
//                   alt="star icon"
//                   src={process.env.PUBLIC_URL + "/images/start.png"}
//                   width="80px"
//                   height="80px"
//                 />
//               </Col>
//               <Col sm={8}>
//                 We will tackle any other related issues or topics depending on
//                 the situation; if you do not see a service provided - please
//                 inquire!
//               </Col>
//             </Row>
//           </Col>

//           <Col sm={1} className="description-border"></Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default ServicesList;
