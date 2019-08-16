import React, { Component } from "react";
class FlipBook extends Component {
  state = { selectedPage: "0", lockLeft: false };
  FlipPage = e => {
    this.setState({ selectedPage: e.target.id });
  };
  HandleScroll = () => {
    console.log("scroll! ");
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 1028) {
      this.setState({ lockLeft: true });
    } else {
      this.setState({ lockLeft: false });
    }
    console.log(this.state.lockLeft);
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.HandleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.HandleScroll);
  };

  render() {
    console.log(this.state.selectedPage);
    console.log(this.state.lockLeft);
    let page0 = (
      <div>
        <h1>Our Mission Statement</h1>
        <p className="right_content">
          The Arts Undergraduate Society aims to improve the social, academic,
          personal and professional lives of arts students at UBC Vancouver. The
          society is committed to diversity and inclusivity through transparent
          governance and advocacy. The AUS strives to provide programming,
          services, and events for arts students, and a physical space to
          promote community within the faculty.
        </p>
      </div>
    );
    let page1 = (
      <div>
        <h1>Faculty of Arts</h1>
        <p className="right_content">
          UBC houses over 14,000 arts undergraduate students and over 25
          different departments. From sociology to computer science, and Asian
          studies to cognitive systems, the variety of Arts programs makes this
          faculty a diverse and all- encompassing faculty.
          <br />
          <br />
          The Faculty of Arts makes up the largest undergraduate society - not
          only at UBC, but in all of Western Canada. In their strategic 5 year
          plan released in 2015, the faculty notes that it wants to continue to
          collaborate with the Arts Undergraduate Society to implement and
          evaluate programs and improve the overall physical health and mental
          wellness of all their students.
        </p>
      </div>
    );
    let page2 = (
      <div>
        <h1>AUS Council</h1>
        <p className="right_content">
          AUS Council is responsible for the management, administration, code
          changes, and the overall control of affairs in the undergraduate
          society. Council meetings are held bi-weekly during the winter
          session, typicaaly in the Michael Kingsmill forum in the Nest. The
          Speaker of Council is the presiding officer of all meetings and
          follows the general Roberts Rules of Order.
        </p>
        <br />
        <p className="right_content boldy">
          The voting members of council include:
        </p>
        <p className="right_content">
          The AUS Executive Team
          <br />
          AMS Representatives
          <br />
          Year Representatives
          <br />
          The Arts Student Senator
        </p>
        <br />
        <p className="right_content boldy">
          &amp; the elected departmental club reps from the following programs:
        </p>
        <p className="right_content">
          Socioilogy, Anthropology, Psychology, Cognitive Systems, Speech &amp;
          Linguistics, Central, Near Eastern &amp; Religious Studies, Gender,
          Race, and Social Justice, Computer Science, Media Studies, History,
          Art History, English, Political Science, International Relations,
          Geography, Film and Visual Arts.
        </p>
      </div>
    );
    let page3 = (
      <div>
        <h1>The Executive</h1>
        <p className="right_content">
          The executive of the society consists of the Preisdent, (7) Vice
          Presidents, and the Chief AMS Rep. The executive team oversees all the
          day-to-day goverannce and affairs of the undergraduate society.
          <br />
          <br />
          Each Vice President (VP) chairs their portfolio and carries their own
          individual duties dependent on their position.
          <br />
          <br />
          Each VP is expected to facilitate weekly portfoli meetings, attend
          Executive meetings, AUS Council, and hold regular office hours.
        </p>
        <br />
        <p className="right_content boldy">
          The Executive Team consists of the following
        </p>
        <p className="right_content">
          The President
          <br />
          The Vice President Finance
          <br />
          The Vice President Administration
          <br />
          The Vice President Internal
          <br />
          The Vice President External
          <br />
          The Vice President Academic
          <br />
          The Vice President Student Life
          <br />
          The Vice President Engagement
          <br />
          The Chief AMS Rep
          <br />
        </p>
      </div>
    );
    let page4 = (
      <div>
        <h1>Position Descriptions</h1>
        <p className="r" />
      </div>
    );
    return (
      <div className="flipbook">
        <div
          className={this.state.lockLeft ? "left_panel_locked" : "left_panel"}
        >
          <div
            className={
              this.state.selectedPage === "0" ? "chapter purple" : "chapter"
            }
            id="0"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            AUS Mission Statement
            {this.state.selectedPage === "0" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "1" ? "chapter purple" : "chapter"
            }
            id="1"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Faculty of Arts
            {this.state.selectedPage === "1" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "2" ? "chapter purple" : "chapter"
            }
            id="2"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            AUS Council
            {this.state.selectedPage === "2" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "3" ? "chapter purple" : "chapter"
            }
            id="3"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            The Executive
            {this.state.selectedPage === "3" ? <div className="tria" /> : ""}
          </div>
          <div
            className={
              this.state.selectedPage === "4" ? "chapter purple" : "chapter"
            }
            id="4"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Position Descriptions
            {this.state.selectedPage === "4" ? <div className="tria" /> : ""}
          </div>
        </div>
        <div
          className={this.state.lockLeft ? "line_locked" : "line"}
          ref="yl"
        />
        <div
          className={this.state.lockLeft ? "right_panel_locked" : "right_panel"}
        >
          {this.state.selectedPage === "0" ? page0 : ""}
          {this.state.selectedPage === "1" ? page1 : ""}
          {this.state.selectedPage === "2" ? page2 : ""}
          {this.state.selectedPage === "3" ? page3 : ""}
          {this.state.selectedPage === "4" ? page4 : ""}
        </div>
      </div>
    );
  }
}
export default FlipBook;
