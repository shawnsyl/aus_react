import React, { Component } from "react";
import "./ServicesMain.scss";
import { Client } from "../contentfulClient";
class ServicesMain extends Component {
  state = {
    clubOperationsGrant: "",
    clubOperationsGrantYear: "",
    departmentalClubGrant: "",
    departmentalClubGrantYear: "",
    clubSocialGrant: "",
    clubSocialGrantYear: "",
    departmentalSocialGrant: "",
    departmentalSocialGrantYear:"",
    studentConference: "",
    reimbursementForm: "",
    reimbursementFormYear: "",
    grantsCoordinator: "",
    grantDeadline : null,
    schoolYear: -1,
    vpFinance: ""
  };

  getFiles = () => {
    Client.getAsset("1HH3JZhMzVe1Zcuv7L25Rl") //clubOperationsGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ clubOperationsGrant: asset.fields.file.url, clubOperationsGrantYear: asset.fields.description });
      })
      .catch(console.error);

    Client.getAsset("2SyZH1nuKqI8Ko2hLlRwTO") //departmentalClubGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ departmentalClubGrant: asset.fields.file.url, departmentalClubGrantYear: asset.fields.description });
      })
      .catch(console.error);

    Client.getAsset("fqjFVqSN323sLM3KnkHxz") //clubSocialGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ clubSocialGrant: asset.fields.file.url, clubSocialGrantYear: asset.fields.description });
      })
      .catch(console.error);

    Client.getAsset("gBINV7zUJuJ635A7BwHzz") //departmentalSocialGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ departmentalSocialGrant: asset.fields.file.url, departmentalSocialGrantYear: asset.fields.description });
      })
      .catch(console.error);

    Client.getAsset("4Zr2G6TvG6oSTuwTZkAQf3") //studentConference
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ studentConference: asset.fields.file.url });
      })
      .catch(console.error);

    Client.getAsset("1oFqfUfvX8ciP7Duc3sJDQ") //reimbursementForm
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ reimbursementForm: asset.fields.file.url, reimbursementFormYear: asset.fields.description });
      })
      .catch(console.error);
  };
  getData = () => {
    Client.getEntries({
      content_type: "studentServices"
    }).then(
      response => {
        const resp = response.items[0].fields;
        this.setState({
          grantsCoordinator: resp.grantsCoordinator,
          grantDeadline: resp.grantDeadline,
          schoolYear: resp.schoolYear,
          vpFinance: resp.vpFinance
       })

      }
    )
  };
  
  formatDate = () => {
    const {grantDeadline} = this.state;
    const grantDate = new Date(Date.parse(grantDeadline));
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const month = monthNames[grantDate.getMonth()];
    const date = grantDate.getDate();
    const day = dayNames[grantDate.getDay()];
    const hours = grantDate.getHours() < 12 ? grantDate.getHours() : grantDate.getHours() - 12;
    const minutes = grantDate.getMinutes();
    const ampm = grantDate.getHours() < 12 ? "AM" : "PM"
    const year = grantDate.getFullYear();
    
    return day + ", " + month + " " + date + ", " + year + " at " + hours + ":" + minutes + ampm
  }

  componentDidMount() {
    this.getFiles();
    this.getData();
  }
  
  render() {
    console.log(this.state);
    return (
      <>
        <div className="services">
          <h1>Clubs &amp; Conference Funding</h1>
        </div>
        <div className="section1">
          <h2>Club Operation Grants</h2>
          <p>
            Club Operations Grants ($2000 maximum) are issued once annually and
            are intended jumpstart and facilitate the day-to-day operations of
            clubs.
          </p>
          <p>To apply, download and complete the following documents:</p>
          <a className="button" href={this.state.clubOperationsGrant} download>
            {this.state.clubOperationsGrantYear} Club Operations Grant
          </a>
          <a
            className="button"
            href={this.state.departmentalClubGrant}
            download
          >
            {this.state.departmentalClubGrantYear} Departmental Club Grant
          </a>
          <p>
            Please email Grants Coordinator {this.state.grantsCoordinator} at
            aus.grants@ubc.ca if you have any questions or concerns. The
            deadline is {this.state.grantDeadline ? this.formatDate() : null}.
          </p>
        </div>
        <div className="section2">
          <h2>Club Social Grants and Club Academic Grants</h2>
          <p>
            Club Social Grants and Club Academic Grants ($500 maximum) are
            intended to facilitate new special initiatives of a social or
            academic nature undertaken by departmental clubs. The grant will
            help to offset financial hardships or funding shortfalls as a result
            of such initiatives. They are not intended for use towards annual
            activities.
          </p>
          <p>To apply, download and complete the following documents:</p>
          <a className="button" href={this.state.clubSocialGrant} download>
            {this.state.clubSocialGrantYear} Club Social/Academic Grant
          </a>
          <a
            className="button"
            href={this.state.departmentalSocialGrant}
            download
          >
            2016 Departmental Club Grant
          </a>
          <p>
            Please email Grants Coordinator {this.state.grantsCoordinator} at
            aus.grants@ubc.ca if you have any questions or concerns. The
            deadline is {this.state.grantDeadline ? this.formatDate() : null}.
          </p>
        </div>
        <div className="section3">
          <h2>Club Social Grants and Club Academic Grants</h2>
          <p>
            Student Conference Grants are intended to facilitate opportunities
            for extracurricular conferences that enhance the learning of
            students enrolled in the Faculty of Arts. For a grant of 50% of
            total costs up to a maximum of $500 they offset financial hardships
            or funding shortfalls precluding participation in conferences.
          </p>
          <p>To apply, download and complete the following documents:</p>
          <a className="button" href={this.state.studentConference} download>
            Student Conference Grant Application Form
          </a>
          <p>
            Please note that we allow students to apply once per academic year
            (May-April). Applications for funding open in May, and stay open
            until the budgeted amount runs out. Apply early to ensure funding.
          </p>
          <p>
            Please email Grants Coordinator {this.state.grantsCoordinator} at
            aus.grants@ubc.ca if you have any questions or concerns. There is no
            deadline for Conference applications.
          </p>
          <p>
            The AUS Conference Grants for the {this.state.schoolYear}/{this.state.schoolYear+1} school year have all
            been distributed. These grants will be available again to students
            at the start of the {this.state.schoolYear+1}/{this.state.schoolYear+2} school year.
          </p>
        </div>
        <div className="section4">
          <h2>Reimbursements</h2>
          <p>
            If applying for a reimbursement from the AUS please follow the
            outlined procedure:
          </p>
          <ol>
            <li>
              Download and complete the following form:
              <br />
              <a
                className="button"
                style={{ marginTop: "10px" }}
                href={this.state.reimbursementForm}
                download
              >
                {this.state.reimbursementFormYear} Reimbursement Form
              </a>
            </li>
            <li>
              Attach all relevant receipts to the above document. If receipts
              are not available then a credit card statement is needed
            </li>
            <li>
              Submit all documentation to the mailbox of VP Finance {this.state.vpFinance} found in Buchanan D Mass AUS Student Office
            </li>
          </ol>
          <p>
            The fiscal year runs from May-April, so please ensure that all your
            reimbursements are in before April 20th. Failure to submit on time,
            or failure to pick up your reimbursements within a month of issue
            will result in a forfeit of the amount owed to you.
          </p>
          <p>
            If you have any questions or concerns please email VP Finance {this.state.vpFinance} at aus.vpfinance@ubc.ca
          </p>
        </div>
      </>
    );
  }
}

export default ServicesMain;
