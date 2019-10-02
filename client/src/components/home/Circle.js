import React from "react";
import propTypes from "prop-types";
const Circle = ({ event, isbig }) => {
  const { caption, date, pic } = event;
  const bigclass = isbig;
  return (
    <div className={"event" + bigclass}>
      <img
        src={"https://" + pic.fields.file.url}
        style={{
          transformOrigin: `right top`
        }}
        alt={"event img for " + caption}
      />
      <p className="caption">{caption}</p>
      {bigclass !== "" ? <p className="date">{date}</p> : ""}
    </div>
  );
};

Circle.propTypes = {
  event: propTypes.object.isRequired
};

export default Circle;
