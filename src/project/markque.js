import React from "react";

function Mark() {
  return (
    <>
      
        <marquee behavior="scroll" direction="right" scrollamount="auto">
          <h4 style={{ backgroundColor: "black", color: "whitesmoke" }}>
            * Planning * Planning * Planning * Planning * Planning * Planning *
            Planning* Planning * Planning * Planning * Planning * Planning *
            Planning * Planning
          </h4>
        </marquee>
        <marquee behavior="scroll" direction="left" scrollamount="auto">
          <h4 style={{ backgroundColor: "green", color: "white" }}>
            * Planning * Planning * Planning * Planning * Planning * Planning *
            Planning* Planning * Planning * Planning * Planning * Planning *
            Planning * Planning 
          </h4>
        </marquee>
      
    </>
  );
}

export default Mark;
