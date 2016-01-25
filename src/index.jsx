import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,  } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/app.jsx'
import reducers from './reducers/todos'


const store = createStore(reducers);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoMVC')
);

import './public/index.css'
