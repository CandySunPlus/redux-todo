import React, { PropTypes, Component } from 'react'
import TodoInput from './todo-input.jsx'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoInput newTodo={true}
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}
