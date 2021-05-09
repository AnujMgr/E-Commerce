import { ActionTypes } from "./products-types";

const initialState = {
  catProducts: [],
};

export const catProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_CAT_PRODUCTS:
      return { ...state, catProducts: payload };
    default:
      return state;
  }
};
