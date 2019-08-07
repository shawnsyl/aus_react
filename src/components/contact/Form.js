import React, { Component } from "react";

import "./Form.css";

class Form extends Component {
  state = {};
  render() {
    return (
      <div id="form_wrap">
        <form method="post" action="">
          <input type="text" name="name" placeholder="Name*" />
          <br />
          <input type="text" name="email" placeholder="E-mail*" />
          <br />
          <input type="text" name="subject" placeholder="Subject*" />
          <br />
          <textarea
            type="text"
            id="message"
            placeholder="Message"
            align="top"
            style={{ height: "235px" }}
            defaultValue={""}
          />
        </form>
        <div id="submit">
          <span>Send</span>
        </div>
      </div>
    );
  }
}

export default Form;
