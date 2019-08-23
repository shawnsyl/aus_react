import React, { Component } from "react";
import propTypes from "prop-types";
const Circle = ({ event, isbig }) => {
  const { index, id, caption, pic, date } = event;
  const bigclass = isbig;
  return (
    <div className={"event" + bigclass}>
      <img
        src={pic}
        style={{
          transformOrigin: `right top`
        }}
      />
      <p>{caption}</p>
      {bigclass !== "" ? <p className="date">{date}</p> : ""}
    </div>
  );
};

Circle.propTypes = {
  event: propTypes.object.isRequired
};

export default Circle;
