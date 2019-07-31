import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = {
    task: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <label htmlFor='task'>New Todo</label>
        <input
          type='text'
          placeholder='New Todo'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
export default NewTodoForm;
