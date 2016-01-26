import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { TodoFilters } from '../actions/todos'
import TodoItem from './todo-item.jsx'
import Footer from './footer.jsx'

const TODO_FILTERS = {
  [TodoFilters.SHOW_ALL]: () => true,
  [TodoFilters.SHOW_ACTIVE]: todo => !todo.get('completed'),
  [TodoFilters.SHOW_COMPLETED]: todo => todo.get('completed')
};

export default class TodoList extends Component {
  static propTypes = {
    todos: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      })
    ).isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {filter: TodoFilters.SHOW_ALL};
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props;
    if (todos.size > 0) {
      return (
        <input className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.size}
          onChange={actions.completeAllTodo} />
      );
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props;
    const activeCount = todos.size - completedCount;

    if (todos.size > 0) {
      return (
        <Footer completedCount={completedCount}
          activeCount={activeCount}
          filter={this.state.filter}
          onClearCompleted={::this.handleClearCompleted}
          onShow={::this.handleShow} />
      );
    }
  }

  handleShow(filter) {
    this.setState({filter});
  }

  handleClearCompleted() {

  }

  render() {
    const { todos, actions } = this.props;

    const filteredTodos = todos.filter(TODO_FILTERS[this.state.filter]);
    const completedCount = todos.count((todo) => {
      return todo.get('completed') === true
    });
    let todoItems = [];

    filteredTodos.map(todo => {
      todoItems.push(
        <TodoItem key={todo.get('id')} todo={todo} {...actions} />
      );
    });

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {todoItems}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}
