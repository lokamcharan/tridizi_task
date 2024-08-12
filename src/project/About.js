import React from "react";
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <section className="image-section">
        <img src="./business1.jpeg" alt="Business" style={{ width: '500px', height:"500px"}}/>
      </section>
      <section className="text-section">
        <h1>About Meticulous </h1>
        <h1>Business Plans</h1>
        <p>
          As the saying goes "A Planned Fool will always defeat the unplanned wise" Plan your business by the best reports provide by us.
          Being the best organization for generating effective business reports,we are confined to the success of our brands.
          At MBP we take the huge responsibility of analyzing the brands keenly at every stage of development ranging from pre-lunch to the post-lunch of brands.
        </p>
      </section>
    </div>
  );
}

export default About;
