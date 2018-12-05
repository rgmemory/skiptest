import React from "react";
import styled from "styled-components";
import Clock from "../answers/Clock";
import clockImg from "../img/clock.png";

export default () => (
  <div>
    <Img src={clockImg} alt="Clock Example" />
    <h1>Clock</h1>
    <p>
      This challenge is meant to test your CSS skills, and will require an
      understanding of CSS transforms and positioning.
    </p>
    <p>
      You will build an analog clock. The calculations of the angles of each
      hand have been done for you. It is your job to put them on a clockface.
    </p>
    <p>
      A starting point is located in <code>src/answers/Clock/index.js</code>.
      There is an accompanying <code>scss</code> file for your styles.
    </p>
    <p>
      An example of how your clock <em>could</em> look is on the right.
    </p>
    <Playground>
      <Clock />
    </Playground>
  </div>
);

const Playground = styled.div`
  border: 1px solid #ccc;
  margin: 100px 0;
  padding: 40px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  float: right;
`;
