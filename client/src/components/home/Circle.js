import React from "react";
import propTypes from "prop-types";
const Circle = ({ event, isbig }) => {
  const { caption, date, pic } = event;
  const bigclass = isbig;
  console.log(event);
  let scale =
    event.scaleX && event.scaleY
      ? { transform: `scale(${event.scaleX}, ${event.scaleY})` }
      : event.scaleX && !event.scaleY
      ? { transform: `scaleX(${event.scaleX})` }
      : event.scaleY && !event.scaleX
      ? { transform: `scaleY(${event.scaleY})` }
      : "";

  let style = Object.assign(scale, {
    transformOrigin: `right top`
  });
  return (
    <div className={"event" + bigclass}>
      <div className="img-crop">
        <img
          src={"https://" + pic.fields.file.url}
          style={style}
          alt={"event img for " + caption}
        />
      </div>
      <p className="caption">{caption}</p>
      {bigclass !== "" ? <p className="date">{date}</p> : ""}
    </div>
  );
};

Circle.propTypes = {
  event: propTypes.object.isRequired
};

export default Circle;
