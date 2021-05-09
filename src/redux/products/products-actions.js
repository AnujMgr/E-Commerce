import { ActionTypes } from "./products-types";

export const setCatProducts = (catProducts) => {
  return {
    type: ActionTypes.SET_ALL_CATEGORIES,
    payload: catProducts,
  };
};
