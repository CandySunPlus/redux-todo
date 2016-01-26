import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import TodoApp from './components/app.jsx'
import * as TodoActions from './actions/todos'
import reducers from './reducers/todos'


const store = createStore(reducers);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

const TodoAppContainer = connect(
  state => ({todos: state}),
  dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
)(TodoApp);

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer onDestroy={() => unsubscribe()}/>
  </Provider>,
  document.getElementById('todoMVC')
);

import './public/index.css'
