import React from 'react';
import './Setting.css'; 

function Setting() {
  return (
    <div className="setting-container">
      <section className="image-section">
        <img src='./setting.jpg' alt='Group' style={{ width: '500px', height:"500px"}} />
      </section>

      <section className="text-section">
        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
       <h4>Lorem Ipsum is simply dummy text of the printing</h4>
       <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
       <h4>Lorem Ipsum is simply dummy text of the printing
       </h4>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </section>
    </div>
  );
}

export default Setting;
