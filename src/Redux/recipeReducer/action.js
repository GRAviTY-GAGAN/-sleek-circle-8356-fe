import axios from "axios";
import { RECIPE_FAILURE, RECIPE_REQUEST, RECIPE_SUCCESS } from "./actionType";

const url =
  process.env.NODE_ENV == "development"
    ? import.meta.env.VITE_REACT_APP_LOCAL_URL
    : import.meta.env.VITE_REACT_APP_PROD_URL;

export const recipeData = (data) => (dispatch) => {
  // console.log("paramsdata",data)
  dispatch({ type: RECIPE_REQUEST });
  axios
    // .get("https://thzv8b-8080.csb.app/recipes", data)
    .get(`${url}/recipe/`, data)
    .then((res) => {
      // console.log(res);
      let arr = res.data.recipes
      let temp = []
      for(let i=0; i<arr.length; i++){
        temp.push({...arr[i], likesLength:arr[i].likes?.length});
      }

      dispatch({
        type: RECIPE_SUCCESS,
        payload: temp,
        totalrecipe: res.data.recipesCount,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: RECIPE_FAILURE });
    });
};
