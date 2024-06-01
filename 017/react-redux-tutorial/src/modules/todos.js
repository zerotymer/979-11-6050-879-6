import { createAction, handleActions } from "redux-actions";

/// region Actions
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
/// endregion


/// region Action Creators
let id = 3;
export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, text => ({
  todo: { id: id++, text, done: false }
}));
export const toggle = createAction(TOGGLE, id => id );
export const remove = createAction(REMOVE, id => id );
/// endregion


/// region Reducer
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false }
  ]
};
const todos = handleActions({
  [CHANGE_INPUT]: (state, { payload : input}) => ({ ...state, input }),
  [INSERT]: (state, { payload: todo}) => ({ 
    ...state, 
    todos: state.todos.concat(todo) }),
  [TOGGLE]: (state, { payload: id }) => ({ 
    ...state, 
    todos: state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo ) }),
  [REMOVE]: (state, { payload: id }) => ({ 
    ...state,
    todos: state.todos.filter(todo => todo.id !== id )})
}, initialState);
/// endregion

export default todos;