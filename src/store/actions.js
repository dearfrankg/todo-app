import * as types from './constants';

export const addTodo = ({ title }) => ({
  type: types.ADD_TODO,
  payload: { title },
});
export const editTodo = ({ id, title }) => ({
  type: types.EDIT_TODO,
  payload: { id, title },
});
export const deleteTodo = ({ id }) => ({
  type: types.DELETE_TODO,
  payload: { id },
});
