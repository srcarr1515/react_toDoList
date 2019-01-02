import React from 'react';
import './ToDoItem'
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    constructor(props){
        super(props)
        this.state = { todoList: [  {id: 0, text: "Punch a dolphin."},
        {id: 1, text: "Punch another dolphin."},
        {id: 2, text: "Punch a whale."},
        {id: 3, text: "Punch another dolphin (again)."},
        {id: 4, text: "Punch two more dolphins (with a single blow)."},
        {id: 5, text: "Punch a dolphin with a diabetes."},
        {id: 6, text: "Punch a diabete with a dolphin."},
        {id: 7, text: "Punch a whale shaped like a dolphin."}], entry: ''}
    }

    removeItem = (id) => {
        this.setState({
            todoList: this.state.todoList.filter((f) => f.id !== id)
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.entry !== this.state.entry) {
            const list_length = this.state.todoList.length;
            this.setState({
                todoList: [...this.state.todoList, {id: list_length, text: nextProps.entry}]
            });
        }
      }

    render () {
        const checkList = this.state.todoList.map((entry) => {
            return <ToDoItem key={entry.id} todoText={entry.text} removeMe={() => {this.removeItem(entry.id)}}/>
        });

        return(
            <div style={{marginTop: '10px'}}>{checkList}</div>
        );
    }
}


export default ToDoList;
