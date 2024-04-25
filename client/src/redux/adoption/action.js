import { createAdoption } from "../../services/adoptions";
import { showSnackbar } from "../snackbar/action";
import { SET_ADOPTIONS_LOADER, GET_ALL_ADOPTIONS } from "./actionType";

export const adopt =
  ({ payload }) =>
  (dispatch) => {
    dispatch({
      type: SET_ADOPTIONS_LOADER,
      payload: true,
    });

    createAdoption(payload)
      .then(({ data }) => {
        dispatch(
          showSnackbar({
            payload: {
              message: "Created scucess",
              type: "success",
            },
          })
        );
        dispatch({
          type: SET_ADOPTIONS_LOADER,
          payload: false,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SET_ADOPTIONS_LOADER,
          payload: false,
        });
      });
  };
