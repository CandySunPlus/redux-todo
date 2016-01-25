import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class TodoInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  };

  componentDidMount() {
    this.refs.todoInput.value = this.props.text || '';
  }

  handleSubmit(evt) {
    console.log(this.refs.todoInput.value.trim());
    console.log(evt);
    if (evt.witch === 13) {
      const text = this.refs.todoInput.value.trim();
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({text: ''});
      }
    }
  }

  handleBlur(evt) {
    if (!this.props.newTodo) {
      this.props.onSave(this.refs.todoInput.value.trim());
    }
  }

  render() {
    return (
      <input className={classnames({
          'edit': this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        ref="todoInput"
        onBlur={::this.handleBlur}
        onKeyDown={::this.handleSubmit} />
    );
  }
}
