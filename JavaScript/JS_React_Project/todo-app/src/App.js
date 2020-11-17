import React, { Component } from "react";
import TodoItem from './TodoItem';
import './style/style.css';
import todosData from "./todosData";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todosContainer = this.state.todos.map((item) => (
      <TodoItem key={item.id} text={item.text} checked={item.completed} />
    ))
    return (
      <div className="todo-list">
        {todosContainer}
      </div>
    );
  }
}