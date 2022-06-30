import React from "react";
import "../css/footer.css";
import logo from "../images/logo.svg";
export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <div className="pages">
        <div className="main-item">
          <p>Product</p>
          <ul className=" subItems">
            <li>Overview</li>
            <li>Pricing</li>
            <li> Marketing</li>
            <li> Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="main-item">
          <p>Company</p>
          <ul className=" subItems">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="main-item">
          <p>Contact</p>
          <ul className=" subItems">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
