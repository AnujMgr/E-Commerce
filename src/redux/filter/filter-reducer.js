import { ActionTypes } from "./filter-types";

const initialState = {
  filter: [],
};

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FILTERS:
      const data = state.filter.filter((element) => {
        return element.name !== payload.name;
      });
      return { filter: [...data, payload] };

    case ActionTypes.UPDATE_FILTERS:
      const index = state.filter.findIndex(
        (filter) => filter.name === payload.name
      );
      return {
        filter: [
          ...state.filter.slice(0, index), // everything before current post
          {
            ...state.filter[index],
            isChecked: payload.isChecked,
          },
          ...state.filter.slice(index + 1), // everything after current post
        ],
      };

    default:
      return state;
  }
};
