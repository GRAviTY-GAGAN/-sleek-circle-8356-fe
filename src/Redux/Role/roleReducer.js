import { ADMIN_TYPE } from "./actionTypes";

const initialState = {
  admin: false,
};

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_TYPE: {
      return { ...state, admin: action.payload };
    }

    default: {
      return state;
    }
  }
}
