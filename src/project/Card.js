import React from 'react';
import './Card.css'; 

function Card() {
  const products = [
    {
      id: 1,
      title: "Lorem Ipsum ",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imgSrc: "./work1.webp",
    },
    {
      id: 2,
      title: "Lorem Ipsum ",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imgSrc: "./work2.webp",
    },
    {
      id: 3,
      title: "Lorem Ipsum ",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imgSrc: "./work3.jpg",
    },
  
  ];

  return (
    <section className="products">
      <h2>Client’s Testimonials</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.title} style={{width:'200px', height:'180px', borderRadius:"50%"}}/>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;


