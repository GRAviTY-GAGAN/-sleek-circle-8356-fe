import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as recipeReducer } from "../Redux/recipeReducer/reducer";
import { adminReducer } from "./Role/roleReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  recipeReducer,
  adminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
