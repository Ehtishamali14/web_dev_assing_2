// Footer.js
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Us</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>&copy; 2024 All rights reserved</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <form>
                <input type="email" placeholder="Enter Email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
