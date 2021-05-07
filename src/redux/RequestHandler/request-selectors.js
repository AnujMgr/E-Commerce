//get request part of the state
//just a constant for reuse
const requestState = (state) => state;

export const requestsInProgress = (state) =>
  requestState(state).requests.filter((request) => request.inProgress).length >
  0;

//get requests in progress either by single requestName or by requestNames array
export const namedRequestsInProgress = (
  state,
  requestName // RequestsEnum | RequestsEnum[]
) => {
  const singleNamedRequestInProgress = (singleRequestName) =>
    requestState(state).requests.find(
      (request) =>
        request.requestName === singleRequestName && request.inProgress
    ) !== undefined;

  if (Array.isArray(requestName)) {
    return requestName.some(singleNamedRequestInProgress);
  }

  return singleNamedRequestInProgress(requestName);
};

export const namedRequestError = (state, requestName) =>
  requestState(state).requests.find(
    (request) => request.name === requestName && request.error !== null
  )?.error;
