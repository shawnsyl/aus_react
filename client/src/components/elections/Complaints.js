import React, { Component } from "react";
import axios from "axios";

import "../../views/ElectionsMain.scss";
import { baseURL } from "../../baseURL";
const FormData = require("form-data");
class Complaints extends Component {
  state = {
    selectedFile: null
  };
  resetForm = () => {
    document.getElementById("complaint-form").reset();
  };
  fileHandler = e => {
    e.preventDefault();
    console.log(e.target.files);
    this.setState({ selectedFile: e.target.files });
  };
  handleSubmit = e => {
    e.preventDefault();
    let data = new FormData();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const candidate = document.getElementById("candidate").value;
    const desc = document.getElementById("desc").value;
    data.set("name", name);
    data.set("email", email);
    data.set("candidate", candidate);
    data.set("desc", desc);
    const files = [...this.state.selectedFile];
    files.forEach(file => {
      data.append("file", file);
    });

    axios({
      method: "POST",
      url: baseURL + "/send/complaint",
      data: data,
      headers: { "Content-Type": "multipart/form-data" }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  HandleClick = e => {
    this.refs.fileUploader.click();
  };
  render() {
    return (
      <div class="complaints">
        <h1>AUS General Elections Complaint Form</h1>
        <p>
          This form can be used to submit complaint to the elections committee
          regarding candidates, or their volunteers.
        </p>
        <p>
          Protestations and complaints shall be submitted in writing and must
          include:
        </p>
        <ol>
          <li> The name of the complainant; </li>
          <li> The name of the candidate in question; </li>
          <li> A description of the alleged violations; </li>
          <li> Evidence of the aforementioned violation; and</li>
          <li>
            Signatures of at least three Active Members of the Arts
            Undergraduate Society. (Student Id numbers suffice as signatures)
          </li>
        </ol>
        <p className="required">*Required</p>
        <br />
        <div id="form_wrap">
          <form id="complaint-form" onSubmit={this.handleSubmit} method="POST">
            <label for="name">
              First Name <span className="required">*</span>
            </label>{" "}
            <br />
            <input
              id="name"
              type="text"
              name="name"
              className="browser-default"
              required
            />
            <br />
            <label for="email">
              Email Address<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              className="browser-default"
              required
            />
            <br />
            <label for="candidate">
              Name of Candidate<span className="required">*</span>
            </label>
            <br />
            <input
              type="text"
              id="candidate"
              name="candidate"
              required
              className="browser-default"
            />
            <br />
            <label for="desc">
              Description of Alleged Violation
              <span className="required">*</span>
            </label>
            <textarea
              type="text"
              id="desc"
              align="top"
              name="desc"
              style={{ height: "235px" }}
              defaultValue={""}
              className="browser-default"
              required
            />
            <div className="form-extra">
              <p>
                Evidence of the aforementioned violation
                <span className="required">*</span>
              </p>
              <input
                type="file"
                id="file"
                ref="fileUploader"
                onChange={this.fileHandler}
                style={{ marginLeft: "95px" }}
                multiple
              />
              <br />
              <p>
                I hereby consent that all information in this form is true to
                the best of my knowledge<span className="required">*</span>
              </p>
              <label className="container">
                <input type="radio" name="radio" required />
                Yes
              </label>
            </div>
            <div className="btnwrap" style={{ float: "left" }}>
              <input
                type="submit"
                value="Send"
                id="submitbtn"
                className="browser-default"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Complaints;
/*


              <div className="addfile" onClick={this.HandleClick}>
              <p style={{ color: "blue" }}>Add File</p>
                <input type="file" id="file" ref="fileUploader" />
              </div>
*/
