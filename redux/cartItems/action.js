import {DECREASE_QUANTITY, DELETE_ITEM, INCREASE_QUANTITY} from './constants';

export const addItemQuantity = id => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      id,
    },
  };
};

export const removeItemQuantity = (id, quantity) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: {
      id,
    },
  };
};