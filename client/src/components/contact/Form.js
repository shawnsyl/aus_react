import React, { Component } from "react";
import axios from "axios";

import "./Form.css";
import { baseURL } from "../../baseURL";
class Form extends Component {
  state = {};

  resetForm() {
    document.getElementById("contact-form").reset();
  }
  handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    console.log(name, email, subject, message);
    axios({
      method: "POST",
      url: baseURL + "/send/contact",
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  render() {
    return (
      <div id="form_wrap">
        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="browser-default"
            id="name"
            required
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="E-mail*"
            className="browser-default"
            id="email"
            required
          />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            className="browser-default"
            id="subject"
            required
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
