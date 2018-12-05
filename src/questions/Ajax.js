import React from "react";
import styled from "styled-components";
import Ajax from "../answers/Ajax";

export default () => (
  <div>
    <h1>Ajax</h1>
    <p>This challenge is meant to test your knowledge of HTTP and React.js.</p>
    <p>
      In this challenge you will load a list of images from{" "}
      <a href="https://picsum.photos/list">https://picsum.photos/list</a>,
      format the response, then pass the result to another component to be
      rendered.
    </p>
    <p>
      Below is the result currently rendered by a component in{" "}
      <code>/src/answers/Clock/index.js</code>. Please open that file for more
      instruction, and to get started.
    </p>
    <Playground>
      <Ajax />
    </Playground>
  </div>
);

const Playground = styled.div`
  border: 1px solid #ccc;
  margin: 100px 0;
  padding: 40px;
`;
