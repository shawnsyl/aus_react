import React, { Component } from "react";
import Constitution from "../components/governance/Constitution";
import "./GovernanceMain.scss";
class GovernanceMain extends Component {
  state = {};
  render() {
    return (
      <div className="governance">
        {this.props.element === "constitution" ? <Constitution /> : ""}
      </div>
    );
  }
}

export default GovernanceMain;
