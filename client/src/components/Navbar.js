import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends React.PureComponent {
  render() {
    /*className={
              window.location.pathname === pages[0] ? "link_active" : "link"
            }*/
    let pages = ["/", "/about", "/elections", "/student services", "/contact"];
    return (
      <div id="navbar">
        <img src={require("../imgs/white_logo.png")} className="logo" />
        <ul id="links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">ELECTIONS</a>
          </li>
          <li>
            <a href="/contact">STUDENT SERVICES</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
