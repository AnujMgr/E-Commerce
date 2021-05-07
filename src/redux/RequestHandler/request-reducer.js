import { ActionTypes } from "./request-types";

const initialState = {
  requests: [],
};

export const requestReducer = (state = initialState, { type, request }) => {
  // console.log(request);
  switch (type) {
    case ActionTypes.REQUEST_STARTED: {
      const existingCall = state.requests.find(
        (req) => req.requestName === request.requestName
      );

      if (existingCall) {
        console.log(existingCall);
        return {
          ...state,
          requests: state.requests.map((req) =>
            req.name === request.requestName
              ? { ...req, inProgress: true, error: null }
              : req
          ),
        };
      }
      return {
        ...state,
        requests: [...state.requests, request],
      };
    }
    case ActionTypes.REQUEST_FINISHED: {
      return {
        ...state,
        requests: state.requests.filter(
          (req) => req.requestName !== request.requestName
        ),
      };
    }
    case ActionTypes.REQUEST_FAILED: {
      return {
        ...state,
        requests: state.requests.map((req) =>
          req.requestName === request.requestName
            ? {
                req,
                error: request.error,
                inProgress: false,
              }
            : req
        ),
      };
    }
    default: {
      return state;
    }
  }
};
