import React from 'react';
import './ToDoItem'
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
    const checkList = props.todos.map((entry) => {
        return <ToDoItem key={entry.id} todoText={entry.text} />
    });

    return(
        <div style={{marginTop: '10px'}}>{checkList}</div>
    );
}

export default ToDoList;
