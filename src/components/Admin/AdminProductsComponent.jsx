import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminProductsComponent = () => {
  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    axios
      .get(`${url}/recipe/`, {
        params: {
          page: pageNo,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <div>AdminProductsComponent</div>;
};

export default AdminProductsComponent;
