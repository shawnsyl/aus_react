import React, { Component } from "react";

import Navbar from "../components/Navbar.js";

import "./HomeMain.css";

class HomeMain extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar pathname={this.props.location.pathname} />
        homepage
      </div>
    );
  }
}

export default HomeMain;
