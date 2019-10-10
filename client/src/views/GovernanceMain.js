import React, { Component } from "react";
import Constitution from "../components/governance/Constitution";
import MeetingMinutes from "../components/governance/MeetingMinutes";
import "./GovernanceMain.scss";
class GovernanceMain extends Component {
  state = {};
  render() {
    return (
      <div className="governance">
        {this.props.element === "constitution" ? (
          <Constitution />
        ) : this.props.element === "meeting" ? (
          <MeetingMinutes />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default GovernanceMain;
