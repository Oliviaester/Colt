import React, { Component } from 'react';

class Todo extends Component {
  state = {
    isEditing: false
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form>
            <input type='text' />
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}
export default Todo;
