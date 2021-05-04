//get request part of the state
const requestState = (state) => state.request;

export const requestsInProgress = (state) =>
  requestState(state).requests.filter((request) => request.inProgress).length >
  0;

//get requests in progress either by single requestName or by requestNames array
export const namedRequestsInProgress = (
  state,
  requestName // RequestsEnum | RequestsEnum[]
) => {
  console.log(requestName);

  const singleNamedRequestInProgress = (singleRequestName) =>
    requestState(state).requests.find(
      (request) => request.name === singleRequestName && request.inProgress
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
