import axios from "axios";

export const ADMIN_TYPE = "ADMIN_TYPE";
export const COURSE_COUNT = "COURSE_COUNT";

const url =
  process.env.NODE_ENV == "development"
    ? import.meta.env.VITE_REACT_APP_LOCAL_URL
    : import.meta.env.VITE_REACT_APP_PROD_URL;

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    // console.log("HERE");
    return await axios
      .post(`${url}/users/verify`, { token })
      .then((res) => {
        // console.log(res, "VERIFY");
        if (res.data.decoded.role == "admin") {
          dispatch({
            type: ADMIN_TYPE,
            payload: true,
            role: res.data.decoded.role,
          });
        } else {
          dispatch({
            type: ADMIN_TYPE,
            payload: false,
            role: res.data.decoded.role,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    dispatch({ type: ADMIN_TYPE, payload: false });
  }
};
