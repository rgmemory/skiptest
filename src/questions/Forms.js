import React from "react";
import styled from "styled-components";
import Forms from "../answers/Forms";

export default () => (
  <div>
    <h1>Forms</h1>
    <p>
      This challenge is meant to test your understanding of the the browser.
    </p>
    <p>
      Forms are how an application receives input from a user. Unfortunately
      there are many ways to do forms wrong, which makes them difficult to use
      for users.
    </p>
    <p>Below is a form with several common mistakes. Please refactor it.</p>
    <p>
      The username and passwords are <code>skippy@io.com</code> and{" "}
      <code>password</code>.
    </p>
    <Playground>
      <Forms />
    </Playground>
  </div>
);

const Playground = styled.div`
  border: 1px solid #ccc;
  margin: 100px 0;
  padding: 40px;
`;
