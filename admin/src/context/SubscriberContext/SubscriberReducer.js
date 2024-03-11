const SubscriberReducer = (state, action) => {
  switch (action.type) {
    case "GET_SUBCRIBERS_START":
      return {
        subscribers: [],
        isFetching: true,
        error: false,
      };
    case "GET_SUBCRIBERS_SUCCESS":
      return {
        subscribers: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_SUBCRIBERS_FAILURE":
      return {
        subscribers: [],
        isFetching: false,
        error: true,
      };

    // create
    case "CREATE_SUBCRIBERS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_SUBCRIBERS_SUCCESS":
      return {
        subscribers: [...state.subscribers, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_SUBCRIBERS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //update
    case "UPDATE_SUBCRIBERS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_SUBCRIBERS_SUCCESS":
      return {
        subscribers: state.subscribers.map(
          // (subscriber) => subscriber._id === action.payload._id && action.payload
          (subscriber) =>
            subscriber._id === action.payload._id ? action.payload : subscriber
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_SUBCRIBERS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //delete
    case "DELETE_SUBCRIBERS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "DELETE_SUBCRIBERS_SUCCESS":
      return {
        subscribers: state.subscribers.filter(
          (subscriber) => subscriber._id !== action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "DELETE_SUBCRIBERS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default SubscriberReducer;
