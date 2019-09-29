import React from "react";
import { Sticky } from "react-sticky";
import $ from "jquery";
import { candidatePlatforms } from "../../data";
import FlipBook from "../about/FlipBook";
import { Client } from "../../contentfulClient";
//import { MarkdownPreview } from "react-marked-markdown";
window.$ = $;

const contentful = require("contentful");
const Marked = require("marked");
class Candidates extends FlipBook {
  state = {
    selectedPage: "0",
    left_location: 0,
    lockLeftPerc: 0.968,
    selectedPres: "",
    selectedPresId: "",
    candData: [],
    forText: "For President",
    testText: ""
  };
  presidentData = [];
  vpStudentLifeData = [];
  vpAcademicData = [];
  vpAdminData = [];
  vpEngagementData = [];
  vpExternalData = [];
  vpFinanceData = [];
  amsRepData = [];
  getData = async () => {
    try {
      //president
      Client.getEntries({ content_type: "presidentCandidate" }).then(
        response => {
          response.items.forEach(data => {
            this.presidentData.push(data.fields);
          });
          this.setState({
            candData: this.presidentData
          });
        }
      );
      //vp student life
      Client.getEntries({ content_type: "vpStudentLifeCandidate" }).then(
        response => {
          response.items.forEach(data => {
            this.vpStudentLifeData.push(data.fields);
          });
        }
      );
      //vp academic
      Client.getEntries({ content_type: "vpAcademicCandidate" }).then(
        response => {
          response.items.forEach(data => {
            this.vpAcademicData.push(data.fields);
          });
        }
      );
      //vp admin
      Client.getEntries({ content_type: "vpAdminCandidate" }).then(response => {
        response.items.forEach(data => {
          this.vpAdminData.push(data.fields);
        });
      });
      //vp engagement
      Client.getEntries({ content_type: "vpEngagementCandidate" }).then(
        response => {
          response.items.forEach(data => {
            this.vpEngagementData.push(data.fields);
          });
        }
      );
      //vp external
      Client.getEntries({ content_type: "vpExternalCandidate" }).then(
        response => {
          response.items.forEach(data => {
            this.vpExternalData.push(data.fields);
          });
        }
      );
      //vp finance
      Client.getEntries({ content_type: "vpFinanceCandidate" }).then(
        response => {
          response.items.forEach(data => {
            this.vpFinanceData.push(data.fields);
          });
        }
      );
      //amsRep
      Client.getEntries({ content_type: "amsRepCandidate" }).then(response => {
        response.items.forEach(data => {
          this.amsRepData.push(data.fields);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  getMarkDown = text => {
    let markup = Marked(text);
    return { __html: markup };
  };
  FlipPage = e => {
    e.preventDefault();
    this.line.current.scrollIntoView({ behavior: "smooth" });
    this.setState({ selectedPage: e.target.id });
    if (e.target.id === "0") {
      //president
      this.setState({
        candData: this.presidentData, //candidatePlatforms.president,
        forText: "For President"
      });
      if (this.presidentData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.presidentData[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "1") {
      //vp student life
      this.setState({
        candData: this.vpStudentLifeData,
        forText: "For Vice President Student Life"
      });
      if (this.vpStudentLifeData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.vpStudentLifeData[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "2") {
      //vp academic
      this.setState({
        candData: this.vpAcademicData,
        forText: "For Vice President Academic"
      });
      if (this.vpAcademicData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.vpAcademicData[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "3") {
      //vp admin
      this.setState({
        candData: this.vpAdminData,
        forText: "For Vice President Administration"
      });
      if (this.vpAdminData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.vpAdminData[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "4") {
      //vp engagement
      this.setState({
        candData: this.vpEngagementData,
        forText: "For Vice President Engagement"
      });
      if (this.vpEngagementData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.vpEngagementData[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "5") {
      //vp external
      this.setState({
        candData: this.vpExternalData,
        forText: "For Vice President External"
      });
      if (this.vpExternalData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.vpExternalData[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "6") {
      //vp finance
      this.setState({
        candData: this.vpFinanceData,
        forText: "For Vice President Finance"
      });
      if (this.vpFinanceData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.vpFinanceData[0].name,
          selectedPresId: "0"
        });
      }
    } else if (e.target.id === "7") {
      //ams rep
      this.setState({
        candData: this.amsRepData,
        forText: "For AMS Representative"
      });
      if (this.amsRepData.length > 1) {
        this.setState({
          selectedPres: "",
          selectedPresId: ""
        });
      } else {
        this.setState({
          selectedPres: this.amsRepData[0].name,
          selectedPresId: "0"
        });
      }
    }
  };
  // HandleScroll = () => {
  //   if (
  //     /*window.pageYOffset >= 188 &&
  //     ReactDOM.findDOMNode(this.refs["yl"]).getBoundingClientRect().top <= 0 &&
  //     !*/ Scroller.isScrolledIntoView(
  //       $("#footer"),
  //       this.state.lockLeftPerc
  //     )
  //   ) {
  //     this.setState({
  //       lockLeft: "0",
  //       relockMargin: document.documentElement.scrollTop - 200
  //     });
  //   } /*else if (
  //     ReactDOM.findDOMNode(this.refs["yl"]).getBoundingClientRect().top <= 0 &&
  //     Scroller.isScrolledIntoView($("#footer"), this.state.lockLeftPerc)
  //   ) {
  //     this.setState({ lockLeft: "1" }); //relock
  //   } */ else {
  //     this.setState({ lockLeft: "2" }); //unlock
  //   }
  // };
  componentDidMount = () => {
    this.getData();
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
          <p className="viewothers">
            {theOthers.length !== 0 ? "View Other Candidates" : ""}
          </p>
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
      if (data) {
        platforms.push(
          <div
            className="right_content"
            dangerouslySetInnerHTML={this.getMarkDown(data.mainPlatform)}
          ></div>
          //<div className="right_content">{data.mainPlatform}</div>
          //<MarkdownPreview value={data.mainPlatform} />
        ); //<ReactMarkdown source={data.mainPlatform} />;
      }
    });
    return <>{platforms[this.state.selectedPresId]}</>;
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
    //resize/format pic based on data
    presPlatforms.map((data, ind) => {
      //set scaling of img
      let scale =
        data.scaleX && data.scaleY
          ? { transform: `scale(${data.scaleX}, ${data.scaleY})` }
          : data.scaleX && !data.scaleY
          ? { transform: `scaleX(${data.scaleX})` }
          : data.scaleY && !data.scaleX
          ? { transform: `scaleY(${data.scaleY})` }
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
              src={"https://" + data.pic.fields.file.url}
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
        <div ref="leftPanel" className="left_panel">
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
        <div className="line" ref={this.line} />
        <div className="right_panel">
          {page}
          
        </div>
      </div>
    );
  }
}

export default Candidates;
/*
<Sticky bottomOffset={590} height={0}>
            {({ style }) => (
              <div
                style={{
                  ...style,
                  width: 0,
                  height: 0,
                  marginTop: "580px", //690px;
                  left: "93.51vw" //1210px;
                }}
                className="arrow-up"
                onClick={() => this.scrollToRef(this.line)}
              />
            )}
          </Sticky>
*/