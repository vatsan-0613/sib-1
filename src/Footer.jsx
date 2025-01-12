import React from 'react'
import phone from "./assets/phone.svg";
import phoneFooter from "./assets/phone-footer.svg";
import mail from "./assets/mail.svg";
import location from "./assets/location.svg";
import indiaMap from "./assets/india-mar.svg";
import jdLogo from "./assets/jd.png";
import whatsapp from "./assets/whatsapp.svg";

const Footer = () => {
  return (
    <>
          <section id="footer">
      <h1 className="text-center section-text">Let's Get <span className="blue-txt">Connected</span></h1>
      <p className="text-center">Let’s make something new, different and more meaningful or make thing more visual or conceptual</p>
      <div className="container mt-5 d-flex justify-content-between gap-5 mb-5 px-3 py-3 flex-lg-row flex-column ">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src={phoneFooter} alt=""/>
            </div>
            <div>
              <p className="mb-0 mt-3">Call me</p>
              <p className="fw-semibold">+8801613968687</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src={mail} alt=""/>
            </div>
            <div>
              <p className="mb-0 mt-3">Email me</p>
              <p className="fw-semibold">ahvir8687@gmail.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="footer-icon p-3">
              <img src={location} alt=""/>
            </div>
            <div>
              <p className="mb-0 mt-3">Address</p>
              <p className="fw-semibold">Anna nagar, Chennai.</p>
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
  <section className="lower-footer d-flex container flex-lg-row flex-column justify-content-between pt-4">
    <div className='lower-footer-item-1'><p>@ 2024. All Rights Reserved</p></div>
    <div className="d-flex gap-5 lower-footer-item-2">
      <span>Home</span>
      <span>Products</span>
      <span>About</span>
    </div>
    <div className='lower-footer-item-3'>
      <img src={indiaMap} alt="" className="me-3"/>
      <img src={jdLogo} alt="" className="me-3"/>
      <img src={whatsapp} alt=""/>
    </div>
  </section>
    </>
  )
}

export default Footer