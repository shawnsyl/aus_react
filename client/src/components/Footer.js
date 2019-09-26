import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
class Footer extends Component {
  state = {};

  render() {
    return (
      <div id="footer">
        <div id="icons">
          <div id="fb">
            <a
              href="https://www.facebook.com/ubcaus/?ref=bookmarks"
              target="_blank"
            >
              <img src={require("../imgs/fb.png")} />
            </a>
          </div>
          <div id="ig">
            <a href="https://www.instagram.com/ubcaus/" target="_blank">
              <img src={require("../imgs/ig.png")} />
            </a>
          </div>
          <div id="twit">
            <a href="https://twitter.com/ubcAUS" target="_blank">
              <img src={require("../imgs/twit.png")} />
            </a>
          </div>
          <div id="linkedin" target="_blank">
            <a href="https://www.linkedin.com/groups/3398407/">
              <img src={require("../imgs/linkedin.png")} />
            </a>
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
      </div>
    );
  }
}
/**<div>
          <Link to="/login" className="admin_login">
            Admin Login
          </Link>
        </div> */
export default Footer;
