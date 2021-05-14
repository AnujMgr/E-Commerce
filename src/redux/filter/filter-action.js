import { ActionTypes } from "./filter-types";

export const setFilter = (options) => {
  console.log("SET FILTER");
  return {
    type: ActionTypes.SET_FILTERS,
    payload: options,
  };
};

export const updateFilter = (options) => {
  console.log("UPDATE FILTER");
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
