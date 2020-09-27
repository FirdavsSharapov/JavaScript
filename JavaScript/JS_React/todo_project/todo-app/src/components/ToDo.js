import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './ToDoData';
import './../style/style.css';

function ToDo() {
    const todoItems = ToDoData.map(item => <ToDoItem key={item.id} item={item} />)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default ToDo;