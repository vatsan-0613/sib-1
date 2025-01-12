import React from 'react'
import { useRef, useState } from 'react'
import hero from "./assets/hero.svg";
import logo from "./assets/logo.svg";
import help from "./assets/help-bg.png";
import carousel1 from "./assets/carousel-img-1.png";
import servicIcon from "./assets/services.png";
import transparent from "./assets/transparent-icon-1.svg";
import serviceIcon1 from "./assets/service-icon-1.svg";
import serviceIcon2 from "./assets/service-icon-2.svg";
import serviceIcon3 from "./assets/service-icon-3.svg";
import serviceIcon4 from "./assets/service-icon-4.svg";
import playBtn from "./assets/play-btn.svg";
import client1 from "./assets/client-1.svg";
import client2 from "./assets/client-2.svg";
import client3 from "./assets/client-3.svg";
import client4 from "./assets/client-4.svg";
import client5 from "./assets/client-5.svg";
import client6 from "./assets/client-6.svg";
import client7 from "./assets/client-7.svg";
import ProductCarousel from './ProductCarousel';
import TestimonialCarousel from './TestimonialCarousel'
import Accordion from './Accordian';
import Footer from './Footer';

const Home = () => {

  const accordionData = [
    {
      id: 1,
      number: "01",
      question: "Do you provide installation services for your products?",
      answer:
        "Yes, we provide installation services for all our products to ensure a hassle-free experience.",
    },
    {
      id: 2,
      number: "02",
      question: "What is your return policy?",
      answer:
        "We have a 30-day return policy for all unused and undamaged products with their original packaging.",
    },
    {
      id: 3,
      number: "03",
      question: "Do you offer warranty on your products?",
      answer:
        "Yes, all our products come with a one-year warranty covering manufacturing defects.",
    },
    {
      id: 4,
      number: "04",
      question: "How can I track my order?",
      answer:
        "You can track your order through the tracking link provided in the confirmation email.",
    },
  ];
  
  return (
    <>
    <section className="mt-5" id="hero">
      <div
        className="container d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center"
      >
        <div>
          <p className="fw-bold lh-base mb-3 hero-text">
            A Tradition of Excellence commitment to quality of product
          </p>
          <button className="menu-btn hero-btn">View Products</button>
        </div>
        <div>
          <img src={hero} alt="hero-img" className="hero-img" />
        </div>
      </div>
    </section>
    <section id="description" className="mt-5">
      <div className="container-fluid">
        <p className="desc-text px-5">
          SIB is a leading provider of advanced solutions in pneumatics and
          safety equipment. Boasting extensive experience and a team of
          dedicated professionals, we are unwaveringly dedicated to delivering
          top-notch products and services. Our commitment is centered on meeting
          the diverse needs of our customers, ensuring their satisfaction with
          the quality we offer. With years of expertise in the field, we
          specialize in staying at the forefront of technological advancements
          to provide cutting-edge solutions. At SIB, our focus is on excellence,
          and we take pride in our ability to consistently deliver high-quality
          products and services that align with the evolving demands of our
          clientele.
        </p>
      </div>
    </section>
    <section id="stats" className="position-relative">
      <img
        src={transparent}
        alt=""
        className="position-absolute icon-1"
      />
      <div
        className="d-flex container justify-content-evenly flex-lg-row flex-column align-items-center"
      >
        <div className='stats-cont'>
          <p className="blue-txt fw-semibold stat-text">80+</p>
          <p className="text-stat-title">Satisfied Clients</p>
        </div>
        <div
          style={{borderLeft: '1.5px solid rgba(0, 175, 239, 1)', height:'130px'}}
          className="vertical-line"
        ></div>
        <div className='stats-cont'>
          <p className="blue-txt fw-semibold stat-text">100+</p>
          <p className="text-stat-title">Satisfied Clients</p>
        </div>
        <div
          style={{borderLeft: '1.5px solid rgba(0, 175, 239, 1)', height:'130px'}}
          className="vertical-line"
        ></div>
        <div className='stats-cont'>
          <p className="blue-txt fw-semibold stat-text">25+</p>
          <p className="text-stat-title">Products</p>
        </div>
      </div>
    </section>
    <ProductCarousel/>
    <section id="services">
      <div className="service-box">
        <h1 className="text-center section-text">
          Services we <span className="blue-txt">provide</span>
        </h1>
        <div className="d-flex mt-5 flex-lg-row flex-column">
          <img src={servicIcon} alt="" className="service-img" />
          <div className="d-flex flex-column justify-content-between service-cont-mobile">
            <div className="d-flex align-items-start gap-2 lg-pe-5">
              <img src={serviceIcon1} alt="" className="me-2 mt-3 pe-3" />
              <div>
                <h4 className="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start pe-5">
              <img src={serviceIcon2} alt="" className="me-2 mt-3 pe-3" />
              <div>
                <h4 className="fw-semibold">Installation and Maintenance</h4>
                <p>
                Our team provides installation services for our products and ongoing maintenance to ensure optimal performance and safety.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon3} alt="" className="me-2 mt-3 pe-3" />
              <div>
                <h4 className="fw-semibold">Consultation</h4>
                <p>
                We offer consultation services to help customers identify the most suitable products and solutions for their specific needs.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon4} alt="" className="me-2 mt-3 pe-3" />
              <div>
                <h4 className="fw-semibold">Training</h4>
                <p>
                We provide training programs to educate customers on the proper use and maintenance of pneumatics and safety equipment, promoting a culture of safety within their organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="help">
      <div className="help-bg-container">
        <img src={help} alt="" className="help-img" />
        <div className="text-center help-text">
          <span className="round-icon"
            ><img src={playBtn} alt=""
          /></span>
          <h3 className="section-text mt-2">How do we help you ?</h3>
          <p className='help-sub-text'>View all your products</p>
        </div>
      </div>
    </section>
    <section id="clients">
      <h1 className="text-center section-text">Our <span className="blue-txt">Clients</span></h1>
      <p className="text-center para-text">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="container mt-5 mb-5">
      <div className="container">
  <div className="row">
    <div className="col-md-2 col-sm-4 col-6 align-self-center d-flex justify-content-center mb-5">
      <img src={client1} alt="" className="img-fluid" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 align-self-center d-flex justify-content-center mb-5">
      <img src={client2} alt="" className="img-fluid" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 align-self-center d-flex justify-content-center mb-5">
      <img src={client3} alt="" className="img-fluid" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 align-self-center d-flex justify-content-center mb-5">
      <img src={client4} alt="" className="img-fluid" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 align-self-center d-flex justify-content-center mb-5">
      <img src={client5} alt="" className="img-fluid" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 align-self-center d-flex justify-content-center mb-5">
      <img src={client6} alt="" className="img-fluid" />
    </div>
  </div>
</div>

      </div>
    </section>
    <TestimonialCarousel />
    <section id="freq-asked-questions">
        <h1 className="text-center section-text mb-5 fw-semibold">Frequently Ask <span className="blue-txt">Questions</span></h1>
        <div className="container">
          {accordionData.map((item, index) => (
            <Accordion num={index+1} heading={item.question} content={item.answer} />
          ))}
        </div>
    </section>
    <Footer />
  </>
  )
}

export default Home