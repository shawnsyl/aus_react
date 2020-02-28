import React, { Component } from "react";
import "./LockerRentals.scss";

class LockerRentals extends Component {
    state = {};
    render() {
      return (
        <div
            className="lockers"
            style={{
            width: "100%",
            height: "800px",
            backgroundColor: "#fde05b",
            textAlign: "center"
            }}
        >
        <h1 style={{ color: "#60246c", height: "81.25%" }}>
          Under Construction!
        </h1>
      </div>
      // <div className="lockers">
      //     <script src="https://cdn.weemss.com/compiled/js/integration-embed.js?v1.7"></script>
      //     <iframe title="locker-rentals" src="https://event.gg/13924/form" id="weemss_integration_13924" frameBorder="0" width="100%" height="900px" scrolling="no"></iframe>
      // </div>
      );
    }
}

export default LockerRentals;