import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UserPrivateRoute = ({ children }) => {
  const role = useSelector((store) => store.adminReducer.role);
  const location = useLocation();
  // location.state = location.pathname;

  location.pathname == "/adminRecipes"
    ? (location.state = location.pathname + location.search)
    : (location.state = location.pathname);

  //   console.log(location, admin);

  if (role == "user") {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default UserPrivateRoute;
