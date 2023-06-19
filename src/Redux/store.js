import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as recipeReducer } from "../Redux/recipeReducer/reducer";
import { adminReducer } from "./Role/roleReducer";
import { locationReducer } from "./locationReducer/locationReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  recipeReducer,
  adminReducer,
  locationReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
