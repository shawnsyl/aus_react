import React, { Component } from "react";
import ReactDOM from "react-dom";
import FlipBook from "./FlipBook";
import $ from "jquery";
import Scroller from "./Scroller.js";
window.$ = $;
class Members extends FlipBook {
  state = {
    lockLeft: "2",
    selectedPage: "0",
    left_location: 0,
    lockLeftPerc: 1
  };
  FlipPage = e => {
    if (window.pageYOffset >= 188) {
      window.scrollTo(0, 0);
    }
    this.setState({ selectedPage: e.target.id });
  };
  HandleScroll = () => {
    if (
      /*window.pageYOffset >= 188 &&
      ReactDOM.findDOMNode(this.refs["yl"]).getBoundingClientRect().top <= 0 &&!*/
      Scroller.isScrolledIntoView($("#footer"), this.state.lockLeftPerc)
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
    let page0 = (
      <div>
        <h1>President: Kat Aquino</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="kat"
            src={require("../../imgs/about/AUS - Kat.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The AUS President acts as the voice and spokesperson for the AUS. The
          President chairs all the general meetings and council in the absence
          of the Speaker of Council. They also oversee and support all of the
          AUS vice Presidents with their various projects. The President also
          acts as a liaison for both the Faculty of Arts and Alma Mater Society
          as a voting member for the Faculty of Arts Council and AMS President
          Caucus. Through their job, the AUS President represents the larger
          Arts community.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hi everyone! I'm Katherine Ann Aquino but most people just call me
          Kat. I'm a 5th-year Cognitive Systems Major and Creative Writing
          Minor. I found my home at the AUS in my second yeaer at UBC and have
          decided to stay with the organization ever since. This is my second
          year as the President and I am so grateful for the opportunity to
          serve the society and work to improve student life as an Arts student.
          I have weekly office hours if you ever want to chat (feel free to
          bring me bubble tea!).
        </p>
      </div>
    );
    let page1 = (
      <div>
        <h1>Vice President Student Life:</h1>
        <h1>Casandra Shayne Avanzado</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="cas"
            src={require("../../imgs/about/AUS - Cas.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The VP Student Life improves and enhances Arts students' social lives
          through the planning and execution of several events including
          KickstART (formerly known as StARTup), Arts Week, CoffeehAUS, Lilac
          Gala, and The Great Arts Sendoff. This portfolio aims to develop new
          initiatives to improve student life including supplemental AUS events
          throughout the year and assist departmental clubs in organizing and
          planning events. The VP Student Life oversees the Social, Outreach,
          and Sports Committees and works with other AUS portfolios to ensure
          financial and marketing materials are delivered.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hi! I'm Casandra Shayne Avanzado, or call me Cas! I'm ecstatic to be
          serving as your 2019/2020 VP Student Life for the Arts Undergraduate
          Society. I am a fifth-year Cognitive Systems major in Brain and
          Cognition. A bit about me: I'm a coffee addict with a knack for
          psychological/crime shows and movies, self-help books, Game of
          Thrones, Brooklyn Nine-Nine, travel, and most importantly - student
          life initiatives. My favourite spots at UBC are Wreck Beach and IKB
          because I'm always there. Fun fact: I have a wide range in music taste
          so if you love the 1975, 6LACK, blacbear, Drake, Beyonc&eacute;,
          Flume, NGHTMRE, ODESZA, SZA, or pre-disbanded SNSD or SISTAR hit me
          up! You'll probably see me around campus with a coffe in hand 90% of
          the time, or walking up a slight slope or stairs heavily out of breath
          - but don't be intimidated by my short stature, I'm easygoing and
          won't bite. Or come to my office hours!
        </p>
      </div>
    );
    let page2 = (
      <div>
        <h1>Vice President Academic: Kana Saarni</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="kana"
            src={require("../../imgs/about/AUS - Kana.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The VP Academic focuses on the academic and wellness aspects of arts
          student life. I oversee the Academic Support Team, the Humanities and
          Social Science Conference Team, and the Health and Wellness Team. My
          role aims to expand academic opportunities and tutoring resources for
          Arts students. As well, the VP Academic works on the expansion of
          substantive mental health policy, wellness workshops, and wellbeing
          resources across the faculty of arts.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hi, my name is Kana Saarni and I'm excited to be serving as your VP
          Academic of the Arts Undergraduate Society for the 2019-2020 school
          year. I am a Fourth Year Political Science major and currently on a
          Co-op term with UBC. I have a passion for reading cheesy YA books,
          photography, and buying plants. You'll see me around campus either
          volunteering with REC on their media team, working at Brock Hall with
          Student Communications Services or in Buchanan either working on AUS
          projects or cramming for my next political science exam. Feel free to
          say hi on campus if you have any questions about life at UBC or just
          need a friend to talk to!
        </p>
      </div>
    );

    let page3 = (
      <div>
        <h1>Vice President Administration Peter Fang</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="peter"
            src={require("../../imgs/about/AUS - Peter.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The VP Administration directs the Society's daily administrative tasks
          and strategizes long-term organizational goals. I oversee the
          Society's sustainability committee, office administration team, and
          equity and inclusion team. This year, I seek to expand the Society's
          sustainability guidelines, develop organizational equity practices, as
          well as re-structuring MASS Booking System and locker rental requests
          to better streamline services offered by the AUS.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hello, fellow Arts student, I'm Peter Fang and I'm honoured to serve
          you as the VP Administration for the 2019/2020 school year. I am a
          Third-Year Sociology major and minoring in Commerce. In my spare time,
          I like to meditate, explore different hiking routes, and check out new
          bubble tea shops around Vancouver. You'll probably find me either in
          IKBae trying to figure out my next paper topic, watching the sunset at
          Wreck Beach, or working on the next exciting project with my AUS fam
          in Bucahanan D. Feel free to say Hi or come visit me during my office
          hours!
        </p>
      </div>
    );

    let page4 = (
      <div>
        <h1>Vice President Engagement: Michelle Choi</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="michelle"
            src={require("../../imgs/about/AUS - Michelle.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The VP Engagement overlooks marketing and contetn creation for the
          Arts Undergraduate Society. With the goal of creating a unique Arts
          brand expanding AUS presence on campus, the VP pushes for new and
          creative initiatives on various social media channels. The VP is also
          in charge of the creation and distribution of UBC Arts merchandise,
          with the vision of increasing AUS awareness on campus.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hello, beautiful people of Arts! I'm Michelle Choi and I am
          priviledged to serve you as the VP Engagement. I am a second-year
          student (hopefully) majoring in International Relations and minoring
          in Commerce. You will probably recognize me around campus as the tall
          Asian girl&mdash;I like to think being tall is a personality trait
          when it really isn't, haha. I also like to think that my wide range of
          music taste is a personality trait. We will probably get along well if
          you like the following: Tyler, the Creator A$AP Rocky, Kanye West,
          Billie Eilish, Nav, Rich, Brian, Frank Ocean, Jay Park, DPR Live (to
          name a few). Thank you for letting me serve you and make sure to
          support the AUS by following us on EVERYTHING! (Follow me too, while
          you're at it ;-))
        </p>
      </div>
    );

    let page5 = (
      <div>
        <h1>Vice President External: Nealie Alavie</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="nealie"
            src={require("../../imgs/about/AUS - Nealie.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          VP External acts as a liaison between the AUS and outside parties,
          including faculties and their own undergraduate societies. The VP
          External is in charge of a team which plans and executes annual
          networking events, such as Limitless, as well as social events such as
          the International Food Fair. They maintain and create Alumni realtions
          whilst also obtain sponsorships for AUS events.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hi, my name is Nealie Alavie and I'm very excited to serve as your
          2019/2020 AUS Vice President External. I'm currently entering my third
          year of a GRSJ major/LASO minor degree and looking forward to the day.
          I write my last paper. I enjoy making curated playlists for my 23
          Spotify followers and embarrassing myself on the internet. You can
          find me around campus helping out at AUS events or just walking
          to-and-from classes. Please feel free to say hi and ask any questions
          abou the AUS, student government or just life in general. See you
          around!
        </p>
      </div>
    );

    let page6 = (
      <div>
        <h1>Vice President Academic: Ali Ahmadi</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="ali"
            src={require("../../imgs/about/AUS - Ali.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The VP Finance is responsible for the transparent allocation of funds
          to better facilitate opportunities for student engagement, The finance
          portfolio is also responsible for processing grants and
          reimbursements. With that in mind, there lies an emphasis on
          responsible expenditure through a more inclusive representation and
          transparent protocol that would involve a well-strucutured team
          coordinating and communicating.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hi, everyone;
          <br /> My name is Ali Ahmadi. I am your new VP Finance for the
          upcoming year. As a third-year student intending to pursue a degree in
          international relations and philosophy, I now feel part of a greater
          family. Though I endured through tough nights for better grades, it
          has been my involvement in student politics that enrich my university
          experience. My first foray into the ordeals of budgeting and planning
          was a minor but memorable one. As a member of the Port Moody Youth
          Focus committee, I contributed to the coordination and budgeting of
          municipal events. In the past year, I had the pleasure of serving as a
          student-at-large representative and a member of the AUS finance
          committee. My role as the grant coordinator renedred the pleasure of
          being in contact with various council members. With the help of the VP
          and finance committee members, we provided financial aid to more than
          12 recipients. Whether it was covering operational or conference
          costs, our help lifted financial burdens off students' shoulders. I
          would like to continue that tradition and help facilitate more
          opportunities for students and clubs to enrich their experience beyond
          the lecture halls. My main goal as VP finance is to not only ensure
          transparency and efficient allocations of funds but also to foster
          greater diversity among the council members who are representing the
          wide variety of activities organized by the largest faculty on the
          campus.
        </p>
      </div>
    );

    let page7 = (
      <div>
        <h1>Vice President Academic: Bai Saguin</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="bai"
            src={require("../../imgs/about/AUS - Bailey.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The VP Internal focuses on the internal members of the AUS. The VP
          Internal oversees hiring for the AUS, enhancing the experience for the
          members within the AUS, as well as the Elections such as the fall
          by-election and the Spring General Election. My role aims to ensure
          the internal functioning of the AUS through the management of its
          members.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hi, my name is Bailey Saguin and I am super excited to be serving as
          the VP Internal of the Arts Undergraduate Society for the 2019-2020
          academic year. I am a Psychology Major going into my Fifth-Year here
          at UBC. I have been a part of the AUS since 2016 working my way up
          from a Member-At-Large, to a Sports Coordinator, and last year as the
          AVP Student Life before finding my role this year as the VP Internal.
          I have a passion for sports of all kinds but specifically Football,
          Basketball, and a little UFC here and there. I am a die-hard New
          Orleans Saints fan and still trying to get over the blatant missed
          pass interference call in the recent NFC Championship Game. I am also
          a 3x UBC Intramural Flag Football Champion (Two-tier 2 Championships
          and one Tier 1). Find me in the AUS office during and outside my
          office hours to find out how to get involved with the AUS, talk some
          sports, or see if you can beat me at Mario Kart (I bring my Nintendo
          Switch everywhere I go).
        </p>
      </div>
    );

    let page8 = (
      <div>
        <h1>Chief AMS Representative: Kevin Zhang</h1>
        <div className="image-cropper">
          <img
            className="my-picture"
            id="kevin"
            src={require("../../imgs/about/AUS - Kevin.jpg")}
          />
        </div>
        <p className="right_content boldy">Job Description:</p>
        <p className="right_content">
          The Chief AMS Representative is the frontline point of contact between
          the Alma Mater Society and the Arts Undergarduate Society. I support
          the AMS Arts Caucus in facilitating robust representation on AMS
          Committees and propelling AUS voices on AMS Council. As a major point
          of contact, the Chief AMS Rep will frequently find themsevles dealing
          with all principal portfolios within the AUS and AMS Executive,
          safeguarding both team cohesion and functionality. Most importantly,
          however, the Chief AMS Rep works to hold both the AUS and AMS Councils
          accountable on their actions and mandates, ensuring that any decisions
          passed by the governing bodies are passed with due diligence and
          transparency.
        </p>
        <br />
        <p className="right_content boldy">About Me:</p>
        <p className="right_content">
          Hello! My name is Kevin and I'm a 3rd year student majoring in
          Cognitive Systems. I started my time here at UBC not too sure what I
          wanted to get involved with, but I eventually found myself working
          with student government and the AMS. In my first and second years, I
          was involved with the Orchard Commons Residence Association, which
          falls under the UBC RHA (highly recommend everyone living in residence
          to get involved with their residence council). If I had to pick one
          show to watch for the rest of my life it'd probably be The Office, but
          you'll also find me quoting lines from SpongeBob. Around campus,
          you'll see me speed-walking to get to class on time, or at Allard
          library trying to finish an essay. I look forward to working this year
          to advance student interests on council; feel free to shoot me an
          email at: kevinzhang1@alumni.ubc.ca at any time!
        </p>
      </div>
    );
    return (
      <div className="flipbook">
        <div
          ref="leftPanel"
          className={
            this.state.lockLeft === "0" ? "left_panel_hide" : "left_panel"
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
              this.state.selectedPage === "8" ? "chapter purp" : "chapter"
            }
            id="8"
            onClick={e => {
              this.FlipPage(e);
            }}
          >
            Chief AMS Rep
            {this.state.selectedPage === "8" ? <div className="tria" /> : ""}
          </div>
        </div>
        <div
          className={
            this.state.lockLeft === "0"
              ? "line"
              : this.state.lockLeft === "2"
              ? "line"
              : "line"
          }
          ref="yl"
        />
        <div
          className={
            this.state.lockLeft === "0"
              ? "right_panel"
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
          {this.state.selectedPage === "6" ? page6 : ""}
          {this.state.selectedPage === "8" ? page8 : ""}
        </div>
      </div>
    );
  }
}

export default Members;
