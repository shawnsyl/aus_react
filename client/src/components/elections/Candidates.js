import React, { Component } from "react";
import ReactDOM from "react-dom";
import ElectionBook from "./ElectionBook";
import $ from "jquery";
import Scroller from "../about/Scroller.js";
window.$ = $;

class Candidates extends ElectionBook {
  state = {
    lockLeft: "2",
    selectedPage: "0",
    left_location: 0,
    lockLeftPerc: 0.88,
    selectedPres: "",
    selectedPresId: ""
  };
  FlipPage = e => {
    if (window.pageYOffset >= 188) {
      window.scrollTo(0, 200);
    }
    this.setState({
      selectedPage: e.target.id,
      selectedPres: "",
      selectedPresId: ""
    });
  };
  HandleScroll = () => {
    if (
      window.pageYOffset >= 188 &&
      ReactDOM.findDOMNode(this.refs["yl"]).getBoundingClientRect().top <= 0 &&
      !Scroller.isScrolledIntoView($("#footer"), this.state.lockLeftPerc)
    ) {
      this.setState({
        lockLeft: "0",
        relockMargin: document.documentElement.scrollTop - 200
      });
    } else if (
      ReactDOM.findDOMNode(this.refs["yl"]).getBoundingClientRect().top <= 0 &&
      Scroller.isScrolledIntoView($("#footer"), this.state.lockLeftPerc)
    ) {
      this.setState({ lockLeft: "1" }); //relock
    } else {
      this.setState({ lockLeft: "2" }); //unlock
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.HandleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.HandleScroll);
  };
  candidateSelector = candidates => {
    let selected = candidates[this.state.selectedPresId];
    let others1 = [],
      others2 = [],
      theOthers = [];
    if (candidates.length > 1) {
      others1 = candidates.slice(0, this.state.selectedPresId);
      others2 = candidates.slice(
        this.state.selectedPresId + 1,
        candidates.length
      );
    }
    if (others1 || others2) {
      theOthers = others1.concat(others2);
      console.log(theOthers);
    }
    return (
      <div className="candidate-container">
        {" "}
        <div
          style={{
            transform: "scale(2.2,2.2)",
            transformOrigin: "top left",
            height: "0px"
          }}
        >
          {selected}
        </div>
        <div
          className="others-container"
          style={{
            width: "400px",
            outline: "5px solid pink"
          }}
        >
          {theOthers.length !== 0 ? "View Other Candidates" : ""}
          {theOthers.map(function(other) {
            return other;
          })}
        </div>
      </div>
    );
  };
  showPlatform = () => {
    let presKat = (
      <div>
        <p className="right_content">
          Hi everyone! My name is Kat Aquino and I’m running for re-election as
          your AUS President. <br />
          <br />
          Over the past year, I have successfully created a better working
          relationship with the Faculty – allowing us students to advocate for
          the issues we find most important. My previous experiences as VP
          Academic and President has allowed for me to understand the importance
          of student voices and the role the AUS can have in ensuring they are
          heard and make tangible and impactful changes.
          <br />
          <br />
          In the next year, I hope to continue my current work by focusing on
          these priorities:
          <br />
          <b>Support Student Wellness</b>
          <ul className="browser-default">
            <li>
              Advocate for a review and an increase of current mental health
              support systems
            </li>
            <li>
              Collaborate with the Faculty of Arts to make mental health
              training of Arts faculty and staff mandatory
            </li>
          </ul>
          <br />
          <b>Empower Student Voices</b>
          <ul className="browser-default">
            <li>
              Increase programming and initiatives centered around the
              development of diverse and inclusive leadership
            </li>
            <li>
              Collaborate with the AMS and its Indigenous committee to initiate
              greater engagement and inclusion
            </li>
          </ul>
          <br />
          <b>Unify the Arts Community</b>
          <ul className="browser-default">
            <li>
              Further develop a unifying Arts identity while ensuring the
              inclusion of all students’ voices
            </li>
            <li>
              Highlight clubs’ and students’ successes to generate excitement
              and pride within the Arts community
            </li>
          </ul>
        </p>
      </div>
    );
    let presBai = (
      <div>
        <p className="right_content">
          My name is Bailey Saguin and I am proud and honoured to have to
          opportunity to run for your Arts Undergraduate Society President!
          <br />
          <br />
          A little bit about me I am a 4th year Psychology Major with a History
          Minor. I have worked in the AUS for the past 3 years starting from a
          Member-At-Large within the Student Life Committee, last year as the
          Sports Coordinator, and this year as the Associate Vice President
          Student Life.
          <br />
          <br />
          Here are some main highlights from my platform!
          <br />
          <b>Support Student Wellness</b>
          <ul className="browser-default">
            <li>
              Reform
              <ul className="browser-default">
                <li>
                  Reform stART up to be a a more cost effective event that
                  reaches out to more students and maximizes their experience
                </li>
              </ul>
            </li>
            <li>
              Community
              <ul className="browser-default">
                <li>
                  Collaborate with various groups on campus to develop events
                  and services that outreach to a wider range of students with
                  various interests
                </li>
              </ul>
            </li>
            <li>
              Philanthropy
              <ul className="browser-default">
                <li>
                  Implement a year long initiative to support a local
                  organization through the AUS platform
                </li>
              </ul>
            </li>
          </ul>
          <br />
        </p>
      </div>
    );
    if (this.state.selectedPres === "Kat Aquino") return presKat;
    else
      return (
        <div>
          <p className="right_content">placeholder</p>
        </div>
      );
  };
  candidateClicked = e => {
    e.preventDefault();
    console.log(e.target.id, e.target.className);
    let presName = e.target.className.split(" ")[1].replace("-", " ");
    this.setState({
      selectedPres: presName,
      selectedPresId: parseInt(e.target.id, 10)
    });
  };
  render() {
    let presList = [];
    presList.push(
      <div
        className="profile-container"
        style={{ outline: "5px red solid", cursor: "pointer" }}
        onClick={e => {
          this.candidateClicked(e);
        }}
      >
        <div
          className="image-cropper"
          style={{ height: "200px", width: "auto" }}
        >
          <img
            className="my-picture Kat-Aquino"
            id="0"
            src={require("../../imgs/about/AUS - Kat.jpg")}
          />
        </div>
        {this.state.selectedPres !== "Kat Aquino" ? <p>Kat Aquino</p> : ""}
      </div>
    );
    presList.push(
      <div
        className="profile-container"
        style={{ outline: "5px red solid", cursor: "pointer" }}
        onClick={e => {
          this.candidateClicked(e);
        }}
      >
        <div
          className="image-cropper"
          style={{ height: "200px", width: "auto" }}
        >
          <img
            className="my-picture Bailey-Saguin"
            id="1"
            src={require("../../imgs/about/AUS - Bailey.jpg")}
            style={{ marginTop: "50px" }}
          />
        </div>
        {this.state.selectedPres !== "Bailey Saguin" ? (
          <p>Bailey Saguin</p>
        ) : (
          ""
        )}
      </div>
    );
    presList.push(
      <div
        className="profile-container"
        style={{ outline: "5px red solid", cursor: "pointer" }}
        onClick={e => {
          this.candidateClicked(e);
        }}
      >
        <div
          className="image-cropper"
          style={{ height: "200px", width: "auto" }}
        >
          <img
            className="my-picture Anila-Chowdhury"
            id="2"
            src={require("../../imgs/about/AUS - Kat.jpg")}
          />
        </div>
        {this.state.selectedPres !== "Anila Chowdhury" ? (
          <p>Anila Chowdhury</p>
        ) : (
          ""
        )}
      </div>
    );
    let presidentCandidates = (
      <div
        className="candidate-container"
        style={{ outline: "5px blue solid" }}
      >
        {presList}
      </div>
    );
    let page0 = (
      <div>
        <h1>
          For President{this.state.selectedPres === "" ? "" : ":"}{" "}
          {this.state.selectedPres}
        </h1>
        {this.state.selectedPres === ""
          ? presidentCandidates
          : this.candidateSelector(presList)}
        {this.showPlatform()}
      </div>
    );
    console.log(this.state.selectedPres);
    return (
      <div className="flipbook">
        <div
          ref="leftPanel"
          className={
            this.state.lockLeft === "0"
              ? "left_panel_locked"
              : this.state.lockLeft === "2"
              ? "left_panel"
              : "left_panel_relocked"
          }
          style={
            this.state.lockLeft === "1"
              ? { marginTop: this.state.relockMargin + "px" }
              : {}
          }
        >
          <div
            className={
              this.state.selectedPage === "0" ? "chapter purp" : "chapter"
            }
            id="0"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            President
            {this.state.selectedPage === "0" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "1" ? "chapter purp" : "chapter"
            }
            id="1"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Vice President Student Life
            {this.state.selectedPage === "1" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "2" ? "chapter purp" : "chapter"
            }
            id="2"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Vice President Academic
            {this.state.selectedPage === "2" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "3" ? "chapter purp" : "chapter"
            }
            id="3"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Vice President Administration
            {this.state.selectedPage === "3" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "4" ? "chapter purp" : "chapter"
            }
            id="4"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Vice President Engagement
            {this.state.selectedPage === "4" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "5" ? "chapter purp" : "chapter"
            }
            id="5"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Vice President External
            {this.state.selectedPage === "5" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "6" ? "chapter purp" : "chapter"
            }
            id="6"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Vice President Finance
            {this.state.selectedPage === "6" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "8" ? "chapter purp" : "chapter"
            }
            id="8"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Chief AMS Rep
            {this.state.selectedPage === "8" ? <div className="tria" /> : ""}
          </div>
        </div>
        <div
          className={
            this.state.lockLeft === "0"
              ? "line_locked"
              : this.state.lockLeft === "2"
              ? "line"
              : "line"
          }
          ref="yl"
        />
        <div
          className={
            this.state.lockLeft === "0"
              ? "right_panel_locked"
              : this.state.lockLeft === "2"
              ? "right_panel"
              : "right_panel"
          }
        >
          {this.state.selectedPage === "0" ? page0 : ""}
          {this.state.selectedPage === "1" ? page0 : ""}
          {this.state.selectedPage === "2" ? page0 : ""}
          {this.state.selectedPage === "3" ? page0 : ""}
          {this.state.selectedPage === "4" ? page0 : ""}
          {this.state.selectedPage === "5" ? page0 : ""}
          {this.state.selectedPage === "6" ? page0 : ""}
          {this.state.selectedPage === "8" ? page0 : ""}
        </div>
      </div>
    );
  }
}

export default Candidates;
