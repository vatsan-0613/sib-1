import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/assets/logo.svg" alt="" className="me-2" />
            <span className="fw-bold fs-3">SIB</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto me-5 d-flex justify-content-between gap-lg-5 gap-sm-0"
            >
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">About</Link>
              </li>
              <li className="nav-item">
              <Link to="/products" className="nav-link text-dark">Products</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <img src="assets/phone.svg" alt="" />
                <span>+2349067322844</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
