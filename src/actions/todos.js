import {ActionTypes} from './action-types'

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO, text
  };
}

export function completeTodo(index) {
  return {
    type: ActionTypes.COMPLETE_TODO, index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER, filter
  };
}
