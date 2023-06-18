import { LOCATION_ACTION_TYPE } from "./actionTypes";

const initialState = {
  location: "",
};

export function locationReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_ACTION_TYPE: {
      return { ...state, location: action.payload };
    }

    default: {
      return state;
    }
  }
}
