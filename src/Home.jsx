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
import leftArrow from "./assets/left-arrow-dark.png";
import rightArrow from "./assets/right-arrow-light.png";
import star from "./assets/star.svg";
import profile1 from "./assets/profile-1.svg";
import phone from "./assets/phone.svg";
import phoneFooter from "./assets/phone-footer.svg";
import mail from "./assets/mail.svg";
import location from "./assets/location.svg";
import indiaMap from "./assets/india-mar.svg";
import jdLogo from "./assets/jd.png";
import whatsapp from "./assets/whatsapp.svg";
import ProductCarousel from './ProductCarousel';

const Home = () => {
  return (
    <>
    <section className="mt-5" id="hero">
      <div
        className="container d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center"
      >
        <div>
          <h1 className="fw-bold fs-1 lh-base mb-5 hero-text">
            A Tradition of Excellence commitment to quality of product
          </h1>
          <button className="menu-btn">View Products</button>
        </div>
        <div>
          <img src={hero} alt="hero-img" className="hero-img" />
        </div>
      </div>
    </section>
    <section id="description" className="mt-5">
      <div className="container">
        <p className="desc-text">
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
        className="d-flex container justify-content-evenly flex-lg-row flex-column"
      >
        <div className="text-center">
          <p className="blue-txt fw-semibold">80+</p>
          <p>Satisfied Clients</p>
        </div>
        <div
          style={{borderLeft: '1.5px solid rgba(0, 175, 239, 1)', height:'100px'}}
          className="vertical-line"
        ></div>
        <div className="text-center">
          <p className="blue-txt fw-semibold">100+</p>
          <p>Satisfied Clients</p>
        </div>
        <div
          style={{borderLeft: '1.5px solid rgba(0, 175, 239, 1)', height:'100px'}}
          className="vertical-line"
        ></div>
        <div className="text-center">
          <p className="blue-txt fw-semibold">25+</p>
          <p>Products</p>
        </div>
      </div>
    </section>
    <section id="products" className="overflow-hidden">
      <h2 className="text-center fw-semibold">
        Products we <span className="blue-txt">offer for you</span>
      </h2>
      <p className="text-center">With lots of unique blocks,</p>
      <div className="buttons d-flex mb-5">
        <button
          className="forward ms-auto arrow-btn"
          id="backward-btn"
        >
          <img src={leftArrow} alt="" />
        </button>
        <button
          className="Backward me-5 arrow-btn"
          id="forward-btn"
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
      <div className="carousel d-flex gap-5" id="product-carousel">
        <div className="product-card">
          <img src={carousel1} alt="" className="carousel-img" />
          <h5 className="mt-2 mb-2">Product Name</h5>
          <p className="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span className="b-text">Read More</span></p>
        </div>
        <div className="product-card">
          <img src={carousel1} alt="" className="carousel-img" />
          <h5 className="mt-2 mb-2">Product Name</h5>
          <p className="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span className="b-text">Read More</span></p>
        </div>
        <div className="product-card">
          <img src={carousel1} alt="" className="carousel-img" />
          <h5 className="mt-2 mb-2">Product Name</h5>
          <p className="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span className="b-text">Read More</span></p>
        </div>
        <div className="product-card">
          <img src={carousel1} alt="" className="carousel-img" />
          <h5 className="mt-2 mb-2">Product Name</h5>
          <p className="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span className="b-text">Read More</span></p>
        </div>
        <div className="product-card">
          <img src={carousel1} alt="" className="carousel-img" />
          <h5 className="mt-2 mb-2">Product Name</h5>
          <p className="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span className="b-text">Read More</span></p>
        </div>
        <div className="product-card">
          <img src={carousel1} alt="" className="carousel-img" />
          <h5 className="mt-2 mb-2">Product Name</h5>
          <p className="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span className="b-text">Read More</span></p>
        </div>
        <div className="product-card">
          <img src={carousel1} alt="" className="carousel-img" />
          <h5 className="mt-2 mb-2">Product Name</h5>
          <p className="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span className="b-text">Read More</span></p>
        </div>
      </div>
    </section>
    {/* <ProductCarousel/> */}
    <section id="services">
      <div className="service-box">
        <h1 className="text-center">
          Services we <span className="blue-txt">provide</span>
        </h1>
        <div className="d-flex gap-1 mt-5">
          <img src={servicIcon} alt="" className="service-img" />
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon1} alt="" className="me-2" />
              <div>
                <h4 className="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon2} alt="" className="me-2" />
              <div>
                <h4 className="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon3} alt="" className="me-2" />
              <div>
                <h4 className="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon4} alt="" className="me-2" />
              <div>
                <h4 className="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
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
          <h3 className="fs-1 mt-2">How do we help you ?</h3>
          <p>View all your products</p>
        </div>
      </div>
    </section>
    <section id="clients">
      <h1 className="text-center">Our <span className="blue-txt">Clients</span></h1>
      <p className="text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <img src={client7} alt="" />
        </div>
      </div>
    </section>
    <section id="testimonials" className="overflow-hidden">
      <h1 className="text-center">Our Customer Say 
        Something <span className="blue-txt">About Us</span></h1>
        <div className="buttons d-flex mb-5">
          <button
            className="forward ms-auto arrow-btn"
            onClick="slideTestimonialBackward()"
            id="backward-test-btn"
          >
            <img src={leftArrow} alt=""/>
          </button>
          <button
            className="Backward me-5 arrow-btn"
            onClick="slideTestimonialForward()"
            id="forward-test-btn"
          >
            <img src={rightArrow} alt=""/>
          </button>
        </div>
        <div className="carousel d-flex gap-5" id="test-carousel">
          <div className="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p className="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div className="d-flex align-items-center">
              <img src={profile1}alt="" className="me-2"/>
              <div>
                <p className="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p className="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p className="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div className="d-flex align-items-center">
              <img src={profile1} alt="" className="me-2"/>
              <div>
                <p className="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p className="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p className="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div className="d-flex align-items-center">
              <img src={profile1} alt="" className="me-2"/>
              <div>
                <p className="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p className="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p className="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div className="d-flex align-items-center">
              <img src={profile1} alt="" className="me-2"/>
              <div>
                <p className="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p className="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
        </div>  
    </section>
    <section id="freq-asked-questions">
        <h1 className="text-center">Frequently Ask <span className="blue-txt">Questions</span></h1>
        <div className="container show-box-cont">
          <div className="show-box d-flex justify-content-between align-items-center mt-5">
            <div className="fw-semibold fs-4">01</div>
            <div className="fs-5">Do you provide installation services for your  products?</div>
            <div className="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div className="show-box d-flex justify-content-between align-items-center mt-5">
            <div className="fw-semibold fs-4">02</div>
            <div className="fs-5">Do you provide installation services for your  products?</div>
            <div className="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div className="show-box d-flex justify-content-between align-items-center mt-5">
            <div className="fw-semibold fs-4">03</div>
            <div className="fs-5">Do you provide installation services for your  products?</div>
            <div className="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div className="show-box d-flex justify-content-between align-items-center mt-5">
            <div className="fw-semibold fs-4">04</div>
            <div className="fs-5">Do you provide installation services for your  products?</div>
            <div className="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div className="show-box d-flex justify-content-between align-items-center mt-5">
            <div className="fw-semibold fs-4">05</div>
            <div className="fs-5">Do you provide installation services for your  products?</div>
            <div className="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div className="show-box d-flex justify-content-between align-items-center mt-5">
            <div className="fw-semibold fs-4">06</div>
            <div className="fs-5">Do you provide installation services for your  products?</div>
            <div className="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
        </div>
    </section>
    <section id="footer">
      <h1 className="text-center">Let's Get <span className="blue-txt">Connected</span></h1>
      <p className="text-center">Let’s make something new, different and more meaningful or make thing more visual or conceptual</p>
      <div className="container mt-5 d-flex justify-content-between gap-5 mb-5 px-3 py-3 ">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src={phoneFooter} alt=""/>
            </div>
            <div>
              <p className="mb-0 mt-3">Call me</p>
              <p className="">+8801613968687</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src={mail} alt=""/>
            </div>
            <div>
              <p className="mb-0 mt-3">Email me</p>
              <p className="">ahvir8687@gmail.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src={location} alt=""/>
            </div>
            <div>
              <p className="mb-0 mt-3">Address</p>
              <p className="">Anna nagar, Chennai.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-6 mb-3 px-3 py-3"><input type="text" placeholder="Full name"  className="px-3 py-2"/></div>
          <div className="col-6 mb-3 px-3 py-3"><input type="email" name="" id="" placeholder="Your email" className="px-3 py-2"/></div>
          <div className="col-6 mb-3 px-3 py-3"><input type="number" placeholder="Phone number" className="px-3 py-2"/></div>
          <div className="col-6 mb-3 px-3 py-3"><input type="name" className="px-3 py-2" placeholder="Product"/></div>
          <div><textarea name="" id="" placeholder="Message" className="px-3 py-2 col-12"></textarea></div>
          <div className="button-space d-flex mt-4"><button className="ms-auto menu-btn">Submit Message</button></div>
        </div>
        </div>
      </div>
  </section>
  <section className="lower-footer d-flex container justify-content-between pt-4">
    <div><p>@ 2024. All Rights Reserved</p></div>
    <div className="d-flex gap-5">
      <span>Home</span>
      <span>Products</span>
      <span>About</span>
    </div>
    <div>
      <img src={indiaMap} alt="" className="me-3"/>
      <img src={jdLogo} alt="" className="me-3"/>
      <img src={whatsapp} alt=""/>
    </div>
  </section>
  </>
  )
}

export default Home