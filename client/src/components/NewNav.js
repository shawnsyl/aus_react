import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Parallax } from "react-scroll-parallax";
import "./Navbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "react-bootstrap";

function NewNav() {
  return (
    <>
      <Navbar id="navbar">
        <div className="icon">
          <i className="fa fa-bars" />
        </div>
        <img
          src={require("../imgs/white_logo.png")}
          className="logo"
          alt="UBC AUS Logo"
        />
        <div id="link-container">
          <ul id="links">
            <li className="home">
              <NavLink activeClassName="active" className="home" exact to="/">
                <span>HOME</span>
              </NavLink>
            </li>
            <li className="about">
              <div className="about_drop_wrap" style={{ width: "140px" }}>
                <NavLink activeClassName="active" to="/about">
                  <span>ABOUT</span>
                </NavLink>
                <div className="about_drop_content">
                  <NavLink activeClassName="active" exact to="/about/handbook">
                    <span>AUS Handbook</span>
                  </NavLink>

                  <NavLink activeClassName="active" exact to="/about/team">
                    <span>The Team</span>
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="governance">
              <Parallax offsetYMax="15px" offsetYMin="-15px">
                <NavLink activeClassName="active" exact to="/governance">
                  <span>GOVERNANCE</span>
                </NavLink>
              </Parallax>
            </li>
            <li className="elections">
              <div className="about_drop_wrap">
                <NavLink activeClassName="active" to="/elections">
                  <span>ELECTIONS</span>
                </NavLink>
                <div className="about_drop_content elec">
                  <NavLink
                    activeClassName="active"
                    exact
                    to="/elections/candidates"
                  >
                    <span>Candidates</span>
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="services">
              <NavLink
                activeClassName="active"
                exact
                to="/services"
                id="student-services"
              >
                <span>STUDENT SERVICES</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/contact">
                <span>CONTACT</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </Navbar>
    </>
  );
}
export default NewNav;
