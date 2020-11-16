import React from "react";
import TodoItem from './TodoItem';
import './style/style.css';
import todosData from "./todosData";
function App() {
  const todosContainer = todosData.map((item) => (
    <TodoItem key={item.id} text={item.text} checked={item.completed} />
  ))
console.log(todosContainer)
  return (
    <div className="todo-list">
      {todosContainer}
    </div>
  );
}

export default App;
