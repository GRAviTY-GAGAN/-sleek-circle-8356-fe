import axios from "axios"
import { RECIPE_FAILURE, RECIPE_REQUEST, RECIPE_SUCCESS } from "./actionType"

export const recipeData = (data) => (dispatch) => {
    dispatch({type: RECIPE_REQUEST})
    axios.get("https://thzv8b-8080.csb.app/recipes",data).then((res)=> {
        dispatch({type: RECIPE_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: RECIPE_FAILURE})
    })
}