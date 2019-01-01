import React from 'react';
import './ToDoInput.css';

export default class ToDoInput extends React.Component {
    state = { todo: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(this.state.todo);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit} >
                 <input type="text" value={this.state.todo} onChange={(e) => {this.setState({ todo: e.target.value })}}/>
                </form>
            </div>
        )
    }
}