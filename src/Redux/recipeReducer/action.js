import axios from "axios";
import { RECIPE_FAILURE, RECIPE_REQUEST, RECIPE_SUCCESS } from "./actionType";

const url =
  process.env.NODE_ENV == "development"
    ? import.meta.env.VITE_REACT_APP_LOCAL_URL
    : import.meta.env.VITE_REACT_APP_PROD_URL;

export const recipeData = (data) => (dispatch) => {
  dispatch({ type: RECIPE_REQUEST });
  axios
    // .get("https://thzv8b-8080.csb.app/recipes", data)
    .get(`${url}/recipe/`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: RECIPE_SUCCESS, payload: res.data.recipes });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: RECIPE_FAILURE });
    });
};
