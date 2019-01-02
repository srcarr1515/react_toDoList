import React, { Component } from 'react';
import './App.css';
import './components/header'
import Header from './components/header';
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

class App extends Component {
  state = { entry: '' }

  onAddEntry = (text) => {
    this.setState({
      entry: text
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
           <Header/>
           <ToDoInput addToDo={this.onAddEntry}/>
           <ToDoList entry={ this.state.entry } />
        </div>
      </div>
    );
  }
}

export default App;
