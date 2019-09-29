import React, { Component } from "react";

import Circle from "./Circle.js";
import "../../views/HomeMain.scss";

const contentful = require("contentful");

class EventCircles extends Component {
  getData = async () => {
    try {
      let client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "lo3yxyyk3sy6",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "7NX2e5pvhNBSsYVpXrB70QMHi17l7PJLI1xozMcKf1w"
      });
      let eventData = [];
      client.getEntries({ content_type: "homeEventData" }).then(response => {
        response.items.forEach(event => {
          eventData.push(event.fields);
        });
        eventData = eventData.sort(
          (a, b) => new Date(a.dateobject) - new Date(b.dateobject)
        );
        this.setState({
          events: eventData
        });
        this.setState({ event: eventData[0], index: 0 });
      });
    } catch (err) {
      console.log(err);
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      event: {},
      index: 0,
      transformO: ""
    };
  }
  componentDidMount() {
    this.getData();
  }

  nextEvent = () => {
    const newIndex = this.state.events.indexOf(this.state.event) + 1;
    this.setState({
      event: this.state.events[newIndex],
      index: newIndex,
      transformO: ""
    });
  };

  prevEvent = () => {
    const newIndex = this.state.events.indexOf(this.state.event) - 1;
    this.setState({
      event: this.state.events[newIndex],
      index: newIndex,
      transformO: "right"
    });
  };

  render() {
    console.log(this.state.events);
    return (
      <div className="events">
        <div className="event-button-container">
        <div
          className="button_left"
          onClick={
            this.state.events.indexOf(this.state.event) !== 0
              ? () => this.prevEvent()
              : () => {}
          }
        />
        </div>
        <div className="viewer">
          <div
            className="events_slider_wrapper"
            style={{
              transform: `translateX(-${this.state.events.indexOf(
                this.state.event
              ) * 424}px)`
            }}
          >
            {this.state.events.map(event => (
              <Circle
                key={event.id}
                event={event}
                isbig={
                  this.state.index === this.state.events.indexOf(event)
                    ? "_big"
                    : ""
                }
                transform={this.state.transformO}
              />
            ))}
          </div>
        </div>
        
        <div className="event-button-container">
        <div
          className="button_right"
          onClick={
            this.state.events.indexOf(this.state.event) !==
            this.state.events.length - 1
              ? () => this.nextEvent()
              : () => {}
          }
        />
        </div>
      </div>
    );
  }
}

export default EventCircles;
