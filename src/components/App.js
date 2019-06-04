import React, {Component} from 'react';
import '.././materialize.css';
import ToDos from './Todos';

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
  render(){
    return (
      <div className="container">
        <h1>ToDo App</h1>
        <ToDos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
