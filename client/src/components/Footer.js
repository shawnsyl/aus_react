import React, { Component } from "react";

import "./Footer.css";
class Footer extends Component {
  state = {};

  render() {
    return (
      <div id="footer">
        <div id="icons">
          <div id="fb">
            <img src={require("../imgs/fb.png")} />
          </div>
          <div id="ig">
            <img src={require("../imgs/ig.png")} />
          </div>
          <div id="twit">
            <img src={require("../imgs/twit.png")} />
          </div>
          <div id="linkedin">
            <img src={require("../imgs/linkedin.png")} />
          </div>
        </div>
        <div id="footer_addr">
          <img src={require("../imgs/white_logo.png")} className="logo" />
          <p>Arts Undergraduate Society, UBC</p>
          <p>Vancouver Campus</p>
          <p>Buchanan D140</p>
          <p>1866 Mail Mall</p>
          <p>Vancouver, BC Canada V6T 1Z1</p>
          <p>Tel 602 822 4403</p>
          <br />
          <p id="copyright">© 2019 BY UBC ARTS UNDERGRADUATE SOCIETY</p>
        </div>
        <div className="admin_login">
          <p />
          {"Admin Login"}
        </div>
      </div>
    );
  }
}

export default Footer;
