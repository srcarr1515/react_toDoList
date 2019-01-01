import React from 'react';
import './ToDoItem.css'

class ToDoItem extends React.Component {
    constructor(props){
        super(props)
        this.state = { todoText: ""}
    }

    componentDidMount(){
        this.setState({
            todoText: this.props.todoText
        })
    }

    render () {
        return(
            <div className="ui segment"><div className="item"><p>{this.state.todoText}</p><div className="ui right floated button td-remove"><i className="trash icon"></i></div></div></div>
        );
    }
}

export default ToDoItem;