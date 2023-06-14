import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {reducer as recipeReducer} from "../Redux/recipeReducer/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    recipeReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))