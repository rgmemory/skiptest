import React from "react";
import withTodos from "./withTodos";

//I added state and incporporated the add, remove and toggle functions
class TodoList extends React.Component {

  constructor(){
    super()

    this.state = {
      add: ""
    }
  }

  updateAdd = (value) => {
    this.setState({
      add: value
    })
  }

  render() {
    const { todos } = this.props;

    let display = todos.map((current, index) => {
      return (
        <div className="todo-item" key={current + index}>
          <div className="todo-name">{current.text}</div>
          <button className="remove" onClick={() => {this.props.removeTodo(index)}}>Remove</button>
          <input type="checkbox" onClick={() => {this.props.toggleTodoFinished(index)}}/>
        </div>
      )
    })

    return (
      <div className="todo">
        <h1 className="todo-title">To-do List</h1>
        
            <div>{display}</div>

        <div className="add-item">
          <div className="add">Add item:</div>
          <input onChange={(e) => {this.updateAdd(e.target.value)}} type="text"/>
          <button className="add-button" onClick={() => {this.props.addTodo(this.state.add)}}>Add</button>
        </div>
      </div>
    );
  }
}

export default withTodos(TodoList);
