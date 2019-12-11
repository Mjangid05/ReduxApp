import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../types';

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const updateItem = payload => ({
  type: UPDATE_ITEM,
  payload,
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});
