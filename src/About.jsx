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

const About = () => {
  return (
    <>
    <section className="" id="about-hero">
      <img src="/assets/about-hero.png" alt="" className="about-hero-img" />
      <div className="about-hero-content text-center">
        <h2 className="fw-semibold about-hero-text">
          A Tradition of Excellence commitment to quality of product
        </h2>
        <button className="menu-btn">View Products</button>
      </div>
    </section>
    <section id="description" className="mt-5">
      <div className="container">
        <h2 className="text-center">Who are <span className="blue-txt">we</span></h2>
        <p className="mt-3">
          Welcome to our platform, your trusted destination for top-quality
          pneumatic and safety solutions. With a dedication to excellence and a
          commitment to your safety, we strive to provide the finest pneumatic
          fittings and fire safety equipment available in the market.<br /><br />
          At our core, we understand the importance of pneumatic systems in
          various industries and the critical role they play in enhancing
          efficiency and productivity. That's why we offer a comprehensive range
          of pneumatic products, including fittings, valves, cylinders, and
          accessories, designed to meet the diverse needs of our customers
        </p>

        <div className="d-flex gap-3">
          <p className="pt-3">
            Safety is paramount in everything we do. We recognize the
            significance of maintaining a safe working environment, and our
            selection of safety equipment reflects that. From fire safety
            equipment to personal protective gear, we ensure that our products
            adhere to the highest safety standards, providing you with peace of
            mind and confidence in your workplace safety measures. <br /><br />

            With a team of experienced professionals, we are dedicated to
            delivering exceptional customer service and technical support.
            Whether you're looking for expert advice on selecting the right
            pneumatic fittings or need assistance in choosing the appropriate
            fire safety equipment for your facility, our team is here to help.
          </p>
          <img src="assets/about-image-1.svg" alt="" className="about-img-1" />
        </div>
        <p className="mt-5">
          We are committed to building lasting relationships with our customers
          based on trust, integrity, and reliability. When you choose us, you
          can be assured of premium quality products, unmatched customer
          service, and a steadfast commitment to your safety and satisfaction.
          <br /><br />

          Thank you for choosing us as your partner in pneumatic and safety
          solutions. Together, let's build a safer and more efficient future.
        </p>
      </div>
    </section>
    <section id="stats" className="position-relative">
      <img
        src="assets/transparent-icon-1.svg"
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
  style={{
    borderLeft: "1.5px solid rgba(0, 175, 239, 1)",
    height: "100px"
  }}
  className="vertical-line"
></div>
        <div className="text-center">
          <p className="blue-txt fw-semibold">100+</p>
          <p>Satisfied Clients</p>
        </div>
        <div
  style={{
    borderLeft: "1.5px solid rgba(0, 175, 239, 1)",
    height: "100px"
  }}
  className="vertical-line"
></div>
        <div className="text-center">
          <p className="blue-txt fw-semibold">25+</p>
          <p>Products</p>
        </div>
      </div>
    </section>
    <section id="vision">
        <div className="d-flex container gap-3 mb-5">
            <img src="assets/about-image-1.svg" alt="" className="about-img-1" />
            <div className="align-self-center">
                <h3 className="fw-semibold">Our Vision</h3>
                <p>Our vision is to become a leading provider of pneumatics and safety solutions, recognized for our innovation, reliability, and commitment to customer satisfaction. We strive to continuously improve and adapt to the evolving needs of the industry while maintaining the highest standards of quality and service.</p>
            </div>
        </div>
        <div className="d-flex container gap-3 flex-row-reverse mt-5">
            <img src="assets/about-image-1.svg" alt="" className="about-img-1" />
            <div className="align-self-center">
                <h3 className="fw-semibold">Our Mision</h3>
                <p>Our vision is to become a leading provider of pneumatics and safety solutions, recognized for our innovation, reliability, and commitment to customer satisfaction. We strive to continuously improve and adapt to the evolving needs of the industry while maintaining the highest standards of quality and service.</p>
            </div>
        </div>
    </section>
    <section id="choose-us">
        <h2 className="text-center fw-semibold">Why Choose <span className="blue-txt">Us</span></h2>
        <div className="container d-flex mt-5 gap-5 justify-content-between">
            <div className="text-center choose-card px-3 py-3">
                <img src="/assets/service-icon-1.svg" alt="" className="mb-5" />
                <h4>Quality Assurance</h4>
                <p className="choose-card-text">We prioritize quality in every aspect of our products and services, ensuring reliability and durability.</p>
            </div>
            <div className="text-center choose-card px-3 py-3">
                <img src="/assets/service-icon-2.svg" alt="" className="mb-5" />
                <h4>Expertise</h4>
                <p className="choose-card-text">Our team consists of experienced professionals who are experts in the field of pneumatics and safety, providing reliable guidance and support.</p>
            </div>
            <div className="text-center choose-card px-3 py-3">
                <img src="/assets/service-icon-3.svg" alt="" className="mb-5" />
                <h4>Custom Solutions</h4>
                <p className="choose-card-text">We understand that every customer has unique needs, and we offer customized solutions to meet specific requirements</p>
            </div>
            <div className="text-center choose-card px-3 py-3">
                <img src="/assets/service-icon-4.svg" alt="" className="mb-5" />
                <h4>Customer Service</h4>
                <p className="choose-card-text">We are committed to providing exceptional customer service, from initial consultation to after-sales support, ensuring a seamless experience for our clients.</p>
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
          <img src="/assets/client-1.svg" alt="" />
          <img src="/assets/client-2.svg" alt="" />
          <img src="/assets/client-3.svg" alt="" />
          <img src="/assets/client-4.svg" alt="" />
          <img src="/assets/client-5.svg" alt="" />
          <img src="/assets/client-6.svg" alt="" />
          <img src="/assets/client-7.svg" alt="" />
        </div>
      </div>
    </section>
    <section id="dummy">

    </section>
    <section id="footer">
      <h1 className="text-center">
        Let's Get <span className="blue-txt">Connected</span>
      </h1>
      <p className="text-center">
        Let’s make something new, different and more meaningful or make thing
        more visual or conceptual
      </p>
      <div
        className="container mt-5 d-flex justify-content-between gap-5 mb-5 px-3 py-3"
      >
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src="/assets/phone-footer.svg" alt="" />
            </div>
            <div>
              <p className="mb-0 mt-3">Call me</p>
              <p className="">+8801613968687</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src="/assets/mail.svg" alt="" />
            </div>
            <div>
              <p className="mb-0 mt-3">Email me</p>
              <p className="">ahvir8687@gmail.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src="/assets/location.svg" alt="" />
            </div>
            <div>
              <p className="mb-0 mt-3">Address</p>
              <p className="">Anna nagar, Chennai.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 mb-3 px-3 py-3">
              <input type="text" placeholder="Full name" className="px-3 py-2" />
            </div>
            <div className="col-6 mb-3 px-3 py-3">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your email"
                className="px-3 py-2"
              />
            </div>
            <div className="col-6 mb-3 px-3 py-3">
              <input
                type="number"
                placeholder="Phone number"
                className="px-3 py-2"
              />
            </div>
            <div className="col-6 mb-3 px-3 py-3">
              <input type="name" className="px-3 py-2" placeholder="Product" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="px-3 py-2 col-12"
              ></textarea>
            </div>
            <div className="button-space d-flex mt-4">
              <button className="ms-auto menu-btn">Submit Message</button>
            </div>
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
        <img src="/assets/india-mar.svg" alt="" className="me-3" />
        <img src="/assets/jd.png" alt="" className="me-3" />
        <img src="/assets/whatsapp.svg" alt="" />
      </div>
    </section>
    <script src="script.js"></script>
    </>
  )
}

export default About