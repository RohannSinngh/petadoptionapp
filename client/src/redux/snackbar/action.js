import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "./actionType";

export const showSnackbar =
  ({ payload }) =>
  (dispatch) => {
    dispatch({
      type: SHOW_SNACKBAR,
      payload,
    });
  };

export const hideSnackbar = () => (dispatch) => {
  dispatch({
    type: HIDE_SNACKBAR,
  });
};
