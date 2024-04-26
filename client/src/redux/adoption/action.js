import App from "../../Pages/Shop/App";
import { createAdoption, getAllAdoption } from "../../services/adoptions";
import { showSnackbar } from "../snackbar/action";
import {
  SET_ADOPTIONS_LOADER,
  GET_ALL_ADOPTIONS,
  APPROVE_ADOPTION,
} from "./actionType";

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

export const fetchAllAdoptions = () => async (dispatch) => {
  try {
    dispatch(setAdoptionsLoader(true)); // Set loader to true while fetching data

    const response = await getAllAdoption(); // Fetch adoption data from API
    const { data } = response;

    dispatch({
      type: GET_ALL_ADOPTIONS,
      payload: data, // Set fetched adoption data in the state
    });

    dispatch(setAdoptionsLoader(false)); // Set loader back to false after data is fetched
  } catch (error) {
    console.error("Error fetching adoptions:", error);
    dispatch(setAdoptionsLoader(false)); // Ensure loader is reset in case of error
  }
};

// export const approveAdoption = ({ id, status }) => {
//   return async (dispatch) => {
//     try {
//       dispatch(setAdoptionsLoader(true)); // Set loader to true while fetching data

//       // Call the approveAdoption API method with the provided id and status
//       const response = await approveAdoption(id, status);

//       const { data } = response;

//       dispatch({
//         type: APPROVE_ADOPTION,
//         payload: data, // Set fetched adoption data in the state
//       });

//       dispatch(setAdoptionsLoader(false)); // Set loader back to false after data is fetched
//     } catch (error) {
//       console.error("Error approving adoption:", error);
//       dispatch(setAdoptionsLoader(false)); // Ensure loader is reset in case of error
//     }
//   };
// };

// Action creator to set adoption loader state
export const setAdoptionsLoader = (isLoading) => ({
  type: SET_ADOPTIONS_LOADER,
  payload: isLoading,
});
