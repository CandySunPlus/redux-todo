import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import todoApp from './reducers'
import {addTodo, completeTodo, setVisibilityFilter} from './actions/todos'
import {VisibilityFilters} from './actions/action-types'
import App from './components/app'

let store = createStore(todoApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('demoApp')
);



