import { ActionTypes } from "./products-types";

export const setCatProducts = (catProducts) => {
  return {
    type: ActionTypes.SET_SELECTED_CAT_PRODUCTS,
    payload: catProducts,
  };
};
