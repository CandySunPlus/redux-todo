import React, {Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import TodoListSwitcher from './todo-list-switcher';
import {VisibilityFilters} from '../actions/action-types';
import {addTodo, completeTodo, setVisibilityFilter} from '../actions/todos.js';

class App extends Component {
render() {
const {dispatch, visibleTodos, visibilityFilter} = this.props;
return (
<div>
<AddTodo
onAddClick={text => {
dispatch(addTodo(text));
}} />
<TodoList
todos={visibleTodos}
onTodoItemClick={index => {
dispatch(completeTodo(index))
}} />
<TodoListSwitcher
filter={visibilityFilter}
onFilterChange={filter => {
dispatch(setVisibilityFilter(filter));
}} />
</div>
)
}
}

App.propTypes = {
visibleTodos: ImmutablePropTypes.listOf(
ImmutablePropTypes.contains({
text: PropTypes.string.isRequired,
completed: PropTypes.bool.isRequired
})).isRequired,
visibilityFilter: PropTypes.oneOf([
VisibilityFilters.SHOW_ALL,
VisibilityFilters.SHOW_COMPLETED,
VisibilityFilters.SHOW_ACTIVE
]).isRequired
};

function selectTodos(todos, filter) {
switch(filter) {
case VisibilityFilters.SHOW_ALL:
return todos;
case VisibilityFilters.SHOW_COMPLETED:
return todos.filter(todo => todo.get('completed'));
case VisibilityFilters.SHOW_ACTIVE:
return todos.filter(todo => !todo.get('completed'));
}
}

function select(state) {
return {
visibleTodos: selectTodos(state.todos, state.visibilityFilter),
visibilityFilter: state.visibilityFilter
};
}

export default connect(select)(App);
