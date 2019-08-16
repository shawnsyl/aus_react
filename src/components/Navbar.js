import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends React.PureComponent {
  render() {
    let pages = ["/", "/about", "/elections", "/student services", "/contact"];
    return (
      <div id="navbar">
        <img src={require("../imgs/white_logo.png")} className="logo" />
        <ul id="links">
          <li
            className={
              window.location.pathname === pages[0] ? "link_active" : "link"
            }
          >
            <a href="/">HOME</a>
          </li>
          <li
            className={
              window.location.pathname === pages[1] ? "link_active" : "link"
            }
          >
            <a href="/about">ABOUT</a>
          </li>
          <li
            className={
              window.location.pathname === pages[2] ? "link_active" : "link"
            }
          >
            <a href="/contact">ELECTIONS</a>
          </li>
          <li
            className={
              window.location.pathname === pages[3] ? "link_active" : "link"
            }
          >
            <a href="/contact">STUDENT SERVICES</a>
          </li>
          <li
            className={
              window.location.pathname === pages[4] ? "link_active" : "link"
            }
          >
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
