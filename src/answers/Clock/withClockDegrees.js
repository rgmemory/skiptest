/*
Don't edit this file. It is here in
case you would like to reference it.
*/

import { Component, createFactory } from "react";

function getDegrees() {
  const HOURS_IN_DAY = 12;
  const DEGREES_IN_CIRCLE = 360;
  const MINUTES_IN_HOUR = 60;
  const SECONDS_IN_MINUTE = 60;
  const TWELVE_LOCATION = -90;

  const now = new Date();

  const hoursDegree = (now.getHours() / HOURS_IN_DAY) * DEGREES_IN_CIRCLE;
  const minutesDegree =
    (now.getMinutes() / MINUTES_IN_HOUR) * DEGREES_IN_CIRCLE;
  const secondsDegree =
    (now.getSeconds() / SECONDS_IN_MINUTE) * DEGREES_IN_CIRCLE;

  // Note, this does not calculate the change in angle while
  // other hands move. E.g. The hour hand will always point
  // in to the direction of a number.
  return {
    hours: Math.floor(hoursDegree) + TWELVE_LOCATION,
    minutes: Math.floor(minutesDegree) + TWELVE_LOCATION,
    seconds: Math.floor(secondsDegree) + TWELVE_LOCATION
  };
}

export default comp => {
  const factory = createFactory(comp);
  return class ClockAnswer extends Component {
    unmounted = false;
    state = { hours: 0, minutes: 0, seconds: 0 };
    tick = () => {
      if (this.unmounted) return;

      const degrees = getDegrees();
      this.setState(degrees);

      setTimeout(this.tick, 1000);
    };
    componentDidMount() {
      this.tick();
    }
    componentWillUnmount() {
      this.unmounted = true;
    }
    render() {
      return factory({ ...this.props, degrees: this.state });
    }
  };
};
