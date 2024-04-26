import {
  APPROVE_ADOPTION,
  GET_ALL_ADOPTIONS,
  SET_ADOPTIONS_LOADER,
} from "./actionType";

const initialState = {
  alladoption: [],
  useradoption: [],
  adoption: null,
  adooptionLoader: false,
};

const adoptionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ADOPTIONS:
      return {
        ...state,
        alladoption: payload,
      };

    case SET_ADOPTIONS_LOADER:
      return {
        ...state,
        adooptionLoader: payload,
      };
    default:
      return state;
  }
};
export default adoptionReducer;
