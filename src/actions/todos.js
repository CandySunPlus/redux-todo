import Enum from 'es6-enum'

// Todo filter types
export const TodoFilters = Enum(
  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE'
);

// Todo action types
export const TodoActions = Enum(
  'ADD_TODO',
  'DELETE_TODO',
  'EDIT_TODO',
  'COMPLETE_TODO',
  'COMPLETE_ALL_TODO',
  'CLEAR_COMPLETED_TODO',
  'FETCH_TODO'
);

const _addTodo = (text) => {
  return {
    type: TodoActions.ADD_TODO,
    text
  };
};

const addTodo = (text, firenext) => (dispatch, getState) => {
  dispatch(_addTodo(text));
  let {id, ...content}= getState().last().toJS();
  return firenext.child(`todos/${id}`).set(content);
};

const deleteTodo = (id) => {
  return {
    type: TodoActions.DELETE_TODO,
    id
  };
};

const editTodo = (id, text) => {
  return {
    type: TodoActions.EDIT_TODO,
    id,
    text
  };
};

const completeTodo = (id) => {
  return {
    type: TodoActions.COMPLETE_TODO,
    id
  };
};

const completeAllTodo = (isAllCompleted) => {
  return {
    type: TodoActions.COMPLETE_ALL_TODO,
    isAllCompleted
  };
};

const clearCompletedTodo = () => {
  return {
    type: TodoActions.CLEAR_COMPLETED_TODO
  };
};

const _fetchTodo = (todos) => {
  return {
    type: TodoActions.FETCH_TODO,
    todos
  };
};

const fetchTodo = (firenext) => dispatch => {
  return firenext.child('todos').exec().then((snapshot) => {
    let todos = snapshot.val() || {};
    return dispatch(_fetchTodo(todos));
  });
};

export const TodoActionCreators = {
  addTodo, deleteTodo, editTodo, completeTodo, completeAllTodo, clearCompletedTodo, fetchTodo
};
