import { ActionTypes } from "./categories-types";

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_ALL_CATEGORIES,
    payload: categories,
  };
};
