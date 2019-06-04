import React, {Component} from 'react';
import '.././materialize.css';
import ToDos from './Todos';
import AddToDo from './AddToDo';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { chore: 'clean', id: 1},
        { chore: 'rest', id: 2},
      ]
    }
  }

  addChore = (chore) => {
    chore.id = Math.random();
    const todos = [...this.state.todos, chore];
    this.setState({
      todos: todos,
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    })
  }
  render(){
    return (
      <div className="container">
        <h1>ToDo App</h1>
        <ToDos todos={this.state.todos} deleteTodo = { this.deleteTodo }/>
        <AddToDo addChore={ this.addChore }/>
      </div>
    );
  }
}

export default App;
