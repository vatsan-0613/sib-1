import React, { useState } from "react";
import leftArrow from "./assets/left-arrow-light.svg";
import rightArrow from "./assets/right-arrow-dark.svg";
import carousel1 from "./assets/carousel-img-1.png";

const Carousel = () => {
  const [productSlide, setProductSlide] = useState(0);
  const productWidth = 397; // Width of each product (matches CSS)

  const products = [
    { id: 1, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 2, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 3, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 4, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 5, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 6, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
    { id: 7, name: "Product Name", image: carousel1, description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding. Build your next landing page." },
  ]

  const slideForward = () => {
    const newSlide = (productSlide + 1) % products.length;
    setProductSlide(newSlide);
  };

  const slideBackward = () => {
    const newSlide = (productSlide - 1 + products.length) % products.length;
    setProductSlide(newSlide);
  };

  return (
    <section id="products">
      <h2 className="text-center fw-semibold section-text">
        Products we <span className="blue-txt">offer for you</span>
      </h2>
      <p className="text-center sub-heading">With lots of unique blocks,</p>
      <div className="buttons d-flex mb-3 gap-3">
        <button className="forward left-arrow arrow-btn p-0" onClick={slideBackward} id="backward-btn">
          <img src={leftArrow} alt="Backward" className="arrow-img"/>
        </button>
        <button className="Backward arrow-btn p-0" onClick={slideForward} id="forward-btn">
          <img src={rightArrow} alt="Forward" className="arrow-img"/>
        </button>
      </div>
      <div className="overflow-hidden">
      <div className="carousel d-flex gap-5" id="product-carousel" style={{ transform: `translateX(-${productSlide * productWidth}px)`, transition: "transform 0.5s ease-in-out" }}>
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="" className="carousel-img" />
            <h5 className="mt-3 mb-3">{product.name}</h5>
            <p className="para-text">{product.description}</p>
            <p><span className="b-text fw-semibold">Read More</span> <img src="/assets/blue-arrow.png" alt="" className="blue-arrow"/></p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Carousel;
