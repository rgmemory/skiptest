import "./styles.scss";
import React from "react";
import withClockDegrees from "./withClockDegrees";


const Clock = ({ degrees: { hours, minutes, seconds } }) => (
  
  <div className="clock">

    {/* I used inline styles here to directly plug in the appropriate degree value and then rotate each by 90 degrees to make sure they align properly */}
    <div className="inner-clock">
      <div className="seconds" style={{transform: `rotate(${seconds + 90}deg)`}}></div>
      <div className="minutes" style={{transform: `rotate(${minutes  + 90}deg)`}}></div>
      <div className="hours" style={{transform: `rotate(${hours  + 90}deg)`}}></div>
    </div>
  </div>
);

export default withClockDegrees(Clock);
