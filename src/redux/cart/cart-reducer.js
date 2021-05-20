import { ActionTypes } from "./cart-types";

const INITIAL_STATE = {
  cart: [],
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      //Get the items data from the products array
      // const item = state.products.find((prod) => prod.id === action.payload.id);
      const item = payload.product;
      //Check if Item is in cart already

      const inCart = state.cart.find((item) =>
        item.cartItem.id === payload.cartItem.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.cartItem.id === payload.cartItem.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, ...payload, qty: 1 }],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.cartItem.id !== payload.id),
      };

    case ActionTypes.MODIFY_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.cartItem.id === payload.id ? { ...item, qty: payload.qty } : item
        ),
      };

    case ActionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
