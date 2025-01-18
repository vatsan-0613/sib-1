import React from 'react';
import { Link } from 'react-router-dom';
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
        <h1 className="text-center section-text">
          Let's Get <span className="blue-txt">Connected</span>
        </h1>
        <p className="text-center">
          Let’s make something new, different, and more meaningful or make things more visual or conceptual.
        </p>
        <div className="container mt-5 d-flex justify-content-between gap-5 mb-5 px-3 py-3 flex-lg-row flex-column">
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="footer-icon p-3">
                <img src={phoneFooter} alt="Phone" />
              </div>
              <div>
                <p className="mb-0 mt-3">Call me</p>
                <p className="fw-semibold">
                  <a href="tel:+8801613968687" className="text-dark text-decoration-none">+8801613968687</a>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="footer-icon p-3">
                <img src={mail} alt="Mail" />
              </div>
              <div>
                <p className="mb-0 mt-3">Email me</p>
                <p className="fw-semibold">
                  <a href="mailto:ahvir8687@gmail.com" className="text-dark text-decoration-none">ahvir8687@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="footer-icon p-3">
                <img src={location} alt="Location" />
              </div>
              <div>
              <p className="mb-0 mt-3">Address</p>
              <p className="fw-semibold">
                <a href="https://maps.google.com/?q=Anna+nagar,+Chennai" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                  Anna nagar, Chennai
                </a>
              </p>
            </div>

            </div>
          </div>
          <div className="container">
            <div className="row">
              {/* <div className="col-6 mb-3 px-3 py-3">
                <input type="text" placeholder="Full name" className="px-3 py-2" />
              </div>
              <div className="col-6 mb-3 px-3 py-3">
                <input type="email" placeholder="Your email" className="px-3 py-2" />
              </div>
              <div className="col-6 mb-3 px-3 py-3">
                <input type="number" placeholder="Phone number" className="px-3 py-2" />
              </div>
              <div className="col-6 mb-3 px-3 py-3">
                <input type="text" placeholder="Product" className="px-3 py-2" />
              </div>
              <div>
                <textarea placeholder="Message" className="px-3 py-2 col-12"></textarea>
              </div> */}
              <div className="col-12 col-sm-6 mb-3 px-3 py-3">
                <input type="text" placeholder="Full name" className="px-3 py-2" />
              </div>
              <div className="col-12 col-sm-6 mb-3 px-3 py-3">
                <input type="email" placeholder="Your email" className="px-3 py-2" />
              </div>
              <div className="col-12 col-sm-6 mb-3 px-3 py-3">
                <input type="number" placeholder="Phone number" className="px-3 py-2" />
              </div>
              <div className="col-12 col-sm-6 mb-3 px-3 py-3">
                <input type="text" placeholder="Product" className="px-3 py-2" />
              </div>
              <div>
                <textarea placeholder="Message" className="px-3 py-2 col-12"></textarea>
              </div> 
              <div className="button-space d-flex mt-4">
                <button className="ms-auto menu-btn">Submit Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lower-footer d-flex container flex-lg-row flex-column justify-content-between pt-4">
        <div className="lower-footer-item-1">
          <p>&copy; 2024. All Rights Reserved</p>
        </div>
        <div className="d-flex gap-5 lower-footer-item-2">
          <Link to="/" className="text-dark text-decoration-none">Home</Link>
          <Link to="/products" className="text-dark text-decoration-none">Products</Link>
          <Link to="/about" className="text-dark text-decoration-none">About</Link>
        </div>
        <div className="lower-footer-item-3">
          <a href="https://wa.me/919840837839" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" className="me-3" />
          </a>
          <a href="https://www.indiamart.com/" target="_blank" rel="noopener noreferrer">
            <img src={indiaMap} alt="IndiaMart" className="me-3" />
          </a>
          <a href="https://www.justdial.com/" target="_blank" rel="noopener noreferrer">
            <img src={jdLogo} alt="JustDial" className="me-3" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
