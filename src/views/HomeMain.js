import React, { Component } from "react";

import Navbar from "../components/Navbar.js";

import "./HomeMain.css";

class HomeMain extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar pathname={this.props.location.pathname} />
        <div className="page1">
          <img src={require("../imgs/home/hand.png")} />
          <div className="p1container">
            <h1>Bleed Purple</h1>
            <h2>UBC Arts Undergraduate Society</h2>
            <p>AUS Elections are coming up!</p>
            <p>Nomination period ends on Friday March 8th, at 5:00 PM.</p>

            <div id="learn_more">
              <span>Learn More</span>
            </div>
          </div>
          <div className="p2container">
              <h1>News and Events</h1>
              
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMain;
