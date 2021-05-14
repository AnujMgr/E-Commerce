import { ActionTypes } from "./categories-types";

const initialState = {
  categories: [],
};

export const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export const selectedCategoryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_CATEGORY:
      return { ...state, ...payload };
    default:
      return state;
  }
};
