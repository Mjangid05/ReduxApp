import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from '../types';

const INITIAL_STATE = {
  todo: [
    {id: 1, value: 'Item1', status: false},
    {id: 2, value: 'Item2', status: false},
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const {todo} = state;
      return {
        ...state,
        todo: [...todo, action.item],
      };
    }

    case DELETE_ITEM: {
      const {todo} = state;
      const list = todo.filter(x => x.id !== action.item.id);
      return {
        ...state,
        todo: list,
      };
    }

    case UPDATE_ITEM: {
      const newState = {...state};
      const todo = [...newState.todo];
      const index = todo.findIndex(x => x.id === action.item.id);
      todo[index].status = !action.item.status;
      return {
        ...state,
        todo,
      };
    }

    default:
      return state;
  }
};
