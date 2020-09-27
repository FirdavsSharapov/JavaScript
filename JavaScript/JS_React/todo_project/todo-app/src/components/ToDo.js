import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './ToDoData';
import './../style/style.css';



class ToDo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: ToDoData
        }
    }
    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default ToDo;