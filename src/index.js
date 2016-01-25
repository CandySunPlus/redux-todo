import { createStore } from 'redux'

import todos from './reducers'
import TodoInput from './components/todo-input'

let store = createStore(todos);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

import './public/index.css'
