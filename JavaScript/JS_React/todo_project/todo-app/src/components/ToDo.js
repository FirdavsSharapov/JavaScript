import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './ToDoData';
import './../style/style.css';



class ToDo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ToDoData
        };
        this.checkOnChange = this.checkOnChange.bind(this);
    };

    checkOnChange(id) {
        console.log('changed', id)
    }

    render() {
        const todoItems = this.state.todos.map(item =>
            <ToDoItem 
                key={item.id} 
                item={item} 
                checkOnChange={this.checkOnChange(item.id)} />)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default ToDo;