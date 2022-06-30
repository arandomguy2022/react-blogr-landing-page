import React from "react";
import "../css/header.css";
import logo from "../images/logo.svg";
import hamMenu from "../images/icon-hamburger.svg";
import arrow from "../images/icon-arrow-dark.svg";
import hamClose from "../images/icon-close.svg";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="wrapper">
          <div className="nav_items hiddenItems">
            <div
              className="nav_product nav_item"
              onClick={() => {
                document
                  .querySelector(".nav_connect")
                  .lastChild.classList.remove("active");
                document
                  .querySelector(".nav_company")
                  .lastChild.classList.remove("active");
                document
                  .querySelector(".nav_product")
                  .lastChild.classList.toggle("active");
              }}
            >
              <p>
                Product{" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
              </p>
              <ul className=" hamItems">
                <li>Overview</li>
                <li>Pricing</li>
                <li> Marketing</li>
                <li> Features</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div
              className="nav_company nav_item"
              onClick={() => {
                document
                  .querySelector(".nav_connect")
                  .lastChild.classList.remove("active");
                document
                  .querySelector(".nav_product")
                  .lastChild.classList.remove("active");
                document
                  .querySelector(".nav_company")
                  .lastChild.classList.toggle("active");
              }}
            >
              <p>
                Company
                <span>
                  <img src={arrow} alt="" />
                </span>
              </p>
              <ul className=" hamItems">
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div
              className="nav_connect nav_item"
              onClick={() => {
                document
                  .querySelector(".nav_product")
                  .lastChild.classList.remove("active");
                document
                  .querySelector(".nav_company")
                  .lastChild.classList.remove("active");
                document
                  .querySelector(".nav_connect")
                  .lastChild.classList.toggle("active");
              }}
            >
              <p>
                Connect{" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
              </p>
              <ul className=" hamItems">
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <i></i>
            <div className="user_login">
              <button className="login">Login</button>
              <button className="signup">Sign Up</button>
            </div>
          </div>
        </div>
        <div
          className="ham"
          onClick={() => {
            document
              .querySelector(".nav_items")
              .classList.toggle("hiddenItems");
            document.querySelector(".hamIcon").classList.toggle("hidden");
            document.querySelector(".hamIconClose").classList.toggle("hidden");
          }}
        >
          <img src={hamMenu} alt="hamMenu" className="hamIcon" />
          <img src={hamClose} alt="close" className="hamIconClose hidden" />
        </div>
      </nav>
      <section className="hero-section">
        <h2>A modern publishing platform</h2>
        <p>Grow your audience and build online brand </p>
        <div>
          <button className="Start">Start for Free</button>
          <button className="Learn">Learn More</button>
        </div>
      </section>
    </header>
  );
}
