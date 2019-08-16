import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "../../../node_modules/tail.datetime/css/tail.datetime-harx-light.css";
import { thisExpression } from "@babel/types";

class Calendar extends Component {
  weekdayshort = moment.weekdaysShort();
  state = {
    showCalendarTable: true,
    showMonthTable: false,
    dateObject: moment(),
    allmonths: moment.months(),
    showYearNav: false,
    selectedDay: moment().format("D")
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
  NextMonth = () => {
    let monthNo = this.state.dateObject.format("MM");
    let newMonth = parseInt(monthNo, 10);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", newMonth);
    dateObject = moment(dateObject).set("date", 1);
    this.setState({ dateObject: dateObject });
  };
  PrevMonth = () => {
    let monthNo = this.state.dateObject.format("MM");
    let newMonth = parseInt(monthNo, 10) - 2;
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", newMonth);
    dateObject = moment(dateObject).set("date", 1);
    this.setState({ dateObject: dateObject });
  };
  ViewDay = e => {
    let id = e.target.id;
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
      if (i % 3 !== 0 || i == 0) {
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
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th key={day}>{day}</th>;
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar_day empty">{""}</td>); // empty days in the calendar
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td
          id={`day_${d}`}
          className={`calendar_day ${currentDay}`}
          ref={"day_" + d.toString(10)}
          onClick={e => {
            this.ViewDay(e);
          }}
        >
          {d}
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
      return <tr>{row}</tr>;
    });
    return (
      <div className="calendar_container">
        <div className="calendar_navi">
          <div className="left_arrow" onClick={this.PrevMonth} />
          <p>{this.month()}</p>
          <div className="right_arrow" onClick={this.NextMonth} />
        </div>
        <div className="calendar-date" />

        <table className="calendar_tbl">
          <thead>
            <tr>{weekdayshortname}</tr>
          </thead>
          <tbody>{dayList}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
