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
      this.setState({ lockLeftPerc: 0.95 });
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
          <b>Email: </b>
          <a href="mailto:aus.electionsco@gmail.com">
            aus.electionsco@gmail.com
          </a>
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
                  administrator at
                  <a href="mailto:aus.electionsco@gmail.com">
                    aus.electionsco@gmail.com
                  </a>
                  .
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
        <h1 className="browser-default">Helpful Resources</h1>
        <p className="right_content">
          <ul className="browser-default">
            <li>
              The AMS Market Copying standard can be found online. This chart
              will help candidates log their expenses for printing and know
              market prices. Generally, candidates will likely find that
              printing and copying is their most significant cost of materials
              during their campaign. AMS Elections has generated a list of
              “market values” for copying in various sizes that will be used as
              the maximum values allowed for reimbursement. These values do not
              include taxes, which will of course be reimbursed. These values
              are “per copy” values.
            </li>
            <li>
              Items selected for market value are ones that have been
              traditionally used by many candidates in previous elections.
            </li>
            <li>
              Other campaign materials may be used, provided they are approved
              by the Elections Committee – please just send a quick email to us
              and ask.
            </li>
            <li>
              It is the strong hope of the Elections Committee that candidates
              will use their allocated funds to explore new and comprehensive
              ways of engaging the electorate. Hint-Hint try not to spend all
              your money on posters.
            </li>
            <li>
              Each poster is assessed at the market value for that colour and
              size regardless of the price paid.
            </li>
          </ul>
        </p>
      </div>
    );
    let page4 = (
      <div>
        <h1 className="browser-default">Rule Violation and Complaints</h1>
        <p className="right_content">
          <ul className="browser-default">
            <li>
              Please go through the election rules that are fully outlined in
              AUS code and bylaws, not knowing about a rule will not exempt you
              from penalties.
            </li>
            <li>
              The elections committee will be actively enforcing rules, and
              encourage other candidates to do so as well, by notifying the
              committee when other candidates break rules. All complaints must
              be made through the AUS elections complaint form, which can be
              found online at the AUS website under the elections tab, within 24
              hours of the infringement.
            </li>
            <li>
              Some sort of physical evidence must be submitted with every
              complaint form in order to be seriously considered.
            </li>
            <li>
              Upon receipt of an emailed or hard copy complaint form from any
              candidate, student, and/or campus staff member, the elections
              committee will investigate and issue a verdict in the form of a
              warning or penalty.
            </li>
          </ul>
        </p>
        <h2 className="browser-default subh">Penalties</h2>
        <p className="right_content">
          The type and severity of the penalty is determined by the elections
          committee and is ultimately the decision of the Elections
          Administrator. All penalties will be recorded and advertised to the
          general public via AUS social media pages and the AUS website, when
          they occur. This can not only be embarrassing, but can be electorally
          damaging to your campaign as well.
          <br />
          <br />
          Penalties imposed by the Elections Committee include, but are not
          limited to, the following:
          <ol className="browser-default alpha-list">
            <li>Issuing of warnings</li>
            <li>Posting notice of the infraction on the elections website</li>
            <li>
              Suspension or removal of campaigning materials or campaigning
              privileges.
            </li>
            <li>Posting notice of the infraction on the electoral ballot</li>
            <li>Fines or withholding of financial reimbursements</li>
            <li>Cancellation of reimbursement</li>
            <li>Disqualification</li>
          </ol>
          <br />
          The party accused for violation will be given the opportunity to
          present a defense or explain their actions, the elections committee
          will decide unanimously whether the defense is valid or not. The
          meeting minutes for the same shall be uploaded within two hours of the
          committee meeting onto AUS Elections Facebook Page so as to ensure
          transparency in the unanimous decision.
          <br />
          <br />
          If a candidate feels that they have been unjustly penalized, they may
          appeal to the AUS election appeals committee. The elections appeals
          committee will consist of 1) the speaker of the AUS council, 2) the
          AUS elections administrator (or the Associate Elections Administrator
          in their absence) and one person representing the appellant (this may
          be the appellant themselves or someone speaking officially on their
          behalf). The speaker of the council shall the be chair of the
          committee.
          <br />
          <br />
          If still in need of appeal, the appellant may appeal to the AMS
          Elections Administrator.
        </p>
      </div>
    );
    let page5 = (
      <div>
        <h1 className="browser-default">Election Process and Voting</h1>
        <p className="right_content">
          Voting polls will open on Monday March 18th at 12.01AM and close on
          Friday March 22nd at 5PM, all voting will be done electronically.
          <br />
          <br />
          * The voting URL to distribute to voters is amsvoting.as.it.ubc.ca, it
          must be included on all campaign material (electronic and physical).
          Only Arts Undergraduate Students are permitted to vote in AUS
          elections. Polling stations will be set up at various times and around
          the Buchanan Arts Buildings as well as at the Nest (pending AMS Nest
          Booking approval) throughout voting week. Polling stations have a 10
          meter “buffer zone” where no campaigning will occur, if caught
          campaigning near a polling station you will receive strict warning
          from the polling clerk, failure to comply will lead to immediate
          disqualification.
          <br />
          <br />
          *Voting for Arts Student Senator race will start on Monday March 18th
          at 12.01AM and close on Friday April 5th at 5PM. The results for the
          Arts Student Senator race will be announced online.
          <br />
          <br />
          If you have any questions, email{" "}
          <a href="mailto:aus.electionsco@gmail.com">
            aus.electionsco@gmail.com
          </a>
          . Remember to be creative, kind, and have fun!
          <br />
          <br />
          Note: If the location of an event changes, the elections committee
          with inform the candidates via email and by changing the event
          location of Facebook.
        </p>
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
          {this.state.selectedPage === "5" ? page5 : ""}
        </div>
      </div>
    );
  }
}
export default ElectionBook;
