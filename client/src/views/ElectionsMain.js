import React, { Component } from "react";

import ElectionHome from "../components/elections/ElectionHome";
import ElectionBook from "../components/elections/ElectionBook";
import Candidates from "../components/elections/Candidates";
import Complaints from "../components/elections/Complaints";
class ElectionsMain extends Component {
  state = {};
  render() {
    return (
      <div className="elections">
        {this.props.element === "main" ? (
          <>
            <ElectionHome />
          </>
        ) : (
          ""
        )}
        {this.props.element === "handbook" ? (
          <div className="handbook">
            <h1>Election Handbook</h1>
            <ElectionBook />
          </div>
        ) : (
          ""
        )}
        {this.props.element === "candidates" ? (
          <div className="handbook">
            <h1>Candidates</h1>
            <Candidates />
          </div>
        ) : (
          ""
        )}
        {this.props.element === "complaints" ? (
          <div className="handbook">
            <h1>Complaint Form</h1>
            <Complaints />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default ElectionsMain;
