import React from "react";

import "./styles.css";

import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
      className="Typewriter__wrapper Typewriter__cursor"
      options={{
        strings: ["I bring websites to life."],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
export default Type;
