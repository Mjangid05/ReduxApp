import {createReducer, createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  addItem: ['item'],
  updateItem: ['item'],
  deleteItem: ['item'],
});

export const TodoTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  todo: [{id: 1, value: 'Item1'}, {id: 2, value: 'Item2'}],
};

const addItem = (state = INITIAL_STATE, action) => {
  const {todo} = state;
  return {
    ...state,
    todo: [...todo, action.item],
  };
};

const updateItem = (state = INITIAL_STATE, action) => {
  const newState = {...state};
  const todo = [...newState.todo];
  const index = todo.findIndex(x => x.id === action.item.id);
  todo[index].status = !action.item.status;
  return {
    ...state,
    todo,
  };
};

const deleteItem = (state = INITIAL_STATE, action) => {
  const {todo} = state;
  const list = todo.filter(x => x.id !== action.item.id);
  return {
    ...state,
    todo: list,
  };
};

export const todoReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.UPDATE_ITEM]: updateItem,
  [Types.DELETE_ITEM]: deleteItem,
});
