import { ADMIN_TYPE, COURSE_COUNT } from "./actionTypes";

const initialState = {
  admin: false,
  counts: {
    breakfastCount: 3,
    lunchCount: 6,
    dinnerCount: 5,
    startersCount: 7,
    drinksCount: 2,
  },
};

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_TYPE: {
      return { ...state, admin: action.payload };
    }

    case COURSE_COUNT: {
      return {
        ...state,
        counts: {
          breakfastCount: action.breakfastCount,
          lunchCount: action.lunchCount,
          dinnerCount: action.dinnerCount,
          startersCount: action.startersCount,
          drinksCount: action.drinksCount,
        },
      };
    }

    default: {
      return state;
    }
  }
}
