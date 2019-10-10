import React, { Component } from "react";
import "./ServicesMain.scss";
import { Client } from "../contentfulClient";
class ServicesMain extends Component {
  state = {
    clubOperationsGrant: "",
    departmentalClubGrant: "",
    clubSocialGrant: "",
    departmentalSocialGrant: "",
    studentConference: "",
    reimbursementForm: ""
  };

  getFiles = () => {
    Client.getAsset("1HH3JZhMzVe1Zcuv7L25Rl") //clubOperationsGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ clubOperationsGrant: asset.fields.file.url });
      })
      .catch(console.error);

    Client.getAsset("2SyZH1nuKqI8Ko2hLlRwTO") //departmentalClubGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ departmentalClubGrant: asset.fields.file.url });
      })
      .catch(console.error);

    Client.getAsset("fqjFVqSN323sLM3KnkHxz") //clubSocialGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ clubSocialGrant: asset.fields.file.url });
      })
      .catch(console.error);

    Client.getAsset("gBINV7zUJuJ635A7BwHzz") //departmentalSocialGrant
      .then(asset => {
        console.log(asset);
        console.log(asset.fields.file.url);
        this.setState({ departmentalSocialGrant: asset.fields.file.url });
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
        this.setState({ reimbursementForm: asset.fields.file.url });
      })
      .catch(console.error);
  };
  componentDidMount() {
    this.getFiles();
  }
  render() {
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
            2016 Club Operations Grant
          </a>
          <a
            className="button"
            href={this.state.departmentalClubGrant}
            download
          >
            2016 Departmental Club Grant
          </a>
          <p>
            Please email Grants Coordinator Sarah-Louise Carter at
            aus.grants@ubc.ca if you have any questions or concerns. The
            deadline is Saturday, October 29, 2016 at 11:59PM.
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
            2016 Club Social/Academic Grant
          </a>
          <a
            className="button"
            href={this.state.departmentalSocialGrant}
            download
          >
            2016 Departmental Club Grant
          </a>
          <p>
            Please email Grants Coordinator Sarah-Louise Carter at
            aus.grants@ubc.ca if you have any questions or concerns. The
            deadline is Saturday, October 29, 2016 at 11:59PM.
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
            Please email Grants Coordinator Sarah-Louise Carter at
            aus.grants@ubc.ca if you have any questions or concerns. There is no
            deadline for Conference applications.
          </p>
          <p>
            The AUS Conference Grants for the 2016/2017 school year have all
            been distributed. These grants will be available again to students
            at the start of the 2017/2018 school year.
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
                2016 Reimbursement Form
              </a>
            </li>
            <li>
              Attach all relevant receipts to the above document. If receipts
              are not available then a credit card statement is needed
            </li>
            <li>
              Submit all documentation to the mailbox of VP Finance Marina
              Tischenko found in Buchanan D Mass AUS Student Office
            </li>
          </ol>
          <p>
            The fiscal year runs from May-April, so please ensure that all your
            reimbursements are in before April 20th. Failure to submit on time,
            or failure to pick up your reimbursements within a month of issue
            will result in a forfeit of the amount owed to you.
          </p>
          <p>
            If you have any questions or concerns please email VP Finance Marina
            Tischenko at aus.vpfinance@ubc.ca
          </p>
        </div>
      </>
    );
  }
}

export default ServicesMain;
