import { ActionTypes } from "./cart-types";

export const addToCart = (itemId) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { cartItem: itemId },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id: itemId },
  };
};

export const modifyQty = (id, qty) => {
  return {
    type: ActionTypes.MODIFY_QTY,
    payload: { id: id, qty: qty },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
