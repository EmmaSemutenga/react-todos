import React, {Component} from 'react';
import './materialize.css';

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
      </div>
    );
  }
}

export default App;
