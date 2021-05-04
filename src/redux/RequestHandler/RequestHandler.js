import { ActionTypes } from "./request-types";

const initialState = {
  requests: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_STARTED: {
      const existingCall = state.requests.find(
        (request) => request.requestName === action.payload.request.name
      );

      if (existingCall) {
        return {
          ...state,
          requests: state.requests.map((request) =>
            request.name === action.payload.request.name
              ? { ...request, inProgress: true, error: null }
              : request
          ),
        };
      }

      return {
        ...state,
        requests: [...state.requests, action.payload.request],
      };
    }
    case ActionTypes.REQUEST_FINISHED: {
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request.name !== action.payload.request.name
        ),
      };
    }
    case ActionTypes.REQUEST_FAILED: {
      return {
        ...state,
        requests: state.requests.map((request) =>
          request.name === action.payload.request.name
            ? {
                ...request,
                error: action.payload.request.error,
                inProgress: false,
              }
            : request
        ),
      };
    }
    default: {
      return state;
    }
  }
};
