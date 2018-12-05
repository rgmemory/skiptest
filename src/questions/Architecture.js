import React from "react";
import styled from "styled-components";
import Architecture from "../answers/Architecture";

export default () => (
  <div>
    <h1>Architecture through Container and Presentational Components</h1>
    <p>
      This challenge is meant to test your understanding of the architecture of
      a React.js application.
    </p>
    <p>
      A key principle in all software development is separation of concerns.
      When you do not separate concerns, the application built will eventually
      turn into{" "}
      <a href="https://en.wikipedia.org/wiki/Big_ball_of_mud">
        a big ball of mud
      </a>
      .
    </p>
    <p>
      There are several ways to do this in React, but the most common is through
      container and presentational components. There is a great article on this
      by the Co-Author of Redux.{" "}
      <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">
        Read the article
      </a>{" "}
      if this is an unfamiliar topic.
    </p>
    <p>
      Your challenge is to demonstrate your understanding of container
      components and presentational components by implementing a component that
      follows the mouse.
    </p>
    <Playground>
      <Architecture />
    </Playground>
  </div>
);

const Playground = styled.div`
  border: 1px solid #ccc;
  margin: 100px 0;
  padding: 40px;
  overflow: hidden;
  position: relative;
`;
