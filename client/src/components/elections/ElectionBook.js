import React, { Component } from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
import Scroller from "../about/Scroller.js";
class ElectionBook extends Component {
  state = {
    selectedPage: "0",
    selectedPositions: new Array(10).fill(false),
    lockLeft: "2",
    relockMargin: 0,
    prevLock: false
  };
  FlipPage = e => {
    e.preventDefault();
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 188) {
      this.setState({
        selectedPage: e.target.id
      });
      console.log("locked");
    } else {
      this.setState({ selectedPage: e.target.id });
    }
  };
  HandleScroll = () => {
    console.log("scroll");
    if (
      window.pageYOffset >= 188 &&
      ReactDOM.findDOMNode(this.refs["yl"]).getBoundingClientRect().top <= 0 &&
      !Scroller.isScrolledIntoView($("#footer"), 0.6)
    ) {
      this.setState({
        lockLeft: "0", //lock
        relockMargin: document.documentElement.scrollTop - 200
      });
    } else {
      this.setState({
        lockLeft: "2" //unlock
      });
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.HandleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.HandleScroll);
  };

  openPosition = pos => {
    const newSelPos = this.state.selectedPositions.slice();
    newSelPos[pos] = !newSelPos[pos];
    this.setState({ selectedPositions: newSelPos });
  };

  render() {
    let page0 = (
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
    let page1 = (
      <div>
        <h1>Faculty of Arts</h1>
        <p className="right_content">
          UBC houses over 14,000 arts undergraduate students and over 25
          different departments. From sociology to computer science, and Asian
          studies to cognitive systems, the variety of Arts programs makes this
          faculty a diverse and all- encompassing faculty.
          <br className="browser-default" />
          <br className="browser-default" />
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
        <p className="right_content">
          These position descriptions are in line with the 2019 Code of
          Procedures and the specific responsibilities, duties, and positions
          are subject to change at the will of the AUS council. Click the
          positions below for further information.
        </p>
        <br />
        <div className="role">
          <h2>
            President
            <div
              className={
                !this.state.selectedPositions[0] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(0)}
            />
          </h2>
          {this.state.selectedPositions[0] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The Executive Committee
                <br />
                Strategic Planning
                <br />
                Governance Committee
                <br />
                Executive Management
                <br />
                Arts Student Centre Planning &amp; Execution Committee
                <br />
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Be the voice and spokesperson for the AUS
                <br />
                Chair all the general meetings of the AUS in the absence of the
                Speaker of Council
                <br />
                Responsible for calling and drafting all Council agenda items
                <br />
                Supervise and coordinate the Executive of the AUS
                <br />
                Sit on all committees as a non-voting member
                <br />
                Attend the AMS All Presidents' Meetings
                <br />
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Vice President Student Life
            <div
              className={
                !this.state.selectedPositions[1] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(1)}
            />
          </h2>
          {this.state.selectedPositions[1] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The Student Life Committee
                <br />
                Outreach &amp; Spirit
                <br />
                stARTup
                <br />
                Arts Week
                <br />
                The Great Arts Sendoff
                <br />
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Planning and executing the (3) main AUS events throughout the
                year: stARTup, Arts Week , and the Great Arts Sendoff
                <br />
                The Planning and execution of supplemental AUS events throughout
                the year
                <br />
                Development of new initiatives to improve student life for Arts
                Students
                <br />
                Assisting departmental clubs in organizing and planning events
                <br />
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Vice President Academic
            <div
              className={
                !this.state.selectedPositions[2] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(2)}
            />
          </h2>
          {this.state.selectedPositions[2] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The Academic Committee
                <br />
                The Health &amp; Wellness Committee
                <br />
                Mental Health Advocacy Committee
                <br />
                Academic Conference
                <br />
                Academic Support &amp; Advocacy
                <br />
                UBC Career Services
                <br />
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Work with the Faculty of Arts on academic initiatives
                <br />
                Plan and organize events promoting the well-being of Arts
                students
                <br />
                Act as the liaisons between the AUS and UBC career services
                <br />
                Plan and host events surrounding academic conferences, academic
                support, mental health advocacy, and tutoring within the Arts
                Undergraduate Society
                <br />
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Vice President Administration
            <div
              className={
                !this.state.selectedPositions[3] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(3)}
            />
          </h2>
          {this.state.selectedPositions[3] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The Administrative Portfolio
                <br />
                Building Operations &amp; Management
                <br />
                Governance Committee
                <br />
                Arts Student Centre Planning &amp; Execution Committee
                <br />
                Archives
                <br />
                Sustainability Committee
                <br />
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Responsible for recording minutes and submitting minutes to the
                Communications department for website release in the absence of
                a Clerk of Council
                <br />
                Hire a building manager and oversee the maintenance and bookings
                of MASS and/or the Arts Student Centre
                <br />
                Oversee locker rentals and collect revenue
                <br />
                Uphold authority to revise and restructure the AUS Code or
                Procedures and present all changes to Council
                <br />
                Oversee all executive transition reports
                <br />
                Notify clubs of their duties and responsibilities to remain in
                good-standing within the society
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Vice President Engagement
            <div
              className={
                !this.state.selectedPositions[4] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(4)}
            />
          </h2>
          {this.state.selectedPositions[4] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The Engagement Portfolio
                <br />
                Content Creation
                <br />
                Advertising &amp; Marketing
                <br />
                Brand Management
                <br />
                Merchandise Committee
                <br />
                Social Media &amp; Website Management
                <br />
                Student Engagement &amp; Research
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Create a unique and recognizable AUS and Arts brand
                <br />
                Facilitate student consultations through the use of various
                research methods (online and on-campus surveys)
                <br />
                Increase student awareness of the AUS
                <br />
                Expand AUS presence on campus with new and creative initiatives
                <br />
                Oversee all forms of content creation and marketing
                <br />
                Creation, distribution, and sale of all AUS merchandise
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Vice President External
            <div
              className={
                !this.state.selectedPositions[5] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(5)}
            />
          </h2>
          {this.state.selectedPositions[5] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The External Committee
                <br />
                Alumni Relations
                <br />
                Limitless &amp; International Food Fair
                <br />
                Philanthropy
                <br />
                Sponsorships
                <br />
                Professional Development
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Act as a liaison between the AUS and all outside parties,
                including other faculties and their respective Undergraduate
                Societies
                <br />
                Plan and execute annual networking events, more commonly known
                as Limitless
                <br />
                Obtain sponsorship from related external parties for AUS events
                <br />
                Maintain relationship and outreach between the AUS and UBC Arts
                Alumni
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Vice President Finance
            <div
              className={
                !this.state.selectedPositions[6] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(6)}
            />
          </h2>
          {this.state.selectedPositions[6] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The Finance Portfolio
                <br />
                Budget Committee
                <br />
                Grants Committee
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Responsible for the finance and overall fiscal health of the AUS
                <br />
                Act as the sole signing officer of the AUS' main finance account
                with the Alma Mater Society (AMS)
                <br />
                Create and submit the annual budget on schedule and as required
                by the AMS Finance Commission
                <br />
                Sign off on approve expenditures, contracts, and reimbursements
                <br />
                Act as a liaison between the AUS and the AMS' office on all
                financial matters of the society
                <br />
                Oversee the grant application process
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Vice President Internal
            <div
              className={
                !this.state.selectedPositions[7] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(7)}
            />
          </h2>
          {this.state.selectedPositions[7] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                The Internal Portfolio
                <br />
                Human Resources
                <br />
                Elections
                <br />
                Executive &amp; Council Orientation
                <br />
                Sustainability Committee
                <br />
                Internal Team Building
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Create an enjoyable and welcoming internal AUS culture
                <br />
                Organize team-building events and socials for all internal AUS
                members throughout the year
                <br />
                Oversee the Spring Elections &amp; Fall By-Elections
                <br />
                Organize and end-of-year internal social and member recognition
                ceremony
                <br />
                Facilitate sustainability events and initiatives throughout the
                year
                <br />
                Work alongside the VP Administration to ensure proper transition
                and member turnover
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The Chief AMS Rep
            <div
              className={
                !this.state.selectedPositions[8] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(8)}
            />
          </h2>
          {this.state.selectedPositions[8] ? (
            <div>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Highlight topics that are particularly important for Arts
                students
                <br />
                Liaise between the AMS and the AUS Executives
                <br />
                Facilitate the AUS' AMS Representatives meetings
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="role">
          <h2>
            The AMS Representatives (5)
            <div
              className={
                !this.state.selectedPositions[9] ? "tria" : "tria flipped"
              }
              onClick={() => this.openPosition(9)}
            />
          </h2>
          {this.state.selectedPositions[9] ? (
            <div>
              <h4>Committees &amp; Projects:</h4>
              <p className="right_content">
                Varying AMS Committees
                <br />
                The Arts AMS Caucus
              </p>
              <h4>Duties &amp; Responsibilities:</h4>
              <p className="right_content">
                Represent the interests of Arts students in UBC community
                <br />
                Chair or become members of their chosen AMS committee
                <br />
                Attende bi-weekly Alma Mater Society Council
              </p>
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
    /*
    
            this.state.lockLeft === "0"
              ? "left_panel_locked"
              : this.state.lockLeft === "2"
              ? "left_panel"
              : "left_panel_relocked"
    */
    return (
      <div className="flipbook">
        <div
          ref="leftPanel"
          className={
            this.state.lockLeft === "0" ? "left_panel_locked" : "left_panel"
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
              this.state.selectedPage === "4" ? "chapter purp" : "chapter"
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
