import { ActionTypes } from "./categories-types";
import Api from "../../helper/api";

const api = new Api();

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_ALL_CATEGORIES,
    payload: categories,
  };
};
