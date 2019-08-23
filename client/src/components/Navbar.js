import React, { Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import "./Navbar.scss";

class Navbar extends React.PureComponent {
  render() {
    return (
      <div id="navbar">
        <img src={require("../imgs/white_logo.png")} className="logo" />
        <ul id="links">
          <li>
            <NavLink activeClassName="active" exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <div className="about_drop_wrap">
              <NavLink activeClassName="active" to="/about">
                ABOUT
              </NavLink>
              <div className="about_drop_content">
                <NavLink activeClassName="active" exact to="/about/handbook">
                  AUS Handbook
                </NavLink>

                <NavLink activeClassName="active" exact to="/about/team">
                  The Team
                </NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/elections">
              ELECTIONS
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/services">
              STUDENT SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
