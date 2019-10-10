import React, { Component } from "react";
import { Client } from "../../contentfulClient";
const _ = require("underscore");
class MeetingMinutes extends Component {
  state = { meetings: null };
  getData = async () => {
    try {
      let meetingData = [];
      Client.getEntries({ content_type: "meetingMinutes" }).then(response => {
        response.items.forEach(meeting => {
          meetingData.push(meeting.fields);
        });
        meetingData.sort(function(a, b) {
          var aa = a.meetingDate.split(/\D/),
            bb = b.meetingDate.split(/\D/);
          return bb[0] - aa[0] || aa[1] - bb[1] || aa[2] - bb[2];
        }); /*=meetingData.sort(
          (a, b) => new Date(a.meetingDate) - new Date(b.meetingDate)
        );*/
        this.setState({
          meetings: meetingData
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  monthOpener = e => {
    e.preventDefault();
    let id = e.target.id;
    let childrenId = id.slice(0, id.lastIndexOf("-")) + "-children";
    document.getElementById(childrenId).classList.toggle("view");
    document.getElementById(id).classList.toggle("flipped");
  };
  componentDidMount() {
    this.getData();
  }
  showMeetings = () => {
    let monthNames = new Array();
    monthNames[1] = "January";
    monthNames[2] = "February";
    monthNames[3] = "March";
    monthNames[4] = "April";
    monthNames[5] = "May";
    monthNames[6] = "June";
    monthNames[7] = "July";
    monthNames[8] = "August";
    monthNames[9] = "September";
    monthNames[10] = "October";
    monthNames[11] = "November";
    monthNames[12] = "December";
    if (this.state.meetings) {
      var groupedByYear = _.groupBy(this.state.meetings, function(item) {
        return item.meetingDate.substring(0, 4);
      });
      let yearContainers = [];
      Object.keys(groupedByYear)
        .sort()
        .reverse()
        .forEach(year => {
          var groupedByMonth = _.groupBy(groupedByYear[year], function(item) {
            return item.meetingDate.substring(0, 7);
          });
          let monthContainers = [];
          for (var month in groupedByMonth) {
            let dateChildren = [];
            let monthName = monthNames[parseInt(month.split("-")[1])];
            groupedByMonth[month].forEach(gbm => {
              dateChildren.push(
                <div className="date-container">
                  <div className="tria"></div>
                  <a href={gbm.docLink} download>
                    {new Date(gbm.meetingDate).toLocaleDateString("en-Us", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </a>
                </div>
              );
            });
            monthContainers.push(
              <>
                <div
                  className="month-container"
                  id={monthName.toLowerCase() + "-" + year /*"may-2019"*/}
                >
                  <p>{monthName}</p>
                  <div
                    className="tria"
                    id={
                      monthName.toLowerCase() +
                      "-" +
                      year +
                      "-tria" /*"may-2019-tria"*/
                    }
                    onClick={e => this.monthOpener(e)}
                  ></div>
                </div>
                <div
                  className="date-children"
                  id={
                    monthName.toLowerCase() +
                    "-" +
                    year +
                    "-children" /*"may-2019-children"*/
                  }
                >
                  {dateChildren}
                </div>
              </>
            );
          }
          yearContainers.push(
            <>
              <h2 className="year">{year}</h2>
              {monthContainers}
            </>
          );
        });
      return yearContainers;
    }
  };
  render() {
    return (
      <>
        <h1>Meeting Minutes</h1>
        <p className="stay">Stay up-to-date with what we're doing!</p>
        <div className="meeting-crop">
          <img src={require("../../imgs/governance/meeting minutes.jpg")}></img>
        </div>
        <div className="meeting-container">{this.showMeetings()}</div>
      </>
    );
  }
}

export default MeetingMinutes;

/* <h2 className="year">2019</h2>
          <div className="month-container" id="may-2019">
            <p>May</p>
            <div
              className="tria"
              id="may-2019-tria"
              onClick={e => this.monthOpener(e)}
            ></div>
          </div>
          <div className="date-children" id="may-2019-children">
            <div className="date-container">
              <div className="tria"></div>
              <a
                href="https://docs.google.com/document/d/1Gf9Hd_PkRPiE8oIzTWy4muKZuUDV1Q-HZ7inV5QT2dk/export?format=pdf"
                download
              >
                May 22nd, 2019
              </a>
            </div>
            <div className="date-container">
              <div className="tria"></div>
              <a
                href="https://docs.google.com/document/d/1d9rGHhgG2VdK1TCQGG5eRi23-vuN-9458GqkgTePZRY/export?format=pdf"
                download
              >
                May 29th, 2019
              </a>
            </div>
          </div> */
