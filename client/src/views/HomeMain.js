import React, { Component } from "react";

import Navbar from "../components/Navbar.js";

import "./HomeMain.scss";
import EventCircles from "../components/home/EventCircles.js";
import Calendar from "../components/home/Calendar.js";

class HomeMain extends Component {
  state = {};
  render() {
    /*
        <Navbar pathname={this.props.location.pathname} 
        
            <img src={require("../imgs/home/hand.png")} />/>*/
    return (
      <div className="Home">
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
          <div className="eventhead">News and Events</div>
          <EventCircles />
        </div>
        <div className="page3">
          <Calendar />
        </div>
      </div>
    );
  }
}

export default HomeMain;
