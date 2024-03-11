export const getSubscribersStart = () => ({
  type: "GET_SUBCRIBERS_START",
});
subscriber;

export const getSubscribersSuccess = (subscribers) => ({
  type: "GET_SUBCRIBERS_SUCCESS",
  payload: subscribers,
});

export const getSubscribersFailure = () => ({
  type: "GET_SUBCRIBERS_FAILURE",
});

// create
export const createSubscriberStart = () => ({
  type: "CREATE_SUBCRIBER_START",
});

export const createSubscriberSuccess = (subscriber) => ({
  type: "CREATE_SUBCRIBER_SUCCESS",
  payload: subscriber,
});

export const createSubscriberFailure = () => ({
  type: "CREATE_SUBCRIBER_FAILURE",
});

//update
export const updateSubscriberStart = () => ({
  type: "UPDATE_SUBCRIBER_START",
});

export const updateSubscriberSuccess = (subscriber) => ({
  type: "UPDATE_SUBCRIBER_SUCCESS",
  payload: subscriber,
});

export const updateSubscriberFailure = () => ({
  type: "UPDATE_SUBCRIBER_FAILURE",
});

//delete
export const deleteSubscriberStart = () => ({
  type: "DELETE_SUBCRIBER_START",
});

export const deleteSubscriberSuccess = (id) => ({
  type: "DELETE_SUBCRIBER_SUCCESS",
  payload: id,
});

export const deleteSubscriberFailure = () => ({
  type: "DELETE_SUBCRIBER_FAILURE",
});
