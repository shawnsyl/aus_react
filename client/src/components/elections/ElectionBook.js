import React, { Component } from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
import Scroller from "../about/Scroller.js";
class ElectionBook extends Component {
  state = {
    selectedPage: "0",
    lockLeft: "2",
    relockMargin: 0,
    lockLeftPerc: 0.7
  };
  FlipPage = e => {
    console.log(e.target.id);
    if (window.pageYOffset >= 188) {
      window.scrollTo(0, 200);
    }
    if (e.target.id === "2") {
      this.setState({ lockLeftPerc: 0.98 });
    } else {
      this.setState({ lockLeftPerc: 0.7 });
    }
    this.setState({ selectedPage: e.target.id });
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
  render() {
    console.log(this.state.lockLeftPerc);
    let page0 = (
      <div>
        <h1>The Elections Committee</h1>
        <h2 className="browser-default subh">Who Are We?</h2>
        <p className="right_content">
          The AUS elections committee’s role is to oversee, facilitate, and
          organize all AUS elections and referenda. The committee is responsible
          for conducting fair and reasonable elections, encouraging voter
          turnout, and enforcing campaign rules and regulations.
        </p>
        <h2 className="browser-default subh">
          Contact Information and Communcation:
        </h2>
        <p className="right_content">
          The elections administrator will contact you primarily through email.
          Every candidate must also follow the “UBC Arts Undergraduate Society
          Elections” page on Facebook and invite them to all social media events
          and pages, to ensure that rules are not violated. Please allow the EA
          up to 24 hours to respond to emails during busy times.
          <br />
          <br />
          <b>Elections Administrator:</b> Tushita Bagga
          <br />
          <b>Email:</b> aus.electionsco@gmail.com
          <br />
          <b>Facebook:</b> UBC Arts Undergraduate Society Elections
          <br />
          <b>Office Hours:</b> W/F 1-3pm in the MASS or by appointment
          <br />
          <br />
          *Note: if you do not receive an email confirming your candidacy 24
          hours after the all candidates meeting, please email the Elections
          Administrator directly. If you do not receive necessary information
          because we have the wrong email address, you will not be exempt from
          penalties so please do check your email very regularly during
          campaigning
        </p>
      </div>
    );
    let page1 = (
      <div>
        <h1>Candidate Bio and Photo</h1>
        <p className="right_content">
          All candidates must submit a 200-word passage (may include platform,
          experience, etc...) as well as a photo of themselves via email to the
          election’s administrator by Thursday March 14th at 11:59PM. Your blurb
          and photo will feature on the AUS website and promoted on Facebook, it
          will give voters insight on your platform and why they should vote for
          you. The picture may not exceed 500kb nor have any logo or text on it.
          You can include a link to your Facebook page or event and/or campaign
          website in your bio. Bios and photos sent after the deadline will not
          be uploaded on the website, which could be an electoral disadvantage,
          so make sure you email it ASAP.
        </p>
      </div>
    );
    let page2 = (
      <div>
        <h1 className="browser-default">Campaigning</h1>
        <p className="right_content">
          <ul className="browser-default">
            <li>
              Campaigning period begins on Saturday March 9th , any sort of
              campaigning before this period is prohibited and will result in
              strict penalties.
            </li>
            <li>
              Campaigning materials include both physical and online material,
              including but is not limited to: websites, Facebook/Instagram/
              Snapchat (etc...) pages, and blogs, may be created before campaign
              period but must not be open to public or on display before the end
              of All-Candidates Meeting.
            </li>
            <li>
              Candidates may also not publicly campaign through one-on-one
              interaction, at events, or any public sphere before campaign
              period.
            </li>
            <li>
              The AUS will announce your candidacy through the website and
              social media page, so you nor anyone on your behalf can campaign
              until then. There will be a post and we will tag you if possible.
              Please look out for it and only start to campaign after that.
            </li>
          </ul>
          <br />
          Campaign rules include, but are not limited to, the following:
          <ol>
            <li>
              Elections committee must approve all campaign materials, (further
              explained below).
            </li>
            <li>
              Do not have any campaign materials up before the campaign period
              (as mentioned before)
            </li>
            <li>
              Promote yourself only. Do not publicize other candidates in any
              way: good or bad.
            </li>
            <li>
              Sharing or inviting friends to other candidate’s page or
              supporting them via social media in any way is also a form of
              promotion and will result in penalties. Please also be mindful of
              clicking going or interested on other candidates’ events
            </li>
            <li>
              No slating at all; with physical or online materials, (further
              explained below).
            </li>
            <li>
              No offensive, slander, or inappropriate campaign material (at the
              discretion of elections committee)
            </li>
            <li>
              Campaigning is forbidden in any official A.U.S. or Arts medium.
              <ol>
                <li>
                  Campaigning permitted in the A.U.S. Offices during the
                  campaign period
                </li>
              </ol>
            </li>
            <li>No chalking</li>
            <li>
              All campaign materials must have the updated A.U.S. logo, voting
              URL, and voting dates.
            </li>
          </ol>
        </p>
        <h2 className="browser-default subh">Approval of Campaign Material</h2>
        <p className="right_content">
          <ul className="browser-default">
            <li>
              Candidates must have all campaign material approved by the
              Elections Administrator before they can be used.
              <ul className="browser-default">
                <li>
                  The best way to obtain approval for campaign material is to
                  email a copy, proof, or link to the AUS elections
                  administrator at aus.electionco@gmail.com.
                </li>
                <li>
                  Once we review your material, we will notify you via email/
                  Facebook message as soon as possible.
                </li>
                <li>
                  Once we let you know, you may begin to use and campaign with
                  your material permitting it is within the campaign period.
                </li>
              </ul>
            </li>
            <li>
              Please like UBC Arts Undergraduate Society Elections on Facebook
              and invite it to all campaign events/pages.
            </li>
            <li>
              It is important to note that once campaign materials are approved,
              they cannot be modified without re-submitting them for approval.
            </li>
            <li>
              This doesn’t apply to something like a Twitter feed, which we
              understand will be updated constantly.
            </li>
            <li>
              However, please be aware all posts on social media must still
              follow all the same rules as other campaign material.
            </li>
          </ul>
        </p>
        <h2 className="browser-default subh">Physical Campaign Material</h2>
        <p className="right_content">
          <ul className="browser-default">
            <li>
              Candidates are advised to follow U.B.C. Policy 120 “Posting and
              Notices, Posters and Signs”, as well as other policies for
              specific buildings (such as the Student Union Building and
              M.A.S.S.)
            </li>
            <li>
              The A.U.S. will be fined if this policy isn’t followed, in which
              case the candidate will pay the fine as an elections expense.
            </li>
            <li>
              All physical campaign materials (especially posters) must be
              removed by to ensure reimbursement of campaign expenses.
            </li>
          </ul>
        </p>
        <h2 className="browser-default subh">Posters</h2>
        <p className="right_content">
          <ul className="browser-default">
            <li>
              All posters be no larger than 11” x 17” outside of classrooms. All
              posters be no larger than 8.5” x 11” within classrooms
            </li>
            <li>Poster on poster boards only.</li>
            <li>
              The posters must include: The A.U.S voting URL, The A.U.S.
              Elections logo, and voting dates.
            </li>
            <li>
              No candidate may deface, remove, or cover up, or cause it to be
              defaced, removed, or covered up, any other candidate’s poster
            </li>
            <li>
              No poster can be posted more than once on any bulletin board.
            </li>
            <li>
              Postering policies must be abided by for specific campus areas
              (ex. NEST requires stamps).
            </li>
          </ul>
          Failure to adhere to these rules will result in strict penalties at
          the discretion of the elections committee.
        </p>
        <h2 className="browser-default subh">Slates</h2>
        <p className="right_content">
          Slating, defined as the practice of candidacy in which a group of
          candidates run on a common platform and affiliate with one another,
          shall be expressly prohibited. All electoral races strictly prohibit
          the formation of slates and candidates. Examples of slate-like
          activity would be the appearance of other candidates on one’s campaign
          material, posters that resemble one another, including same or similar
          slogans. <br /> <br />
          Candidates are expected to campaign independently, candidates cannot
          endorse each other in any way whatsoever—including, but not limited
          to, coordinated classroom announcements, social media: event invites
          to other candidates events, posts on their Facebook/Instagram/Twitter
          campaign accounts, etc... Campaign volunteers can overlap, but must
          not campaign for more than one candidate at a time. For example, they
          cannot be leafleting for both candidates at the same time.
        </p>
        <h2 className="browser-default subh">Events</h2>
        <p className="right_content">
          During campaign period there will be three events hosted by the
          Elections Committee in effort to provide voters an opportunity to talk
          to candidates, ask them questions, and give candidates a platform to
          advertise themselves. Campaign events are electorally significant and
          we strongly encourage all candidates to attend them, especially the
          debate. It is critical that you bring your supporters out to pack the
          crowd, cheer for you, and give off a positive impression of your
          campaign. We encourage all candidates to promote elections events so
          that more people are inclined to come out and ultimately when polls
          open.
          <br /> <br />
          <b>
            EVENT #1: All-Candidates Debate (Michael Kingsmill Forum- AMS Nest
            4th Floor)
          </b>
          <br /> On Monday March 11th from 5pm to 9.30pm: This is your best
          opportunity to show off your platform. The best way to prepare for the
          debate is to ask questions to the current executive in your
          prospective position. Refreshments will be provided at debate.
          <br /> <br />
          <b>EVENT #2: Meet the Candidates (The Gallery 2.0, AMS Nest)</b>
          <br /> On Tuesday, March 19th from 5.30pm to 8pm: this is an informal
          event for voters to drop in and grab a drink with candidates, it’s a
          unique one-on-one opportunity to connect with constituents so be sure
          to attend and bring your friends.
          <br /> <br />
          <b>EVENT #3: The Election Results Party (Buchanan D Mass)</b>
          <br /> On Friday March 22nd at 5.30pm: We will announce the winners of
          the election. Candidates are encouraged to promote events on their
          campaign social media page as well as invite their peers to come out.
          Debates will be live streamed on the AUS Elections Facebook page.
          Please let the elections administration know in advance whether or not
          you will be attending the events, especially for the debate.
        </p>
        <h2 className="browser-default subh">Events</h2>
        <p className="right_content">
          <ul className="browser-default">
            <li>
              To ensure fair elections we have a heavily enforced spending limit
              that all candidates must comply with.
            </li>
            <li>Poster on poster boards only.</li>
            <li>
              Candidates shall spend no more than $75.00 CAD, inclusive, on
              campaign materials. However, the AUS only reimburses you the
              maximum amount of $50.
            </li>
            <li>
              Gift in-kind shall be assessed at fair market value and count
              towards this spending limit, at the election administrators
              discretion.
            </li>
            <li>
              Election expense logs can be found at the AUS website under the
              elections tab. Please staple all original receipts and proofs of
              payment to the form.
            </li>
            <li>
              We cannot reimburse you if you do not provide proof of payment for
              everything listed on your expenses log.
            </li>
            <li>
              Forms must be put in the box for them (like the nominations box in
              MASS) no later than two days after the close of voting (aka by 5pm
              On March 26th ).
            </li>
            <li>
              All candidates, regardless of whether they want to be reimbursed
              or not, MUST hand in a finalized expenses log, otherwise they will
              be penalized.
            </li>
            <li>
              All candidates, regardless of whether they want to be reimbursed
              or not, MUST hand in a finalized expenses log, otherwise they will
              be penalized.
            </li>
            <li>
              Candidates must make reasonable effort to remove all physical
              campaign material to be eligible for the full reimbursement
              percentage.
            </li>
          </ul>
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
    let page4 = <div></div>;
    console.log(this.state.relockMargin);
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
            The Elections Committee
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
            Candidate Bio and Photo
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
            Campaining
            {this.state.selectedPage === "2" ? <div className="tria" /> : ""}
            {this.state.selectedPage === "2" ? (
              <div>
                <ul>
                  <li>Approval of Campaign Material</li>
                  <li>Physical Campaign Material</li>
                  <li>Posters</li>
                  <li>Slates</li>
                  <li>Campaign Reimbursements</li>
                </ul>
              </div>
            ) : (
              ""
            )}
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
            Helpful Resources
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
            Rule Violation and Complaints
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
            Election Process and Voting
            {this.state.selectedPage === "5" ? <div className="tria" /> : ""}
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
          {this.state.selectedPage === "1" ? page1 : ""}
          {this.state.selectedPage === "2" ? page2 : ""}
          {this.state.selectedPage === "3" ? page3 : ""}
          {this.state.selectedPage === "4" ? page4 : ""}
          {this.state.selectedPage === "5" ? page4 : ""}
        </div>
      </div>
    );
  }
}
export default ElectionBook;
