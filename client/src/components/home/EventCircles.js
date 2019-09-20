import React, { Component } from "react";

import { homeEventData } from "../../data";
import Circle from "./Circle.js";
import "../../views/HomeMain.scss";
const contentful = require("contentful");

class EventCircles extends Component {
  //componentDidMount() {
  //this.getData();
  //}
  getData = async () => {
    try {
      let client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "lo3yxyyk3sy6",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "7NX2e5pvhNBSsYVpXrB70QMHi17l7PJLI1xozMcKf1w"
      });
      let sortedEvents = [];
      client.getEntries({ content_type: "homeEventData" }).then(response => {
        sortedEvents = response.items.sort(
          (a, b) =>
            new Date(a.fields.dateobject) - new Date(b.fields.dateobject)
        );
        this.setState({
          contentfulEvents: sortedEvents,
          events: sortedEvents
        });
        this.setState({ event: sortedEvents[0] });
      });
    } catch (err) {
      console.log(err);
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      event: {}, //need to show most recenthomeEventData.events[2]
      contentfulEvents: [],
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
      transformO: ""
    });

    console.log("next");
    console.log(this.state.transformO);
  };

  prevEvent = () => {
    const newIndex = this.state.events.indexOf(this.state.event) - 1;
    this.setState({
      event: this.state.events[newIndex],
      transformO: "right"
    });
    console.log("prev");
    console.log(this.state.transformO);
  };

  render() {
    console.log(
      "yo",
      this.state.event,
      this.state.events.indexOf(this.state.event)
    );
    return (
      <div className="events">
        <div
          className="button_left"
          onClick={
            this.state.events.indexOf(this.state.event) !== 0
              ? () => this.prevEvent()
              : () => {}
          }
        />
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
                  event.fields.index ===
                  this.state.events.indexOf(this.state.event)
                    ? "_big"
                    : ""
                }
                transform={this.state.transformO}
              />
            ))}
          </div>
        </div>
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
    );
  }
}

export default EventCircles;
