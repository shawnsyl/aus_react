import React, { Component } from "react";

import FlipBook from "../components/about/FlipBook.js";
import Members from "../components/about/Members.js";
import "./AboutMain.scss";

class AboutMain extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        {this.props.element === "main" ? (
          <div className="mission">
            <div className="hand-crop">
              <img
                className="hand"
                src={require("../imgs/about/hands.png")}
                alt="hand img"
              />
            </div>
            <div className="mission_text">
              <h1>Mission Statement</h1>
              <p>
                The Arts undergraduate Society aims to improve the social,
                academic, personal and professional lives of arts students at
                UBC Vancouver. The society is committed to diversity and
                inclusivity through transparent governance and advocacy. The AUS
                strives to provide programming, services, and events for arts
                students, and a physical space to promote community within the
                faculty.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.props.element === "handbook" ? (
          <div className="handbook">
            <h1>AUS Handbook</h1>
            <FlipBook />
          </div>
        ) : (
          ""
        )}
        {this.props.element === "team" ? (
          <div className="handbook">
            <h1>The Team</h1>
            <Members />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AboutMain;
