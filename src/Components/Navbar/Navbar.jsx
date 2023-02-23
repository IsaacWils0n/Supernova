import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-main-container">
      <div className="heading-container">
        <img src="" alt="" />
        {/* <Link className="main-heading-link" to="/"> */}
        <span className="heading1">SUPERNOVA</span>
        <span className="heading2">MEDIA PRODUCTION</span>
        {/* </Link> */}
      </div>
      <div>
        <ul className="list-container">
          {/* <Link className="service-link" to="/services"> */}
          <li className="service">Services</li>
          {/* </Link> */}
          {/* <Link className="our-work-link" to="/ourWork"> */}
          <li className="our-work">Our Work</li>
          {/* </Link> */}
          {/* <Link className="contact-link" to="/contact"> */}
          <li className="contact">Contact</li>
          {/* </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
