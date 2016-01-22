import React, {Component, PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TodoItem from './todo-item';

export default class TodoList extends Component {
  render() {
    let todoItems = [];
    this.props.todos.map((todo, index) => {
      let props = todo.toObject();
      todoItems.push(
        <TodoItem 
          {...props}
          key={index}
          onClick={() => this.props.onTodoItemClick(index)} />
      );
    });
    return (
      <ul>
        {todoItems}
        </ul>
    );
  }
}
TodoList.propTypes = {
  onTodoItemClick: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired
};
