import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Header from './header.jsx'
import TodoList from './todo-list.jsx'

export default class TodoApp extends Component {
  static propTypes = {
    todos: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired
      })
    ).isRequired,
    actions: PropTypes.object.isRequired,
    onDestroy: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    // unsubcribe store dispatch when root component will unmount
    const { onDestroy } = this.props;
    onDestroy();
  }

  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <TodoList todos={todos} actions={actions} />
      </div>
    );
  }
}
