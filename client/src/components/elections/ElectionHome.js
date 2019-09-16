import React, { Component } from "react";
import YellowPage from "./YellowPage";
import { currentCouncillors } from "../../data";

class ElectionHome extends Component {
  state = {};
  showExecs = () => {
    let execData = currentCouncillors.executives;

    let execList = [];
    let execEmail = [];

    execData.forEach(x => {
      execList.push(
        <p>
          <b>{x.title}: </b>
          {x.name}
        </p>
      );
      execEmail.push(<p>{x.email}</p>);
    });
    return (
      <>
        <h3>Executives</h3>
        <div className="exec-container">
          <div className="exec-list">{execList}</div>
          <div className="exec-email">{execEmail}</div>
        </div>
      </>
    );
  };
  showAmsRep = () => {
    let amsRepData = currentCouncillors.amsReps;
    let amsRepList = [];
    amsRepData.forEach(x => {
      amsRepList.push(<p>{x}</p>);
    });
    return (
      <>
        <h3>AMS Reps</h3>
        <div className="amsrep-container">{amsRepList}</div>
      </>
    );
  };
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
        <YellowPage />
        <div className="current-councillors">
          <h2>Current Councillors</h2>
          <p className="intro">
            Candidates are encouraged to connect with current executives, AMS
            Reps, and Senators to ask questions and get informed about the role.
          </p>
          {this.showExecs()}
          {this.showAmsRep()}
          <h3>Senator</h3>
          <p>{currentCouncillors.senator}</p>
        </div>
      </>
    );
  }
}

export default ElectionHome;
