import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  state = {
    todos: []
  };

  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          task={todo.task}
          id={todo.id}
          removeTodo={this.remove}
        />
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
export default TodoList;
