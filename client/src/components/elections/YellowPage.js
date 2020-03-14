import React, { Component } from "react";
import { electionEventData } from "../../data";

class YellowPage extends Component {
  state = {};
  showDates = () => {
    let eventArray = electionEventData.importantDates;
    let events = [];

    eventArray.forEach(element => {
      events.push(
        <div className="cal-row">
          <div className="date">
            {element.month}
            <br />
            {("0" + element.day).slice(-2)}
          </div>
          <div className="desc">{element.desc}</div>
        </div>
      );
    });
    return <div className="events-panel">{events}</div>;
  };
  showOpenPos = () => {
    let posArray = electionEventData.openPositions;
    let positions = [];

    posArray.forEach(x => {
      positions.push(<p>{x}</p>);
    });
    return <>{positions}</>;
  };
  render() {
    return (
      <div className="yellow-page">
        <div className="white-page">
          <div className="open-positions">
            <h2>Positions Up For Election</h2>
            {this.showOpenPos()}
          </div>
          <div className="yline" />
          <div className="upcoming-dates">
            <h2>Important Dates</h2>
            {this.showDates()}
          </div>
        </div>
      </div>
    );
  }
}

export default YellowPage;
