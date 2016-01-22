import React, {Component, PropTypes} from 'react'

export default class TodoItem extends Component {
  render() {
    console.log('in');
    return (
      <li onClick={this.props.onClick}
      style={{
        textDecoration: this.props.completed ? 'line-through': 'none',
        cursor: this.props.completed ? 'default': 'pointer'
      }}>
      {this.props.text}
      </li>
    );
  }
}
TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
