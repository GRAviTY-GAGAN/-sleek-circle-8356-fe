import React, { useEffect, useState } from "react";
import "./SavedRecipes.css";
import axios from "axios";
import AdminProductCard from "../components/Admin/AdminProductCard";
import { Box, useToast } from "@chakra-ui/react";
import UserProductCard from "../components/UserProductCard";

const SavedRecipes = () => {
  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  const [recipes, setRecipes] = useState([]);
  const toast = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`${url}/recipe/savedRecipes`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRemoveRecipe(id) {
    axios
      .get(`${url}/recipe/removeSaved/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast({
          title: res.statusText,
          description: res.data.msg,
          status: res.data.status,
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        if (res.data.status == "success") {
          fetchData();
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top",
          title: `Request Failed`,
          description: `Something went wrong please try again.`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  }

  return (
    <div className="savedRecipes__mainCont">
      <Box className="savedRecipes__products">
        {recipes.map((recipe) => (
          <UserProductCard
            key={recipe._id}
            handleRemoveRecipe={handleRemoveRecipe}
            {...recipe}
          />
        ))}
      </Box>
    </div>
  );
};

export default SavedRecipes;
