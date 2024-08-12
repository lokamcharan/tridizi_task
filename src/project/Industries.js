import React from 'react';
import './Industries.css'; // Import the CSS file for styling

function Industries() {
  return (
    <section className="industries">
      <h2>Industries We Serve</h2>
      <ul className="industries-list">
        <li><img src='./automotive.png' alt='' width='25px'/>Automotive & Transport</li>
        <li ><img src='./financial.png' alt='' width='25px'/>Financial Technology</li>
        <li><img src='./health.png' alt='' width='25px'/>Health Technology</li>
        <li><img src='./food.png' alt='' width='25px'/>Food Technology</li>
        <li><img src='./realestate.png' alt='' width='25px'/>Real Estate</li>
        <li><img src='./entertainment.png' alt='' width='25px'/>Entertainment</li>
      </ul>
    </section>
  );
}

export default Industries;
