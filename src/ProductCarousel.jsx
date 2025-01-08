import React, { useState } from "react";
import leftArrow from "./assets/left-arrow-dark.png";
import rightArrow from "./assets/right-arrow-light.png";
import carousel1 from "./assets/carousel-img-1.png";

const Carousel = () => {
  const [productSlide, setProductSlide] = useState(0);
  const productWidth = 397; // Width of each product (matches CSS)
  const products = [
    { id: 1, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 2, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 3, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 4, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 5, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 6, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 7, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
  ];

  const slideForward = () => {
    const newSlide = (productSlide + 1) % products.length;
    setProductSlide(newSlide);
  };

  const slideBackward = () => {
    const newSlide = (productSlide - 1 + products.length) % products.length;
    setProductSlide(newSlide);
  };

  return (
    <section id="products" className="overflow-hidden">
      <h2 className="text-center fw-semibold section-text">
        Products we <span className="blue-txt">offer for you</span>
      </h2>
      <p className="text-center">With lots of unique blocks,</p>
      <div className="buttons d-flex mb-5">
        <button className="forward ms-auto arrow-btn" onClick={slideBackward} id="backward-btn">
          <img src={leftArrow} alt="Backward" />
        </button>
        <button className="Backward me-5 arrow-btn" onClick={slideForward} id="forward-btn">
          <img src={rightArrow} alt="Forward" />
        </button>
      </div>
      <div className="carousel d-flex gap-5 ps-5" id="product-carousel" style={{ transform: `translateX(-${productSlide * productWidth}px)`, transition: "transform 0.5s ease-in-out" }}>
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="" className="carousel-img" />
            <h5 className="mt-2 mb-2">{product.name}</h5>
            <p className="para-text">{product.description}</p>
            <p><span className="b-text fw-semibold">Read More</span> <img src="/assets/blue-arrow.png" alt="" className="blue-arrow"/></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
