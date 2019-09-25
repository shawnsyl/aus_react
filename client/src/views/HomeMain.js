import React, { Component } from "react";

import "./HomeMain.scss";
import EventCircles from "../components/home/EventCircles.js";
import Calendar from "../components/home/Calendar.js";

class HomeMain extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.page1 = React.createRef();
    this.page2 = React.createRef();
    this.page3 = React.createRef();
  }
  scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" }); //window.scrollTo(0, ref.current.offsetTop);
  render() {
    /*
        <Navbar pathname={this.props.location.pathname} 
        
            <img src={require("../imgs/home/hand.png")} />/>*/
    return (
      <div className="Home">
        <div className="page1" ref={this.page1}>
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
          <div
            className="arrow-down"
            onClick={() => this.scrollToRef(this.page2)}
          />
        </div>
        <div className="page2" ref={this.page2}>
          <div className="yellow_box" />
          <div className="eventhead">News and Events</div>
          <EventCircles />
          <div
            className="arrow-up"
            onClick={() => this.scrollToRef(this.page1)}
          />
          <div
            className="arrow-down"
            onClick={() => this.scrollToRef(this.page3)}
          />
        </div>
        <div className="page3" ref={this.page3}>
          <Calendar />
          <div
            className="arrow-up"
            onClick={() => this.scrollToRef(this.page2)}
          />
        </div>
      </div>
    );
  }
}

export default HomeMain;
