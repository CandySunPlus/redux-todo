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

  constructor(props, context) {
    super(props, context);
    this._inputDOMNode = null;
    this.state = {
      text: props.text || ''
    };
  }

  handleSubmit(evt) {
    if (evt.which === 13) {
      const text = evt.target.value.trim();
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({text: ''});
      }
    }
  }

  handleBlur(evt) {
    if (!this.props.newTodo) {
      this.props.onSave(evt.target.value.trim());
    }
  }

  handleChange(evt) {
    this.setState({text: evt.target.value});
  }

  componentDidMount() {
    // change to editing state
    if (this.props.editing) {
      this._inputDOMNode.select();
    }
  }

  render() {
    return (
      <input className={classnames({
          'edit': this.props.editing,
          'new-todo': this.props.newTodo
        })}
        ref={(c) => this._inputDOMNode = c}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onChange={::this.handleChange}
        onBlur={::this.handleBlur}
        onKeyDown={::this.handleSubmit} />
    );
  }
}
