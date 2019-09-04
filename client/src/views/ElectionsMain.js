import React, { Component } from "react";

import ElectionBook from "../components/elections/ElectionBook.js";
import Candidates from "../components/elections/Candidates.js";
import Complaints from "../components/elections/Complaints.js";
class ElectionsMain extends Component {
  state = {};
  render() {
    return (
      <div className="elections">
        {this.props.element === "main" ? (
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
