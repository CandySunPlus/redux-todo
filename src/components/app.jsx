import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import * as TodoActions from '../actions/todos'
import Header from './header.jsx'
import TodoList from './todo-list.jsx'

class TodoApp extends Component {
  static propTypes = {
    todos: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired
      })
    ).isRequired
  };

  render() {
    const { dispatch, todos } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <TodoList todos={todos} actions={actions} />
      </div>
    );
  }
}

export default connect(state => {
  return {
    todos: state.todos
  };
})(TodoApp);
