import todoReducer from '../reducers';
import * as types from '../constants';

const initialState = [{ id: 5, title: 'hello' }];

describe('todo reducer', () => {
  describe('no action', () => {
    it('should return unaltered state', () => {
      const actual = todoReducer(initialState, {});
      const expected = initialState;
      expect(actual).toEqual(expected);
    });
  });

  describe('addTodo', () => {
    it('should add a todo', () => {
      const actual = todoReducer(initialState, {
        type: types.ADD_TODO,
        payload: { title: 'world' },
      });
      const expected = [...initialState, { id: 1, title: 'world' }];
      expect(actual).toEqual(expected);
    });
  });

  describe('editTodo', () => {
    it('should edit a todo', () => {
      const actual = todoReducer(initialState, {
        type: types.EDIT_TODO,
        payload: { id: 5, title: 'max' },
      });
      const expected = [{ id: 5, title: 'max' }];
      expect(actual).toEqual(expected);
    });
  });

  describe('deleteTodo', () => {
    it('should delete a todo', () => {
      const actual = todoReducer(initialState, {
        type: types.DELETE_TODO,
        payload: { id: 5 },
      });
      const expected = [];
      expect(actual).toEqual(expected);
    });
  });
});
