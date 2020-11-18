import React from 'react';
import './style/style.css';

function onChangeHandler() {
    console.log('On change happened')
}

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed} onChange={onChangeHandler}/>
            <p>{props.text}</p>
        </div>
    )
}
export default TodoItem;