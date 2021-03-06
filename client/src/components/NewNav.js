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
      electionsdropdownOpen: false,
      governancedropdownOpen: false,
      servicesdropdownOpen: false,
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
    else if (e.currentTarget.id === "governance-drop")
      this.setState({ governancedropdownOpen: true });
    else if (e.currentTarget.id === "services-drop")
      this.setState({ servicesdropdownOpen: true });
  };

  onMouseLeave(e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "about-drop")
      this.setState({ aboutdropdownOpen: false });
    else if (e.currentTarget.id === "elections-drop")
      this.setState({ electionsdropdownOpen: false });
    else if (e.currentTarget.id === "governance-drop")
      this.setState({ governancedropdownOpen: false });
      else if (e.currentTarget.id === "services-drop")
      this.setState({ servicesdropdownOpen: false });
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
          <a href="/">
            <img
              src={require("../imgs/white_logo.png")}
              className="logo"
              alt="UBC AUS Logo"
            />
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className="bg-white">
            <Nav className="ml" navbar>
              <NavItem>
                <NavLink
                  nav
                  activeClassName="active"
                  className="home"
                  exact
                  to="/home"
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
                style={{ animation: "none" }}
              >
                <NavItem style={{ marginTop: "-7.5px", animation: "none" }}>
                  <DropdownToggle
                    className="drop-toggle"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      animation: "none"
                    }}
                    outline="none"
                    nav
                  >
                    <NavLink activeClassName="active">ABOUT</NavLink>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu right className="about-dropdown">
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      exact
                      to="/about"
                      onClick={this.collapse}
                    >
                      Mission Statement
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
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
                      exact
                      to="/about/team"
                      onClick={this.collapse}
                    >
                      The Team
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                nav
                inNavbar
                onMouseOver={e => {
                  this.onMouseEnter(e);
                }}
                onMouseLeave={e => {
                  this.onMouseLeave(e);
                }}
                isOpen={this.state.governancedropdownOpen}
                id="governance-drop"
                style={{ animation: "none" }}
              >
                <NavItem style={{ marginTop: "-7.5px", animation: "none" }}>
                  <DropdownToggle
                    className="drop-toggle"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      animation: "none"
                    }}
                    outline="none"
                    nav
                  >
                    <NavLink>GOVERNANCE</NavLink>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu right className="governance-dropdown">
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      exact
                      to="/governance/constitution"
                      onClick={this.collapse}
                    >
                      Constitution
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      activeClassName="active"
                      exact
                      to="/governance/meeting_minutes"
                      onClick={this.collapse}
                    >
                      Meeting Minutes
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
                      exact
                      to="/elections/candidates"
                      onClick={this.collapse}
                    >
                      Candidates
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                nav
                inNavbar
                onMouseOver={e => {
                  this.onMouseEnter(e);
                }}
                onMouseLeave={e => {
                  this.onMouseLeave(e);
                }}
                isOpen={this.state.servicesdropdownOpen}
                id="services-drop"
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
                      exact
                      to="/services"
                      onClick={this.collapse}
                    >
                      STUDENT SERVICES
                    </NavLink>
                  </DropdownToggle>
                </NavItem>
              </UncontrolledDropdown>
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
