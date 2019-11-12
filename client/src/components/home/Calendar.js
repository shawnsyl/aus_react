import React, {
  Component
} from "react";
import moment from "moment";
import "../../../node_modules/tail.datetime/css/tail.datetime-harx-light.css";

import {
  Client
} from "../../contentfulClient";

class Calendar extends Component {
  getData = async () => {
    try {
      let events = [];
      Client.getEntries({
        content_type: "calendarEventData"
      }).then(
        response => {
          response.items.forEach(event => {
            events.push(event.fields);
          });
          this.setState({
            data: events
          });
        }
      );
      let monthNo = moment().format("M");
      let dayNo = moment().format("D");
      console.log(this.state.data);
      let found = this.state.data.find(item => {
        return item.month === monthNo && item.day === dayNo;
      });
      console.log(found);
      if (found) {
        this.GetEventDetail(found);
      } else {
        this.setState({
          eventMonth: "",
          eventDay: "",
          eventDesc: "",
          eventName: "",
          eventLink: ""
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  weekdayshort = moment.weekdaysShort();
  state = {
    showCalendarTable: true,
    showMonthTable: false,
    dateObject: moment(),
    allmonths: moment.months(),
    showYearNav: false,
    selectedDay: moment().format("D"),
    eventMonth: "",
    eventDay: "",
    eventTitle: "",
    eventDesc: "",
    eventLink: "",
    year: moment().format("Y"),
    data: [],
    eventList: [],
    eventIndex: -1
  };
  componentDidMount = () => {
    this.getData();
  };
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  year = () => {
    return this.state.dateObject.format("Y");
  };
  currentDay = () => {
    return this.state.dateObject.format("D");
  };
  firstDayOfMonth = () => {
    // get start day of the month (eg monday, tuesday, etc)
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  };
  month = () => {
    return this.state.dateObject.format("MMMM");
  };
  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable
    });
  };
  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable
    });
  };
  onPrev = () => {
    const {eventList, eventIndex} = this.state;
    const p_day = eventList[eventIndex-1].day;
    const month_temp = eventList[eventIndex-1].month;
    const p_desc = eventList[eventIndex-1].desc;
    const p_name = eventList[eventIndex-1].name;
    const p_link = eventList[eventIndex-1].eventLink;
    let p_month =
      month_temp === "1" ?
      "January" :
      month_temp === "2" ?
      "February" :
      month_temp === "3" ?
      "March" :
      month_temp === "4" ?
      "April" :
      month_temp === "5" ?
      "May" :
      month_temp === "6" ?
      "June" :
      month_temp === "7" ?
      "July" :
      month_temp === "8" ?
      "August" :
      month_temp === "9" ?
      "September" :
      month_temp === "10" ?
      "October" :
      month_temp === "11" ?
      "November" :
      month_temp === "12" ?
      "December" :
      "";
    this.setState({
      eventMonth: p_month,
      eventDay: p_day,
      eventDesc: p_desc,
      eventName: p_name,
      eventLink: p_link,
      eventIndex: eventIndex - 1
    });
  }
  onNext = () => {
    const {eventList, eventIndex} = this.state;
    const p_day = eventList[eventIndex+1].day;
    const month_temp = eventList[eventIndex+1].month;
    const p_desc = eventList[eventIndex+1].desc;
    const p_name = eventList[eventIndex+1].name;
    const p_link = eventList[eventIndex+1].eventLink;
    let p_month =
      month_temp === "1" ?
      "January" :
      month_temp === "2" ?
      "February" :
      month_temp === "3" ?
      "March" :
      month_temp === "4" ?
      "April" :
      month_temp === "5" ?
      "May" :
      month_temp === "6" ?
      "June" :
      month_temp === "7" ?
      "July" :
      month_temp === "8" ?
      "August" :
      month_temp === "9" ?
      "September" :
      month_temp === "10" ?
      "October" :
      month_temp === "11" ?
      "November" :
      month_temp === "12" ?
      "December" :
      "";
    this.setState({
      eventMonth: p_month,
      eventDay: p_day,
      eventDesc: p_desc,
      eventName: p_name,
      eventLink: p_link,
      eventIndex: eventIndex + 1
    });
  }
  GetEventDetail = data => {
    let p_day = data[0].day;
    let month_temp = data[0].month;
    let p_desc = data[0].desc;
    let p_name = data[0].name;
    let p_month =
      month_temp === "1" ?
      "January" :
      month_temp === "2" ?
      "February" :
      month_temp === "3" ?
      "March" :
      month_temp === "4" ?
      "April" :
      month_temp === "5" ?
      "May" :
      month_temp === "6" ?
      "June" :
      month_temp === "7" ?
      "July" :
      month_temp === "8" ?
      "August" :
      month_temp === "9" ?
      "September" :
      month_temp === "10" ?
      "October" :
      month_temp === "11" ?
      "November" :
      month_temp === "12" ?
      "December" :
      "";
    let p_link = data[0].eventLink;
    this.setState({
      eventMonth: p_month,
      eventDay: p_day,
      eventDesc: p_desc,
      eventName: p_name,
      eventLink: p_link
    });
    if (data.length > 1) {
      this.setState({eventList: data, eventIndex: 0});
    } else {
      this.setState({eventList: [], eventIndex: -1});
    }
  };
  NextMonth = () => {
    let monthNo = this.state.dateObject.format("MM");
    let newMonth = parseInt(monthNo, 10);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", newMonth);
    dateObject = moment(dateObject).set("date", 1);
    let monthNoNew = (newMonth + 1).toString();
    this.setState({
      dateObject: dateObject,
      selectedDay: "1"
    });

    let found = this.state.data.find(item => {
      return item.month === monthNoNew && item.day === "1";
    });
    if (found) {
      this.GetEventDetail(found);
    } else {
      this.setState({
        eventMonth: "",
        eventDay: "",
        eventDesc: "",
        eventName: "",
        eventLink: "",
        eventList: [],
        eventIndex: -1
      });
    }
  };
  PrevMonth = () => {
    let monthNo = this.state.dateObject.format("MM");
    let newMonth = parseInt(monthNo, 10) - 2;
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", newMonth);
    dateObject = moment(dateObject).set("date", 1);
    let monthNoNew = (newMonth + 1).toString();
    this.setState({
      dateObject: dateObject,
      selectedDay: "1"
    });
    let found = this.state.data.find(item => {
      return item.month === monthNoNew && item.day === "1";
    });
    if (found) {
      this.GetEventDetail(found);
    } else {
      this.setState({
        eventMonth: "",
        eventDay: "",
        eventDesc: "",
        eventName: "",
        eventLink: "",
        eventList: [],
        eventIndex: -1
      });
    }
  };
  ViewDay = e => {
    let monthNo = this.state.dateObject.format("M");
    let id = e.target.id;
    let dayNo = id.split("_")[1];
    let found = this.state.data.filter(item => {
      return item.month === monthNo && item.day === dayNo;
    });
    if (found.length > 0) {
      this.GetEventDetail(found);
    } else {
      this.setState({
        eventMonth: "",
        eventDay: "",
        eventDesc: "",
        eventName: "",
        eventLink: "",
        eventList: [],
        eventIndex: -1
      });
    }
    let newcurr = document.getElementById(id);
    let current = document.getElementById(`day_${this.state.selectedDay}`);
    current.classList.remove("today");
    newcurr.classList.add("today");
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set(
      "date",
      parseInt(newcurr.id.split("_")[1], 10)
    );
    this.setState({
      selectedDay: newcurr.id.split("_")[1],
      dateObject: dateObject
    });
  };
  MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.ArrowRight();
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows = [];
    let cells = [];

    months.forEach((day, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(day);
      }
    });
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };
  render() {
    console.log(this.state.eventList);
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th key={day}>{day}</th>;
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar_day empty">{""}</td>); // empty days in the calendar
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d.toString() === this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td
          className={`calendar_day ${currentDay}`}
          id={`day_${d}`}
          ref={"day_" + d.toString(10)}
        >
          <div
            className={`calendar_day ${currentDay}`}
            id={`day_${d}`}
            onClick={e => {
              this.ViewDay(e);
            }}
          >
            {d}
          </div>
        </td>
      );
    }

    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(day);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let dayList = rows.map(row => {
      if (row.length > 0) return <tr>{row}</tr>;
    });
    /*
    <div className="calendar_zone">
          <div className="calendar_container">
            <h1>Calendar</h1>
            <div className="calendar_navi">
              <div className="left_arrow" onClick={this.PrevMonth} />
              <p>
                {this.month()} {this.year()}
              </p>
              <div className="right_arrow" onClick={this.NextMonth} />
            </div>
            <div className="calendar-date" />

            <table className="browser-default calendar_tbl">
              <thead>
                <tr>{weekdayshortname}</tr>
              </thead>
              <tbody>{dayList}</tbody>
            </table>
          </div>
        </div>
    */
    return (
      <div className="events_container">
        <div className="day_detail">
          <h1 className={this.state.eventDesc === "" ? "transparent" : ""}>
            {this.state.eventDesc === "" ? "transparent" : ""}{" "}
            {this.state.eventMonth} {this.state.eventDay}
          </h1><h2>{this.state.eventName}</h2>
          <p>{this.state.eventDesc}</p>
          {this.state.eventDesc && this.state.eventLink ? (
            <a href={this.state.eventLink} target="_blank" rel="noopener noreferrer">
              <div className="learn">
                <span>Learn More</span>
              </div>
            </a>
          ) : (
            ""
          )}
          <div className="prevNext-container">
            {this.state.eventList.length > 0 && this.state.eventIndex > 0? <div className="learn" style={{width: "120px", height: "45px"}} onClick={this.onPrev}>
              <span className="choose">Previous</span>
            </div> : null}
            {this.state.eventList.length > 0 && this.state.eventIndex < this.state.eventList.length - 1 ? <div className="learn" style={{width: "120px", height: "45px"}} onClick={this.onNext}>
              <span className="choose">Next</span>
            </div> : null}
          </div>
        </div>
        <div className="calendar_zone">
          <div className="calendar_container">
            <h1>Calendar</h1>
            <div className="calendar_navi">
              <div className="left_arrow" onClick={this.PrevMonth} />
              <p>
                {this.month()} {this.year()}
              </p>
              <div className="right_arrow" onClick={this.NextMonth} />
            </div>
            <div className="calendar-date" />

            <table className="browser-default calendar_tbl">
              <thead>
                <tr>{weekdayshortname}</tr>
              </thead>
              <tbody>{dayList}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
