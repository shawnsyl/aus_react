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
} from "reactstrap";

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
      <>
        <div id="navbar">
          <div className="icon" onClick={this.setFold}>
            <i className="fa fa-bars" />
          </div>
          <img
            src={require("../imgs/white_logo.png")}
            className="logo"
            alt="UBC AUS Logo"
          />
          <div id="link-container">
            <ul
              id="links"
              className={this.state.fold ? "collapse" : "uncollapse"}
            >
              <li className="home">
                <NavLink activeClassName="active" className="home" exact to="/">
                  <span>HOME</span>
                </NavLink>
              </li>
              <li className="about">
                <div className="about_drop_wrap">
                  <NavLink
                    activeClassName="active"
                    className={this.state.fold ? "fold" : "unfold"}
                    to="/about"
                  >
                    <span>ABOUT</span>
                  </NavLink>
                  <div className="about_drop_content">
                    <NavLink
                      activeClassName="active"
                      className={this.state.fold ? "fold" : "unfold"}
                      exact
                      to="/about/handbook"
                    >
                      <span>AUS Handbook</span>
                    </NavLink>

                    <NavLink
                      activeClassName="active"
                      className={this.state.fold ? "fold" : "unfold"}
                      exact
                      to="/about/team"
                    >
                      <span>The Team</span>
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="governance">
                <Parallax offsetYMax="15px" offsetYMin="-15px">
                  <NavLink
                    activeClassName="active"
                    className={this.state.fold ? "fold" : "unfold"}
                    exact
                    to="/governance"
                  >
                    <span>GOVERNANCE</span>
                  </NavLink>
                </Parallax>
              </li>
              <li className="elections">
                <div className="about_drop_wrap">
                  <NavLink
                    activeClassName="active"
                    className={
                      this.state.fold ? "parent fold" : "parent unfold"
                    }
                    to="/elections"
                  >
                    <span>ELECTIONS</span>
                  </NavLink>
                  <div className="about_drop_content elec">
                    <NavLink
                      activeClassName="active"
                      className={this.state.fold ? "fold" : "unfold"}
                      exact
                      to="/elections/candidates"
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
                  id="student-services"
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
                >
                  <span>CONTACT</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default MyNavbar;

/*

      
*/
