import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducers';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const initialState = {
  todos: [{ id: 0, title: 'Redux kicks ass' }],
};
const store = createStore(rootReducer, initialState);

export default store;

const dump = (title, data) => console.log(title, JSON.stringify(data, null, 2));
store.subscribe(() => {
  dump('STORE', store.getState());
});
