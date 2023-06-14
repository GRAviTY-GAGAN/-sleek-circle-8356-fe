import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const admin = useSelector((store) => store.admin);

  if (admin) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/adminLogin"} />;
  }
};

export default AdminPrivateRoute;
