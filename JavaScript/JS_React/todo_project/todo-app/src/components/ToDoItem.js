import React from 'react';
import './../style/style.css';

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.item.completed}
                onChange={() => console.log('Changed')}
            />
            <text>{props.item.text}</text>
        </div>
    );
};

export default ToDoItem;
