import { GET_POKEDEX } from "../constants/actionType";

const INITIAL_STATE = {
  data: {},
  isSubmitLoading: false,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEDEX.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_POKEDEX.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case GET_POKEDEX.FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {}
      };

    default:
      return state;
  }
};
