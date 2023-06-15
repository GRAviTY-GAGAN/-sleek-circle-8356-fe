import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_TYPE } from "../../Redux/Role/actionTypes";
import { adminReducer } from "../../Redux/Role/roleReducer";

const Admin = () => {
  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  const dispatch = useDispatch();
  // const store = useSelector((store) => store);

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  return <div>Admin</div>;
};

export default Admin;
