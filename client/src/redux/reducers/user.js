import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../actionTypes/user";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwtToken: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //request
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    //success
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload };

    //failure
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
