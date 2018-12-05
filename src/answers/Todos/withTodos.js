/*
Don't edit this file. It is here in
case you would like to reference it.
*/

import { Component, createFactory } from "react";

export default comp => {
  const factory = createFactory(comp);
  return class TodoController extends Component {
    unmounted = false;
    state = { todos: [{ text: "Do stuff", finished: false }] };
    handlers = {
      addTodo: text => {
        this.setState({
          todos: [...this.state.todos, { text, finished: false }]
        });
      },
      removeTodo: index => {
        this.setState({
          todos: this.state.todos.filter((_, i) => i !== index)
        });
      },
      toggleTodoFinished: index => {
        this.setState({
          todos: this.state.todos.map((item, i) => {
            if (i !== index) return item;
            return { ...item, finished: !item.finished };
          })
        });
      }
    };
    render() {
      return factory({
        ...this.props,
        ...this.handlers,
        todos: this.state.todos
      });
    }
  };
};
