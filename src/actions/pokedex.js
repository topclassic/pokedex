import axios from "axios";
import { GET_POKEDEX } from "../constants/actionType";

export const updatePokedex = data => ({
  type: GET_POKEDEX.SUCCESS,
  data
});

export const fetchPokedex = (list, search) => async dispatch => {
  dispatch({ type: GET_POKEDEX.REQUEST });
  let params = {
    limit: 20 + list
  };

  console.log("searchsearch", search);
  try {
    if (search) params = { ...params, ...search };
    const respone = await axios({
      method: "get",
      url: `http://localhost:3030/api/cards`,
      params: {
        ...params
      }
    });
    dispatch(updatePokedex(respone.data));
  } catch (error) {
    dispatch({ type: GET_POKEDEX.FAILURE });
  }
};
