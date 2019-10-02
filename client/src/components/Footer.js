import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  state = {};

  render() {
    return (
      <div id="footer">
        <span className="wrap">
          <div id="icons">
            <div id="fb">
              <a
                href="https://www.facebook.com/ubcaus/?ref=bookmarks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../imgs/fb.png")} alt="Facebook logo" />
              </a>
            </div>
            <div id="ig">
              <a
                href="https://www.instagram.com/ubcaus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../imgs/ig.png")} alt="Instagram logo" />
              </a>
            </div>
            <div id="twit">
              <a
                href="https://twitter.com/ubcAUS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../imgs/twit.png")} alt="Twitter logo" />
              </a>
            </div>
            <div id="linkedin" target="_blank">
              <a
                href="https://www.linkedin.com/groups/3398407/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../imgs/linkedin.png")}
                  alt="LinkedIn logo"
                />
              </a>
            </div>
          </div>
        </span>
        <span className="wrap" style={{ width: "89%" }}>
          <div id="footer_addr">
            <img
              src={require("../imgs/white_logo.png")}
              className="logo"
              alt="UBC AUS logo"
            />
            <p>Arts Undergraduate Society, UBC</p>
            <p>Vancouver Campus</p>
            <p>Buchanan D140</p>
            <p>1866 Mail Mall</p>
            <p>Vancouver, BC Canada V6T 1Z1</p>
            <p>Tel 602 822 4403</p>
            <p id="copyright">© 2019 BY UBC ARTS UNDERGRADUATE SOCIETY</p>
          </div>
        </span>
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
