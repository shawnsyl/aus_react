import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.pages = ["/", "/about", "/elections", "/student services", "/contact"];
    this.state = { activePage: this.props.pathname };
  }
  render() {
    return (
      <div id="navbar">
        <img src={require("../imgs/white_logo.png")} className="logo" />
        <ul id="links">
          <li
            className={
              this.state.activePage === this.pages[0] ? "link_active" : "link"
            }
          >
            <a href="/">HOME</a>
          </li>
          <li
            className={
              this.state.activePage === this.pages[1] ? "link_active" : "link"
            }
          >
            <a href="/contact">ABOUT</a>
          </li>
          <li
            className={
              this.state.activePage === this.pages[2] ? "link_active" : "link"
            }
          >
            <a href="/contact">ELECTIONS</a>
          </li>
          <li
            className={
              this.state.activePage === this.pages[3] ? "link_active" : "link"
            }
          >
            <a href="/contact">STUDENT SERVICES</a>
          </li>
          <li
            className={
              this.state.activePage == this.pages[4] ? "link_active" : "link"
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
