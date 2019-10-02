import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Parallax } from "react-scroll-parallax";
import "./Navbar.scss";

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
        <img
          src={require("../imgs/white_logo.png")}
          className="logo"
          alt="UBC AUS Logo"
        />
        <div className="icon" onClick={this.setFold}>
          <i className="fa fa-bars" />
        </div>
        <ul id="links" className={this.state.fold ? "collapse" : "uncollapse"}>
          <li style={{ width: "80px", marginRight: "-40px" }}>
            <NavLink
              activeClassName="active"
              className="home"
              exact
              to="/"
              onClick={this.setFold}
            >
              <span>HOME</span>
            </NavLink>
          </li>
          <li style={{ marginRight: "-45px" }}>
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
          </li>
          <li style={{ marginRight: "-28px" }}>
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
            <div className="about_drop_wrap" style={{ marginRight: "-10px" }}>
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
              id="student-services"
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
