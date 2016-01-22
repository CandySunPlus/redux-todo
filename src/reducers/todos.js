import {VisibilityFilters, ActionTypes} from '../actions/action-types'
import Immutable from 'immutable'

export function todos(state=Immutable.List.of(), action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return state.push(Immutable.Map({text: action.text, completed: false}));
    case ActionTypes.COMPLETE_TODO:
      return state.update(action.index, item => item.set('completed', true));
    default:
      return state;
  }
}

export function visibilityFilter(state=VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

