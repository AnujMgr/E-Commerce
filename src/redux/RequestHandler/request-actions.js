import { ActionTypes } from "./request-types";

export const requestStarted = (requestName) => ({
  type: ActionTypes.REQUEST_STARTED,
  request: {
    requestName,
    inProgress: true,
  },
});

export const requestFinished = (requestName) => ({
  type: ActionTypes.REQUEST_FINISHED,
  request: {
    requestName,
    inProgress: false,
  },
});

export const requestFailed = ({ requestName, error }) => ({
  type: ActionTypes.REQUEST_FAILED,
  request: {
    requestName,
    inProgress: false,
    error,
  },
});
