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
    firenext: PropTypes.object.isRequired,
    onDestroy: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { firenext, actions: { fetchTodo }} = this.props;
    fetchTodo(firenext);
  }

  componentWillUnmount() {
    const { onDestroy } = this.props;
    onDestroy();
  }

  render() {
    const { todos, actions, firenext } = this.props;
    return (
      <section className="todoapp">
        <Header addTodo={(text) => actions.addTodo(text, firenext)} />
        <TodoList todos={todos} {...actions} />
      </section>
    );
  }
}
