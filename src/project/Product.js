import React from 'react';
import './Product.css'; 

function ProductsSection() {
  const products = [
    {
      id: 1,
      title: "Market Research Opportunity Analysis Report",
      description: "Market Research Opportunity Analysis Report (MROAR) can help & guide you in the process of mining the most feasible, sustainable..",
      imgSrc: "./mareket1.jpeg",
    },
    {
      id: 2,
      title: "Project Profile",
      description: "Is having a great product or a service is the only requirement to run a successful business? Definitely not. It..",
      imgSrc: "./Profile.png",
    },
    {
      id: 3,
      title: "Business Feasibility Study Report",
      description: "A feasibility study is defined as an evaluation or analysis of the potential impact of a proposed project or business",
      imgSrc: "./report.png",
    },
    {
      id: 4,
      title: "Business Modelling",
      description: "Business Modelling is one of most crucial and differentiating step in making your business successful. Creating a great business model..",
      imgSrc: "./modelling.png",
    },
    {
      id: 5,
      title: "Business Plan",
      description: "A business plan is a written description of your business's future, a document that tells what you plan to do..",
      imgSrc: "./plan.png",
    },
    {
      id: 6,
      title: "Detailed Project Report",
      description: "A Project Report delineates what the business is all about or what it intends to be over the time. Comprehensive...",
      imgSrc: "./project.webp",
    },
    {
      id: 7,
      title: "Investment Pitch",
      description: "Entrepreneurs these days think that they have a great idea that can take the world by storm and still they..",
      imgSrc: "./invest.webp",
    },
    {
      id: 8,
      title: "Sales And Marketing",
      description: "Is having a great product or a service is the only requirement to run a successful business? Definitely not. It...",
      imgSrc: "./sells.jpeg",
    },
  ];

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.title} style={{width:'200px'}} />
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
