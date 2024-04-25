import { getAllPets, getPetById, getPetsByCategory } from "../../services/pets";
import {
  GET_PETS_BY_CATEGORY,
  GET_PET_BY_ID,
  SET_PETS_LOADER,
  GET_ALL_PETS,
} from "./actionType";

export const fetchAllPets = () => (dispatch) => {
  dispatch({
    type: SET_PETS_LOADER,
    payload: true,
  });

  getAllPets()
    .then(({ data }) => {
      dispatch({
        type: SET_PETS_LOADER,
        payload: false,
      });
      dispatch({
        type: GET_ALL_PETS,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: SET_PETS_LOADER,
        payload: false,
      });
      dispatch({
        type: GET_ALL_PETS,
        payload: [],
      });
    });
};

export const fetchPetsByCategory =
  ({ payload }) =>
  (dispatch) => {
    dispatch({
      type: SET_PETS_LOADER,
      payload: true,
    });
    getPetsByCategory(payload)
      .then(({ data }) => {
        dispatch({
          type: SET_PETS_LOADER,
          payload: false,
        });
        dispatch({
          type: GET_PETS_BY_CATEGORY,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SET_PETS_LOADER,
          payload: false,
        });
        dispatch({
          type: GET_PETS_BY_CATEGORY,
          payload: [],
        });
      });
  };

export const fetchPetById =
  ({ payload }) =>
  (dispatch) => {
    dispatch({
      type: SET_PETS_LOADER,
      payload: true,
    });

    getPetById(payload)
      .then(({ data }) => {
        dispatch({
          type: SET_PETS_LOADER,
          payload: false,
        });
        dispatch({
          type: GET_PET_BY_ID,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SET_PETS_LOADER,
          payload: false,
        });
        dispatch({
          type: GET_PET_BY_ID,
          payload: [],
        });
      });
  };
