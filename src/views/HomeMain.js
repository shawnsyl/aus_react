import React, { Component } from "react";

import Navbar from "../components/Navbar.js";

import "./HomeMain.scss";
import EventCircles from "../components/home/EventCircles.js";

class HomeMain extends Component {
  state = {};
  render() {
    return (
      <div className="Home">
        <Navbar pathname={this.props.location.pathname} />
        <div className="page1">
          <img src={require("../imgs/home/hand.png")} />
          <div className="p1text">
            <h1>Bleed Purple</h1>
            <h2>UBC Arts Undergraduate Society</h2>
            <p>AUS Elections are coming up!</p>
            <p>Nomination period ends on Friday March 8th, at 5:00 PM.</p>

            <div id="learn_more">
              <span>Learn More</span>
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="yellow_box" />
          <h1>News and Events</h1>
          <EventCircles />
        </div>
        <div className="page3">
          <div className="day_detail">
            <h1>September 1</h1>
            <h2>UBC Annual Community Student Expression Competition</h2>
            <p>
              The Arts Undergraduate Society, the SEEDS Sustianability Program,
              and other parners have collaborated for the first Annual community
              Student Expression Competition! 16 Designs will be chosen and
              students have the opportunity to paint the 16 buchanan pillars!
            </p>
          </div>
          <div className="calendar" />
        </div>
      </div>
    );
  }
}

export default HomeMain;
