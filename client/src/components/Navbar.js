import React, { Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Parallax } from "react-scroll-parallax";
import "./Navbar.scss";
import { isParenthesizedExpression } from "@babel/types";

class MyNavbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fold: true
    };
  }
  setFold = () => {
    this.setState({ fold: !this.state.fold });
    console.log("setfold!");
  };
  render() {
    console.log(this.state.fold);
    return (
      <div id="navbar">
        <img src={require("../imgs/white_logo.png")} className="logo" />
        <div className="icon" onClick={this.setFold}>
          <i className="fa fa-bars" />
        </div>
        <ul id="links" className={this.state.fold ? "collapse" : "uncollapse"}>
          <li>
            <Parallax offsetYMax="5px" offsetYMin="-5px">
              <NavLink
                activeClassName="active"
                className={this.state.fold ? "fold" : "unfold"}
                exact
                to="/"
                onClick={this.setFold}
              >
                <span>HOME</span>
              </NavLink>
            </Parallax>
          </li>
          <li>
            <Parallax offsetYMax="10px" offsetYMin="-10px">
              <div className="about_drop_wrap">
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  to="/about"
                  onClick={this.setFold}
                >
                  <span>ABOUT</span>
                </NavLink>
                <div className="about_drop_content">
                  <NavLink
                    activeClassName="active"
                    className={this.state.fold ? "fold" : "unfold"}
                    exact
                    to="/about/handbook"
                    onClick={this.setFold}
                  >
                    <span>AUS Handbook</span>
                  </NavLink>

                  <NavLink
                    activeClassName="active"
                    className={this.state.fold ? "fold" : "unfold"}
                    exact
                    to="/about/team"
                    onClick={this.setFold}
                  >
                    <span>The Team</span>
                  </NavLink>
                </div>
              </div>
            </Parallax>
          </li>
          <li>
            <Parallax offsetYMax="15px" offsetYMin="-15px">
              <NavLink
                activeClassName="active"
                className={this.state.fold ? "fold" : "unfold"}
                exact
                to="/governance"
                onClick={this.setFold}
              >
                <span>GOVERNANCE</span>
              </NavLink>
            </Parallax>
          </li>
          <li>
            <div className="about_drop_wrap">
              <NavLink
                activeClassName="active"
                className={this.state.fold ? "parent fold" : "parent unfold"}
                to="/elections"
                onClick={this.setFold}
              >
                <span>ELECTIONS</span>
              </NavLink>
              <div className="about_drop_content elec">
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  exact
                  to="/elections/candidates"
                  onClick={this.setFold}
                >
                  <span>Candidates</span>
                </NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className={this.state.fold ? "fold" : "unfold"}
              exact
              to="/services"
              onClick={this.setFold}
            >
              <span>STUDENT SERVICES</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className={this.state.fold ? "fold" : "unfold"}
              exact
              to="/contact"
              onClick={this.setFold}
            >
              <span>CONTACT</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyNavbar;
