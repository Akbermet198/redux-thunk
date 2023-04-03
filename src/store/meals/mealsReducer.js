import { act } from "react-dom/test-utils";
import { fetchAPI } from "../../lib/fetchApi";

export const mealsactionTypes = {
  GET_MEALS: "GET_MEALS",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initState = {
  meals: [],
  isLoading: false,
  error: "",
};
export const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case mealsactionTypes.GET_MEALS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: "",
      };
    case mealsactionTypes.GET_MEALS_FAILED:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await fetchAPI("foods");
      dispatch({ type: mealsactionTypes.GET_MEALS });
    } catch (error) {
      dispatch({
        type: mealsactionTypes.GET_MEALS_FAILED,
        payload: "someError",
      });
    }
  };
};
