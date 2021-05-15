import { ActionTypes } from "./filter-types";

export const setFilter = (options) => {
  return {
    type: ActionTypes.SET_FILTERS,
    payload: options,
  };
};

export const updateFilter = (options) => {
  return {
    type: ActionTypes.UPDATE_FILTERS,
    payload: options,
  };
};

export const removeSelectedFilter = (option) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_FILTER,
    payload: option,
  };
};
