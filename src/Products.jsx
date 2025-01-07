import React from 'react'

const Products = () => {
  return (
    <>
    <section id="products">
        <div className="container">
            <div className="row ms-5">
                <div className="col-6">
                    <img src="assets/product-image.png" alt="" className="product-img" />
                    <h4 className="fw-semibold mt-3 mb-2">Product name</h4>
                    <p className="product-desc">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <p className="blue-txt read-more">Read More</p>
                </div>
                <div className="col-6">
                    <img src="assets/product-image.png" alt="" className="product-img" />
                    <h4 className="fw-semibold mt-3 mb-2">Product name</h4>
                    <p className="product-desc">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <p className="blue-txt read-more">Read More</p>
                </div>
                <div className="col-6 mt-5">
                    <img src="assets/product-image.png" alt="" className="product-img" />
                    <h4 className="fw-semibold mt-3 mb-2">Product name</h4>
                    <p className="product-desc">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <p className="blue-txt read-more">Read More</p>
                </div>
                <div className="col-6 mt-5">
                    <img src="assets/product-image.png" alt="" className="product-img" />
                    <h4 className="fw-semibold mt-3 mb-2">Product name</h4>
                    <p className="product-desc">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <p className="blue-txt read-more">Read More</p>
                </div>
                <div className="col-6 mt-5">
                    <img src="assets/product-image.png" alt="" className="product-img" />
                    <h4 className="fw-semibold mt-3 mb-2">Product name</h4>
                    <p className="product-desc">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <p className="blue-txt read-more">Read More</p>
                </div>
                <div className="col-6 mt-5">
                    <img src="assets/product-image.png" alt="" className="product-img" />
                    <h4 className="fw-semibold mt-3 mb-2">Product name</h4>
                    <p className="product-desc">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <p className="blue-txt read-more">Read More</p>
                </div>
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
          <div className="col-6 mb-3 px-3 py-3"><input type="text" placeholder="Full name"  className="px-3 py-2"/></div>
          <div className="col-6 mb-3 px-3 py-3"><input type="email" name="" id="" placeholder="Your email" className="px-3 py-2" /></div>
          <div className="col-6 mb-3 px-3 py-3"><input type="number" placeholder="Phone number" className="px-3 py-2" /></div>
          <div className="col-6 mb-3 px-3 py-3"><input type="name" className="px-3 py-2" placeholder="Product" /></div>
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
      <img src="/assets/india-mar.svg" alt="" className="me-3" />
      <img src="/assets/jd.png" alt="" className="me-3" />
      <img src="/assets/whatsapp.svg" alt="" />
    </div>
  </section>

    </>
  )
}

export default Products