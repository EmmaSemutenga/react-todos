import React, {Component} from 'react';

class AddToDo extends Component{
  constructor(props){
    super(props);
    this.state = {
        chore: null,
    }
  }

  handleChange = (e) => {
      //console.log(e.target.value);
      this.setState({
        chore: e.target.value,
      });
      //console.log(this.state.chore);
  }
  handleSubmit = (e) => {
      e.preventDefault();
      //console.log(this.state.chore);
      this.props.addChore(this.state);
  }
  render(){
    return (
      <div>
        <h1>Add ToDo</h1>
        <form className="col s12" onSubmit={ this.handleSubmit } >
        <div className="row">
            <div className="input-field col s12">
            
                    <input type="text" className="validate" onChange = { this.handleChange } />
                    
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            
        </div> 
        </form>
      </div>
    );
  }
}

export default AddToDo;
