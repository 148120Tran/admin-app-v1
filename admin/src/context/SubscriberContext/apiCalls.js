import axios from "axios";

import {
  createSubscriberFailure,
  createSubscriberStart,
  createSubscriberSuccess,
  deleteSubscriberFailure,
  deleteSubscriberStart,
  deleteSubscriberSuccess,
  getSubscribersFailure,
  getSubscribersStart,
  getSubscribersSuccess,
  updateSubscriberFailure,
  updateSubscriberStart,
  updateSubscriberSuccess,
} from "./SubscriberActions";

export const getSubscribers = async (dispatch) => {
  dispatch(getSubscribersStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getSubscribersSuccess(res.data));
  } catch (err) {
    dispatch(getSubscribersFailure());
  }
};
Subscriber;
//create
export const createSubscriber = async (subscriber, dispatch) => {
  dispatch(createSubscriberStart());
  try {
    const res = await axios.post("/subscribers", subscriber, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createSubscriberSuccess(res.data));
  } catch (err) {
    dispatch(createSubscriberFailure());
  }
};

//delete
export const deleteSubscriber = async (id, dispatch) => {
  dispatch(deleteSubscriberStart());
  try {
    await axios.delete("/subscribers/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteSubscriberSuccess(id));
  } catch (err) {
    dispatch(deleteSubscriberFailure());
  }
};

// //update
// export const updateSubscriber = async (id, dispatch) => {
//   dispatch(updateSubscriberStart());
//   try {
//     const res = await axios.put("/movies/" + id, {
//       headers: {
//         token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(updateMovieFailure());
//   }
// };

//update
export const updateSubscriber = async (id, subscriberData, dispatch) => {
  dispatch(updateSubscriberStart());

  try {
    //  API endpoint  `/Subscribers/:id`
    const res = await axios.put(`/subscribers/${id}`, subscriberData, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });

    // the API response contains the updated Subscriber data
    dispatch(updateSubscriberSuccess(res.data));
  } catch (err) {
    dispatch(updateSubscriberFailure());
  }
};
