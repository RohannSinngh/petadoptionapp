import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../actionTypes/user";

//get user
const getUserDataRequest = () => ({ type: GET_USER_REQUEST });
const getUserDataSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});
const getUserDataFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const getUser = () => async (dispatch) => {
  dispatch(getUserDataRequest());

  try {
    const res = await fetch("/about", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();

    if (!res.status === 200) {
      throw new Error("Failed to fetch data");
    }
    dispatch(getUserDataSuccess(data));
    console.log("getUser action ", data);
  } catch (err) {
    console.log("Error fetching data:", err);
    dispatch(getUserDataFailure(err));
  }
};
