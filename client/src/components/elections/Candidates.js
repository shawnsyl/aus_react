import React, { Component } from "react";
import ReactDOM from "react-dom";
import ElectionBook from "./ElectionBook";
import $ from "jquery";
import Scroller from "../about/Scroller.js";
import { candidatePlatforms } from "../../data";
window.$ = $;

class Candidates extends ElectionBook {
  state = {
    lockLeft: "2",
    selectedPage: "0",
    left_location: 0,
    lockLeftPerc: 0.88,
    selectedPres: "",
    selectedPresId: "",
    candData: candidatePlatforms.president,
    forText: "For President"
  };
  FlipPage = e => {
    if (window.pageYOffset >= 188) {
      window.scrollTo(0, 200);
    }
    this.setState({ selectedPage: e.target.id });
    if (e.target.id === "0") {
      //president
      this.setState({
        candData: candidatePlatforms.president,
        forText: "For President"
      });
      if (candidatePlatforms.president.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.president[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "1") {
      //vp student life
      this.setState({
        candData: candidatePlatforms.vpStudentLife,
        forText: "For VP Student Life"
      });
      if (candidatePlatforms.vpStudentLife.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.vpStudentLife[0].name,
          selectedPresId: "0"
        });
      }
    }
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
    }
    return (
      <div className="candidate-container zoomed">
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
    let platforms = [];
    let platformData = [];
    platformData = this.state.candData;
    console.log(platformData);
    platformData.map(data => {
      let sublist = [];
      let bullets = [];
      if (data.lists) {
        data.lists.map(x => {
          let section = [];
          x.forEach(element => {
            section.push(<li>{element}</li>);
          });
          bullets.push(section);
        });
      }
      if (data.subheaders) {
        data.subheaders.map((sub, ind) => {
          sublist.push(
            <div>
              <b>{sub}</b>
              <ul className="browser-default">{bullets[ind]}</ul>
              <br />
            </div>
          );
        });
      }
      let mainPlatform = data.mainPlatform.split("\n").map((item, i) => {
        return (
          <>
            <p>{item}</p>
            <br />
          </>
        );
      });
      platforms.push(
        <div className="right_content">
          {mainPlatform}
          {sublist}
        </div>
      );
    });
    return <div>{platforms[this.state.selectedPresId]}</div>;
  };
  candidateClicked = e => {
    e.preventDefault();
    let presName = e.target.className.split(" ")[1].replace("-", " ");
    this.setState({
      selectedPres: presName,
      selectedPresId: parseInt(e.target.id, 10)
    });
  };
  render() {
    let presPics = [];
    let presPlatforms = this.state.candData;
    //resize/format pic based on data.js
    presPlatforms.map((data, ind) => {
      let scale =
        data.scaleX && data.scaleY
          ? { transform: `scaleX(${data.scaleX}), scaleY(${data.scaleY})` }
          : data.scaleX && !data.scaleY
          ? { transform: `scaleX(${data.scaleX})` }
          : data.scaleY && !data.scaleX
          ? { transform: `scaleY(${data.scaleY})` }
          : "";
      let marginTop = data.marginTop ? { marginTop: data.marginTop } : "";
      presPics.push(
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
              className={`my-picture ${data.class}`}
              id={ind.toString()}
              src={data.pic}
              style={Object.assign(scale, marginTop)}
            />
          </div>
          {this.state.selectedPres !== data.name ? (
            <p className="candidate-name">{data.name}</p>
          ) : (
            ""
          )}
        </div>
      );
    });
    let presidentCandidates = (
      <div className="candidate-container">{presPics}</div>
    );
    let page0 = (
      <div>
        <h1>
          {this.state.forText}
          {this.state.selectedPres === "" ? "" : ": "}
          {this.state.selectedPres}
        </h1>
        {this.state.selectedPres === ""
          ? presidentCandidates
          : this.candidateSelector(presPics)}
        {this.showPlatform()}
      </div>
    );
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
              this.state.selectedPage === "7" ? "chapter purp" : "chapter"
            }
            id="7"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Chief AMS Rep
            {this.state.selectedPage === "7" ? <div className="tria" /> : ""}
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
          {this.state.selectedPage === "7" ? page0 : ""}
        </div>
      </div>
    );
  }
}

export default Candidates;
