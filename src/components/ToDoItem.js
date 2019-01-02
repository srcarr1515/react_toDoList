import React from 'react';
import './ToDoItem.css'

class ToDoItem extends React.Component {
    constructor(props){
        super(props)
        this.state = { todoText: "", removeMe: null}
    }

    componentDidMount(){
        this.setState({
            todoText: this.props.todoText,
            removeMe: this.props.removeMe
        })
    }

    render () {
        return(
            <div className="ui segment"><div className="item"><p>{this.state.todoText}</p><div className="ui right floated button td-remove" onClick={this.props.removeMe}><i className="trash icon"></i></div></div></div>
        );
    }
}

export default ToDoItem;