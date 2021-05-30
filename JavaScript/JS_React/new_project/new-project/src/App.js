import React from 'react';
import TodoItems from './components/TodoItem';
import './style.css';

export default function App() {
  return (
    <div className="todo-list">
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems />
    </div>
  );
}
