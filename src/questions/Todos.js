import React from "react";
import styled from "styled-components";
import Todos from "../answers/Todos";

export default () => (
  <div>
    <h1>Todos</h1>
    <p>
      This challenge is to build a To-do application. The logic behind adding
      tasks, toggling them as finished/not-finished, and removing them has been
      done for you.
    </p>
    <p>
      What remains is making the application come to life. Create a React.js
      component that takes the following props:
    </p>
    <ul>
      <li>
        <code>todos</code> An array of objects similar to:{" "}
        <code>
          {"{"}
          text: 'Do this', finished: false
          {"}"}
        </code>
      </li>
      <li>
        <code>addTodo(text)</code> function which takes a string.
      </li>
      <li>
        <code>toggleTodoFinished(index)</code> function which takes a number of
        the index of the item to toggle finished.
      </li>
      <li>
        <code>removeTodo(index)</code> function which takes a number of the
        index of the item to remove.
      </li>
    </ul>
    <Playground>
      <Todos />
    </Playground>
  </div>
);

const Playground = styled.div`
  border: 1px solid #ccc;
  margin: 100px 0;
  padding: 40px;
`;
