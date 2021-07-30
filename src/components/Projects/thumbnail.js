import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "./styles.css";

function Thumbnail(props) {
  return (
    <div className="project-image-container">
      <img className="project-image" alt="Project Image" />
    </div>
  );
}

export default Thumbnail;

// div.project-image-container {
//   width: 100%;
//   max-height: 300px;
//   overflow-y: scroll;
// }

// img.project-image {
//   width: 100%;
// }
