import React, { Component } from 'react';
import './App.css';
import './components/header'
import Header from './components/header';
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

class App extends Component {
  state = { list: [
    {id: 0, text: "Punch a dolphin."},
    {id: 1, text: "Punch another dolphin."},
    {id: 2, text: "Punch a whale."},
    {id: 3, text: "Punch another dolphin (again)."},
    {id: 4, text: "Punch two more dolphins (with a single blow)."},
    {id: 5, text: "Punch a dolphin with a diabetes."},
    {id: 6, text: "Punch a diabete with a dolphin."},
    {id: 7, text: "Punch a whale shaped like a dolphin."}
  ] }

  onAddToDo = (text) => {
    const list_length = this.state.list.length;
    this.setState({
      list: [...this.state.list, {id: list_length, text: text}]
    });
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
           <Header/>
           <ToDoInput addToDo={this.onAddToDo}/>
           <ToDoList todos={ this.state.list } />
        </div>
      </div>
    );
  }
}

export default App;
