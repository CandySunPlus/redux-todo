import Immutable from 'immutable'
import { TodoActions } from '../actions/todos'

const initialState = Immutable.List();

// redux reducer is make (state, action) => new state
export default function todos(state=initialState, action) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
    const newTodo = Immutable.Map({
      id: state.reduce((maxId, todo) => Math.max(todo.get('id'), maxId), -1) + 1,
      text: action.text,
      completed: false
    });
    return state.push(newTodo);
    case TodoActions.DELETE_TODO:
    return state.filter(todo => todo.get('id') !== action.id);
    case TodoActions.EDIT_TODO:
    return state.map(todo => {
      return todo.get('id') === action.id ? todo.set('text', action.text) : todo;
    });
    case TodoActions.COMPLETE_TODO:
    return state.map(todo => {
      return todo.get('id') === action.id ? todo.set('completed', !todo.get('completed')) : todo;
    });
    case TodoActions.COMPLETE_ALL_TODO:
    return state.map(todo => {
      return todo.set('completed', !action.isAllCompleted);
    });
    case TodoActions.CLEAR_COMPLETED_TODO:
    return state.filter(todo => {
      return todo.get('completed') === false;
    });
    case TodoActions.FETCH_TODO:
    let state = [],
    sortedIds = Object.keys(action.todos).sort();
    for (let id of sortedIds) {
      const { completed, text } = action.todos[id];
      state.push({
        id: parseInt(id),
        completed,
        text
      });
    }
    return Immutable.fromJS(state);
    default:
    return state;
  }
}
