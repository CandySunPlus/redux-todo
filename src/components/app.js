import React, {Component } from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import TodoListSwitcher from './todo-list-switcher';
import {VisibilityFilters} from '../actions/action-types';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo
          onAddClick={text => {
            console.log('add todo', text);
          }} />
          <TodoList
            todos={[{
              text: 'Use Redux',
              completed: true
            }, {
              text: 'Learn to connect it to React',
              completed: false
            }]}
            onTodoItemClick={todo => {
              console.log('todo item clicked', todo);
            }} />
            <TodoListSwitcher
              filter={VisibilityFilters.SHOW_ALL}
              onFilterChange={filter => {
                console.log('filter change', filter);
              }} />
          </div>
    )
  }
}
