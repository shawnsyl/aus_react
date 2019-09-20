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
    lockLeftPerc: 0.9,
    selectedPres: "",
    selectedPresId: "",
    candData: [],
    forText: "For President"
  };
  FlipPage = e => {
    if (window.pageYOffset >= 188) {
      window.scrollTo(0, 0);
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
        forText: "For Vice President Student Life"
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
    } else if (e.target.id === "2") {
      //vp academic
      this.setState({
        candData: candidatePlatforms.vpAcademic,
        forText: "For Vice President Academic"
      });
      if (candidatePlatforms.vpAcademic.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.vpAcademic[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "3") {
      //vp admin
      this.setState({
        candData: candidatePlatforms.vpAdmin,
        forText: "For Vice President Administration"
      });
      if (candidatePlatforms.vpAdmin.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.vpAdmin[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "4") {
      //vp engagement
      this.setState({
        candData: candidatePlatforms.vpEngagement,
        forText: "For Vice President Engagement"
      });
      if (candidatePlatforms.vpEngagement.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.vpEngagement[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "5") {
      //vp external
      this.setState({
        candData: candidatePlatforms.vpExternal,
        forText: "For Vice President External"
      });
      if (candidatePlatforms.vpExternal.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.vpExternal[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "6") {
      //vp finance
      this.setState({
        candData: candidatePlatforms.vpFinance,
        forText: "For Vice President Finance"
      });
      if (candidatePlatforms.vpFinance.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.vpFinance[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "7") {
      //ams rep
      this.setState({
        candData: candidatePlatforms.amsRep,
        forText: "For AMS Representative"
      });
      if (candidatePlatforms.amsRep.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: candidatePlatforms.amsRep[0].name,
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
    this.setState({ candData: candidatePlatforms.president });
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
            width: "400px"
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
    platformData.map(data => {
      let subList = [];
      let bullets = [];
      let numList = [];
      let list = [];
      if (data.list) {
        data.list.forEach(element => {
          list.push(<li>{element}</li>);
        });
      }
      if (data.numList) {
        data.numList.forEach(element => {
          numList.push(<li>{element}</li>);
        });
      }
      if (data.subheaders) {
        if (data.sublists) {
          data.sublists.map(x => {
            let section = [];
            x.forEach(element => {
              section.push(<li>{element}</li>);
            });
            bullets.push(section);
          });
        }
        data.subheaders.map((sub, ind) => {
          subList.push(
            <div>
              <b>{sub}</b>
              <ul className="browser-default">{bullets[ind]}</ul>
              <br />
            </div>
          );
        });
      }
      let mainPlatform = data.mainPlatform.split("\n").map((item, i) => {
        //.replace(/\n/g, "<br />")
        return (
          <>
            <p>{item}</p>
            <br />
          </>
        );
      });
      let subPlatform = <></>;
      if (data.subPlatform) {
        subPlatform = data.subPlatform.split("\n").map((item, i) => {
          //.replace(/\n/g, "<br />")
          return (
            <>
              <p>{item}</p>
              <br />
            </>
          );
        });
      }
      platforms.push(
        <div className="right_content">
          {mainPlatform}
          {subList}
          {data.numList ? (
            <>
              <ol className="browser-default">{numList}</ol>
              <br />
            </>
          ) : (
            ""
          )}
          {data.list ? (
            <>
              <ul className="browser-default">{list}</ul>
              <br />
            </>
          ) : (
            ""
          )}
          {subPlatform}
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
      //set scaling of img

      let scale =
        data.scaleX && data.scaleY && data.scale
          ? {
              transform: `scale(${data.scale[0]}, ${data.scale[1]}), scaleX(${
                data.scaleX
              }), scaleY(${data.scaleY})`
            }
          : data.scaleX && data.scaleY && !data.scale
          ? { transform: `scaleX(${data.scaleX}), scaleY(${data.scaleY})` }
          : data.scaleX && !data.scaleY && !data.scale
          ? { transform: `scaleX(${data.scaleX})` }
          : data.scaleY && !data.scaleX && !data.scale
          ? { transform: `scaleY(${data.scaleY})` }
          : data.scaleX && !data.scaleY && data.scale
          ? {
              transform: `scale(${data.scale[0]}, ${data.scale[1]}), scaleX(${
                data.scaleX
              })`
            }
          : !data.scaleX && data.scaleY && data.scale
          ? {
              transform: `scale(${data.scale[0]}, ${data.scale[1]}), scaleY(${
                data.scaleY
              })`
            }
          : !data.scaleX && !data.scaleY && data.scale
          ? {
              transform: `scale(${data.scale[0]}, ${data.scale[1]})`
            }
          : "";
      let marginTop = data.marginTop ? { marginTop: data.marginTop } : "";
      presPics.push(
        <div
          className="profile-container"
          style={{ cursor: "pointer" }}
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
    let page = (
      <div>
        <h1>
          {this.state.forText}
          {this.state.selectedPres === "" ? "" : ": "}
          {this.state.forText.length + this.state.selectedPres.length > 40 ? (
            <br></br>
          ) : (
            ""
          )}
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
          {page}
        </div>
      </div>
    );
  }
}

export default Candidates;
