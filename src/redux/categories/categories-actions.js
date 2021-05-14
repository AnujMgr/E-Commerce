import { ActionTypes } from "./categories-types";

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_ALL_CATEGORIES,
    payload: categories,
  };
};

export const setSelectedCategory = (category) => {
  return {
    type: ActionTypes.SET_SELECTED_CATEGORY,
    payload: category,
  };
};
