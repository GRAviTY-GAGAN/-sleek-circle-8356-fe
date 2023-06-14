import { RECIPE_FAILURE, RECIPE_REQUEST, RECIPE_SUCCESS } from "./actionType"

const initalState = {
    isLoading: false,
    isError: false,
    recipes: []
}

export const reducer = (state=initalState, {type, payload}) => {
    switch(type){
        case RECIPE_REQUEST: 
            return {...state, isLoading: true}
        case RECIPE_SUCCESS:
            return {...state, isLoading: false, recipes: payload}
        case RECIPE_FAILURE: 
            return {...state, isLoading: false, isError: true}
        default:
            return state;
    }
}