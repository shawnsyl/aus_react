import React, { Component } from "react";

class ElectionHome extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="elections-top">
          <h1>Elections Info</h1>
          <div className="top-wrapper">
            <div className="textchanger">
              <p className="question">Passionate about any of these things?</p>
              <p className="answer">
                Perfect. This is your chance to get involved in the Arts
                community and be part of a core and committed group of
                professional student leaders!
              </p>
            </div>

            <div className="hand-container">
              <p className="leadership">Leadership</p>
              <p className="academia">Academia</p>
              <p className="diversity">Diversity</p>
              <p className="inclusivity">Inclusivity</p>
              <p className="fun">Fun</p>
              <p className="community">Community</p>
              <p className="advocacy">Advocacy</p>
              <div className="hand-cropper">
                <img
                  src={require("../../imgs/elections/ivoted-scaled.png")}
                  style={{
                    outline: "solid 5px mediumaquamarine"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ElectionHome;
