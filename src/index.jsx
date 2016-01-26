import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import TodoApp from './components/app.jsx'
import { TodoActionCreators } from './actions/todos'
import reducers from './reducers/todos'

const store = createStore(reducers);
const unsubscribe = store.subscribe(() => {
  // you can add more process here when action dispatched
  // console.log(store.getState());
});

const TodoAppContainer = connect(
  state => ({todos: state}),
  dispatch => ({actions: bindActionCreators(TodoActionCreators, dispatch)})
)(TodoApp);

// unsubcribe actions from store when root component will unmount
ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer onDestroy={() => unsubscribe()}/>
  </Provider>,
  document.getElementById('todoMVC')
);

import './public/index.css'
