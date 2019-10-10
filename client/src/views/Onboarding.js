import React, { Component } from "react";
import "./Onboarding.scss";
class Onboarding extends Component {
  state = {};
  render() {
    return (
      <>
        <section class="panel-container">
          <div class="panel">
            <div id="p1">
              <h1>AUS</h1>
              <h2>UBC Arts Undergraduate Society</h2>
              <a href="/home">
                <div id="button1">Enter</div>
              </a>
            </div>
          </div>
          <div class="panel">
            <div id="p2">
              <h1>hAUS</h1>
              <h2>UBC Arts Student Centre</h2>
              <a
                href="http://www.ubcasc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="button2">Enter</div>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Onboarding;
