import React, { Component } from "react";

import { homeEventData } from "../../data";
import Circle from "./Circle.js";
import "../../views/HomeMain.scss";

class EventCircles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: homeEventData.events,
      event: homeEventData.events[2], //need to show most recent
      transformO: ""
    };
  }

  nextEvent = () => {
    const newIndex = this.state.event.index + 1;
    this.setState({ event: homeEventData.events[newIndex], transformO: "" });

    console.log("next");
    console.log(this.state.transformO);
  };

  prevEvent = () => {
    const newIndex = this.state.event.index - 1;
    this.setState({
      event: homeEventData.events[newIndex],
      transformO: "right"
    });
    console.log("prev");
    console.log(this.state.transformO);
  };

  render() {
    return (
      <div className="events">
        <div
          className="button_left"
          onClick={this.state.event.index !== 0 ? () => this.prevEvent() : ""}
        />
        <div className="viewer">
          <div
            className="events_slider_wrapper"
            style={{
              transform: `translateX(-${this.state.event.index * 424}px)`
            }}
          >
            {this.state.events.map(event => (
              <Circle
                key={event.id}
                event={event}
                isbig={event.index === this.state.event.index ? "_big" : ""}
                transform={this.state.transformO}
              />
            ))}
          </div>
        </div>
        <div
          className="button_right"
          onClick={
            this.state.event.index !== this.state.events.length - 1
              ? () => this.nextEvent()
              : ""
          }
        />
      </div>
    );
  }
}

export default EventCircles;
