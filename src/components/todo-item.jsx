import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import ImmutablePropTypes from 'react-immutable-proptypes'
import TodoInput from './todo-input.jsx'

export default class TodoItem extends Component {
  static propTypes = {
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todo: ImmutablePropTypes.contains({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({editing: false});
  }

  handleDoubleClick(evt) {
    this.setState({editing: true});
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props;
    let todoItemElem;
    if (this.state.editing) {
      todoItemElem = (
        <TodoInput text={todo.text}
          editing={this.state.editing}
          onSave={(text) => {
            this.handleSave(todo.id, text);
          }
        } />
      );
    } else {
      todoItemElem = (
        <div className="view">
          <input className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={::this.handleDoubleClick}>{todo.text}</label>
          <button className="destroy"
            onClick={() => deleteTodo(todo.id)}></button>
        </div>
      );
    }

    return (
      <li className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}>
        {todoItemElem}
      </li>
    );
  }
}