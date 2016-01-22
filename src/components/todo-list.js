import React, {Component, PropTypes} from 'react';
import TodoItem from './todo-item';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                <TodoItem {...todo}
                    key={index}
                    onClick={() => this.props.onTodoItemClick(index)} />
                })}
            </ul>
        );
    }
}
TodoList.propTypes = {
    onTodoItemClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};
