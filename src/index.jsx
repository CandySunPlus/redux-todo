import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import todos from './reducers'
import Header from './components/header.jsx'

let store = createStore(todos);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


ReactDOM.render(
  <Header addTodo={(text) => {console.log(text);}} />,
  document.getElementById('todoMVC')
);

import './public/index.css'
