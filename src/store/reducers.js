import * as types from './constants';
import uuidV4 from 'uuid';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  // REDUCERS
  // TAKE STATE and ACTION and return NEW_STATE
  switch (action.type) {
    case types.ADD_TODO:
      console.log('ADD_TODO');
      return [...state, { id: uuidV4(), title: action.payload.title }];

    case types.EDIT_TODO:
      return state.map(
        todo =>
          (todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo),
      );

    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
};
