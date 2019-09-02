import React, { Component } from "react";

import "./Form.css";

class Form extends Component {
  state = {};
  render() {
    return (
      <div id="form_wrap">
        <form method="post" action="">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="browser-default"
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="E-mail*"
            className="browser-default"
          />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            className="browser-default"
          />
          <br />
          <textarea
            type="text"
            id="message"
            placeholder="Message"
            align="top"
            style={{ height: "235px" }}
            defaultValue={""}
            className="browser-default"
          />
          <div className="btnwrap">
            <input
              type="submit"
              value="Send"
              id="submitbtn"
              className="browser-default"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
