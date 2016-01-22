import {todos, visibilityFilter} from './todos'
import {combineReducers} from 'redux'


const todoApp = combineReducers({
visibilityFilter,
todos
});

export default todoApp;
