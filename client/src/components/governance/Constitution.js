import React, { Component } from "react";

class Constitution extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="hand-crop">
          <img
            className="hand"
            src={require("../../imgs/governance/purple hand.png")}
            alt="hand img"
          />
        </div>
        <h1>Constitution</h1>
        <h2>Name:</h2>
        <p>
          The name of the organization shall be the “Arts Undergraduate Society”
          of the University of British Columbia, hereafter referred to as the
          “A.U.S.”
        </p>
        <h2>Objectives:</h2>
        <ul className="obj">
          <li>
            To promote, direct and/or sponsor such activities—academic, social,
            athletic, and professional—as will benefit undergraduate students of
            the Faculty of Arts.
          </li>

          <li>
            To act as a liaison between Arts students and the Faculty of Arts,
            the University of British Columbia, the Alma Mater Society and any
            other recognized society or organization.
          </li>

          <li>
            To give attention to any matters affecting the members of the
            society.
          </li>

          <li>To encourage and promote the Arts community spirit at U.B.C.</li>

          <li>
            To organize, promote, and produce Arts County Fair on the last day
            of classes each year.
          </li>
        </ul>
        <h2>Membership: </h2>
        <p>
          Membership shall consist of all undergraduate students currently
          registered in the Faculty of Arts at the University of British
          Columbia. Membership shall consist of students who have paid their
          A.U.S. membership fee and whose programs lead towards either a
          Bachelor of Arts or Bachelor of Fine Arts degree.
        </p>
        <h2>Officers of the Arts Undergraduate Society:</h2>
        <p>
          The primary duty of officers of the Arts Undergraduate Society is to
          promote the interests of Arts students through the Arts Undergraduate
          Society Council, as defined in Code. Officers of the Arts
          Undergraduate Society who have been delegated to represent the
          interests of Arts students to other bodies must nevertheless fulfill
          all their duties as elected officers of the Arts Undergraduate
          Society.
        </p>
        <h2>Arts County Fair:</h2>
        <p>
          The name, production, and promotion of Arts County Fair are the
          property of the Arts Undergraduate Society.
        </p>
        <h2>Amendments:</h2>
        <p>
          This Constitution shall only be amended by a referendum, for which a
          majority of voting A.U.S. members must approve of the amendments.
          Quorum shall be ten percent of A.U.S. members, the exact number to be
          set by the Registrar’s Office.
        </p>
      </>
    );
  }
}

export default Constitution;
