import React from "react";
import styled from "styled-components";
import createElement from "../answers/JSX";
import runTests from "../answers/JSX/tests";

const testResults = runTests(createElement);

export default () => (
  <div>
    <h1>JSX Renderer</h1>
    <p>
      This challenge is meant to test your knowledge of JavaScript and the DOM.
      It is significantly harder than the other tests.
    </p>
    <p>
      React uses a language extension called JSX. JSX allows us to write
      HTML-like structures in Javascript and they are changed into a function
      call. You can technically use JSX without React and supply your own
      function. Although you will probably not use this function, it is very
      helpful to understanding how React works under the hood.
    </p>
    <p>
      This challenge is creating that function. Write your function in{" "}
      <code>src/answers/JSX/index.js</code>.
    </p>
    <p>Here are a couple tips:</p>
    <ul>
      <li>
        Your function should take three arguments.
        <ol>
          <li>Tag Name (string or function)</li>
          <li>Attributes (object or null)</li>
          <li>Children (splat argument)</li>
        </ol>
      </li>
      <li>
        Start by creating a DOM node using the tag name using
        document.createElement.
      </li>
      <li>
        Add each number and string attribute to the node using setAttribute.
      </li>
      <li>
        Add each boolean to the node using setAttribute but use an empty string
        as the value.
      </li>
      <li>
        Add function attributes as event handlers using addEventListener or
        directly to the node.
      </li>
      <li>
        Sometimes children is a multi-dimensional array. This often happens when
        the <code>.map</code> method is used to iterate through an array. You'll
        need to handle this case.
      </li>
    </ul>
    {testResults.map(({ label, pass }) => (
      <TestResult key={label}>
        {pass ? <Pass /> : <Fail />}
        {label}
      </TestResult>
    ))}
  </div>
);

const TestResult = styled.div`
  line-height: 25px;
  margin-bottom: 2px;
`;

const Badge = styled.div`
  width: 100px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  margin-right: 8px;
  &:after {
    display: block;
    color: white;
  }
`;

const Pass = styled(Badge)`
  background: #00d500;
  &:after {
    content: "Pass";
  }
`;

const Fail = styled(Badge)`
  background: #ccc;
  &:after {
    content: "Fail";
  }
`;
