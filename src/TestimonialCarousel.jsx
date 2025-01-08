import React, { useState } from "react";
import leftArrow from "./assets/left-arrow-dark.png";
import rightArrow from "./assets/right-arrow-light.png";
import profile1 from "./assets/profile-1.svg";
import star from "./assets/star.svg";

const TestimonialCarousel = () => {
  const [productSlide, setProductSlide] = useState(0);
  const productWidth = 397; // Width of each product (matches CSS)
  const products = [
    {
        text: 'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website & help sell products from the company.',
        name: 'Amir Uddin',
        designation: 'UX Designer',
        rating: 5,
        profileImage: profile1,
      },
      {
        text: 'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website & help sell products from the company.',
        name: 'Amir Uddin',
        designation: 'UX Designer',
        rating: 5,
        profileImage: profile1,
      },
      {
        text: 'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website & help sell products from the company.',
        name: 'Amir Uddin',
        designation: 'UX Designer',
        rating: 5,
        profileImage: profile1,
      },
      {
        text: 'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website & help sell products from the company.',
        name: 'Amir Uddin',
        designation: 'UX Designer',
        rating: 5,
        profileImage: profile1,
      },
      {
        text: 'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website & help sell products from the company.',
        name: 'Amir Uddin',
        designation: 'UX Designer',
        rating: 5,
        profileImage: profile1,
      },
      {
        text: 'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website & help sell products from the company.',
        name: 'Amir Uddin',
        designation: 'UX Designer',
        rating: 5,
        profileImage: profile1,
      },
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
    <section id="testimonials" className="overflow-hidden">
      <h1 className="text-center section-text">Our Customer Say 
        Something <span className="blue-txt">About Us</span></h1>
        <div className="buttons d-flex mb-5">
          <button
            className="forward ms-auto arrow-btn"
            onClick={slideBackward}
            id="backward-test-btn"
          >
            <img src={leftArrow} alt=""/>
          </button>
          <button
            className="Backward me-5 arrow-btn"
            onClick={slideForward}
            id="forward-test-btn"
          >
            <img src={rightArrow} alt=""/>
          </button>
        </div>
        <div className="carousel d-flex gap-5" id="test-carousel" style={{ transform: `translateX(-${productSlide * productWidth}px)`, transition: "transform 0.5s ease-in-out" }}>
          {products.map((item, index) => (
            
          <div className="testimonial-card">
          <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p className="mt-3">
              {item.text}
            </p>
            <div className="d-flex align-items-center">
              <img src={profile1}alt="" className="me-2"/>
              <div>
                <p className="mb-0 fw-semibold mt-3">{item.name}</p>
                <p className="mt-0">{item.designation}</p>
              </div>
            </div>
          </div>
          ))}
            
        </div>  
    </section>
  );
};

export default TestimonialCarousel;
