


import React from 'react';
import './Section.css'; 

const Section = () => {
  return (
    <div className="section-container">
      <div className="text-content">
        <section className="hero">
          <h1>Expand Your Business Using Our Mind</h1>
          <br></br>
          <p>Work with talented people who provide quality services</p>
        
          <button style={{backgroundColor:"#5F9EA0",borderRadius:"5px"}}>Free Estimation</button>
          <br></br>
          <br></br>
        
          <h4 style={{backgroundColor:"white",Color:"5F9EA0"}}>Ready to build Business <img src='./arrow.png' alt='' width='20px'/> Send Us a Message</h4>
        </section>
      </div>
      <div className="image-content">
        <section>
          <img src='./working.png' alt='Working' />
        </section>
      </div>
    </div>
  );
}

export default Section;
