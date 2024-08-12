import React from 'react';
import './working.css'; // Import the CSS file for styling

function Working() {
  return (
    <div className="working-container">
      <section className="text-section1">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="image-section">
        <img src='./group.jpeg' alt='Group' style={{ width: '500px', height:"500px"}} />
      </section>
    </div>
  );
}

export default Working;
