import React from 'react';
import './style/style.css';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed}/>
            <p>{props.text}</p>
        </div>
    )
}
export default TodoItem;