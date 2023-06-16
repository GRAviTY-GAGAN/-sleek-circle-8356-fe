import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const admin = useSelector((store) => store.adminReducer.admin);
  const location = useLocation();
  // location.state = location.pathname;

  location.pathname == "/adminRecipes"
    ? (location.state = location.pathname + location.search)
    : (location.state = location.pathname);

  // console.log(location, admin);

  if (admin) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/adminLogin"} state={location.pathname} />;
  }
};

export default AdminPrivateRoute;
