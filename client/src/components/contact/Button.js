import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }

  handleHoverOn(e) {
    this.setState({ hover: true });
  }

  handleHoverOff(e) {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div
        className="button"
        onMouseEnter={this.handleHoverOn}
        onMouseLeave={this.handleHoverOff}
      >
        {this.state.hover ? "" : this.props.pic}
        <p className={this.state.hover ? "hoveron" : ""}>
          {this.state.hover ? this.props.text2 : this.props.text1}
        </p>
      </div>
    );
  }
}

export default Button;
