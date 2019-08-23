import React, { Component } from "react";

import Button from "../components/contact/Button.js";
import Form from "../components/contact/Form.js";
import Navbar from "../components/Navbar.js";

import "./ContactMain.css";
import "../components/contact/Button.css";

class ContactMain extends Component {
  render() {
    const phone = <img src={require("../imgs/contact/phone.png")} />;
    const email = <img src={require("../imgs/contact/email.png")} />;
    const location = <img src={require("../imgs/contact/location.png")} />;
    const call = <p>CALL US</p>;
    const emailus = <p>E-MAIL US</p>;
    const drop = <p>DROP BY</p>;
    const phonenum = <p>604 822 4403</p>;
    const eaddr = <p>aus.president@ubc.ca</p>;
    const theaddr = (
      <p>
        Buchanan D140,
        <br />
        1866 Main Mall
        <br />
        Vancouver, BC,
        <br />
        V6T 1Z1
      </p>
    );

    console.log(this.props.location);

    return (
      <div className="contact">
        <div id="contact_us">
          <div id="contact_head">CONTACT US</div>
          <p>Any comments, questions, or advice?</p>
        </div>
        <div id="buttons">
          <Button pic={phone} text1={call} text2={phonenum} />
          <Button pic={email} text1={emailus} text2={eaddr} />
          <Button pic={location} text1={drop} text2={theaddr} />
        </div>
        <h3>Or...</h3>
        <p id="t1">
          Leave AUS a message here and we will do our best to get back to you!
        </p>
        <Form />
      </div>
    );
  }
}

export default ContactMain;
