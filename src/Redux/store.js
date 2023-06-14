import { applyMiddleware, legacy_createStore } from "redux";
import { adminReducer } from "./Role/roleReducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(adminReducer, applyMiddleware(thunk));
