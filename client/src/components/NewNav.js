import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./NewNav.scss";
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.dropdowntoggle = this.dropdowntoggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      isOpen: false,
      aboutdropdownOpen: false,
      electionsdropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  collapse = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };
  dropdowntoggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter = e => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "about-drop")
      this.setState({ aboutdropdownOpen: true });
    else if (e.currentTarget.id === "elections-drop")
      this.setState({ electionsdropdownOpen: true });
  };

  onMouseLeave(e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "about-drop")
      this.setState({ aboutdropdownOpen: false });
    else if (e.currentTarget.id === "elections-drop")
      this.setState({ electionsdropdownOpen: false });
  }

  render() {
    return (
      <div>
        <Navbar
          color="light"
          light
          expand="md"
          className="mynav bg-white"
          style={{ marginTop: "20px" }}
        >
          <img
            src={require("../imgs/white_logo.png")}
            className="logo"
            alt="UBC AUS Logo"
          />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className="bg-white">
            <Nav className="ml" navbar>
              <NavItem>
                <NavLink
                  nav
                  activeClassName="active"
                  className="home"
                  exact
                  to="/"
                  onClick={this.collapse}
                >
                  HOME
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                onMouseOver={e => {
                  this.onMouseEnter(e);
                }}
                onMouseLeave={e => {
                  this.onMouseLeave(e);
                }}
                isOpen={this.state.aboutdropdownOpen}
                id="about-drop"
              >
                <NavItem style={{ marginTop: "-7.5px" }}>
                  <DropdownToggle
                    className="drop-toggle"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      TransitionEvent: "none"
                    }}
                    outline="none"
                    nav
                  >
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/about"
                      onClick={this.collapse}
                    >
                      ABOUT
                    </NavLink>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu right className="about-dropdown">
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/about/handbook"
                      onClick={this.collapse}
                    >
                      AUS Handbook
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/about/team"
                      onClick={this.collapse}
                    >
                      The Team
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  exact
                  to="/governance"
                  onClick={this.collapse}
                >
                  GOVERNANCE
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                onMouseOver={e => {
                  this.onMouseEnter(e);
                }}
                onMouseLeave={e => {
                  this.onMouseLeave(e);
                }}
                isOpen={this.state.electionsdropdownOpen}
                id="elections-drop"
              >
                <NavItem style={{ marginTop: "-7.5px" }}>
                  <DropdownToggle
                    className="drop-toggle"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent"
                    }}
                    outline="none"
                    nav
                  >
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/elections"
                      onClick={this.collapse}
                    >
                      ELECTIONS
                    </NavLink>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu right className="about-dropdown">
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/elections/candidates"
                      onClick={this.collapse}
                    >
                      Candidates
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  exact
                  to="/services"
                  onClick={this.collapse}
                >
                  STUDENT SERVICES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  exact
                  to="/contact"
                  onClick={this.collapse}
                >
                  CONTACT
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Example;

/*
 <div className="nav-cont">
        <Navbar className="mynav" static-top color="light" expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml" navbar>
              <NavItem>
                <NavLink
                  nav
                  activeClassName="active"
                  className="home"
                  exact
                  to="/"
                >
                  HOME
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                onMouseOver={e => {
                  this.onMouseEnter(e);
                }}
                onMouseLeave={e => {
                  this.onMouseLeave(e);
                }}
                isOpen={this.state.aboutdropdownOpen}
                id="about-drop"
              >
                <NavItem style={{ marginTop: "-7.5px" }}>
                  <DropdownToggle
                    className="drop-toggle"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent"
                    }}
                    outline="none"
                    nav
                  >
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/about"
                    >
                      ABOUT
                    </NavLink>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu right className="about-dropdown">
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/about/handbook"
                    >
                      AUS Handbook
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/about/team"
                    >
                      The Team
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  exact
                  to="/governance"
                >
                  GOVERNANCE
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                onMouseOver={e => {
                  this.onMouseEnter(e);
                }}
                onMouseLeave={e => {
                  this.onMouseLeave(e);
                }}
                isOpen={this.state.electionsdropdownOpen}
                id="elections-drop"
              >
                <NavItem style={{ marginTop: "-7.5px" }}>
                  <DropdownToggle
                    className="drop-toggle"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent"
                    }}
                    outline="none"
                    nav
                  >
                    <NavLink
                      activeClassName="active"
                      className="about"
                      exact
                      to="/elections"
                    >
                      ELECTIONS
                    </NavLink>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu right className="about-dropdown">
                  <DropdownItem href="/elections/candidates">
                    Candidates
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  exact
                  to="/services"
                >
                  STUDENT SERVICES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className={this.state.fold ? "fold" : "unfold"}
                  exact
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
*/
