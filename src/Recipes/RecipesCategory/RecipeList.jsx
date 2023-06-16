import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Heading, SkeletonText } from "@chakra-ui/react";
import { recipeData } from "../../Redux/recipeReducer/action";
import ProductCard from "../RecipePages/ProductCard";
import "./RecipeList.css";

export const RecipeList = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const recipes = useSelector((store) => store.recipeReducer.recipes);
  const loading = useSelector((store) => store.recipeReducer.isLoading);
  const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const dispatch = useDispatch();
  const location = useLocation();
  let ref = useRef();

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      course: searchParams.getAll("course"),
    },
  };

  //Search query
  const paramObj = {
    params: {
      q: query && query,
    },
  };

  //   //Fetching Data
  useEffect(() => {
    // console.log("data", obj);
    dispatch(recipeData(obj));
  }, [location.search]);

  //Search functionality
  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => {
      dispatch(recipeData(paramObj));
    }, 1000);
  }, [query]);

  return (
    <div style={{ textAlign: "left" }}>
      <div className="input">
        <input
          type="text"
          className="search"
          autoComplete="off"
          placeholder="Search 🔍"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="grid">
          {skeleton.map((el, i) => {
            return (
              <Box
                key={i + Date.now()}
                padding="0"
                bg="white"
                borderRadius="5px"
              >
                <SkeletonText
                  mt="4"
                  noOfLines={1}
                  spacing="1"
                  skeletonHeight="260"
                />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="3"
                />
              </Box>
            );
          })}
        </div>
      ) : !loading && recipes.length ? (
        <div className="main">
          <div className="grid">
            {recipes.length > 0 &&
              recipes.map((el, i) => {
                return <ProductCard key={el._id} {...el} />;
              })}
          </div>
        </div>
      ) : (
        <Box textAlign="center" py={10} px={6}>
          <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Sorry No Data Found
          </Heading>
        </Box>
      )}
    </div>
  );
};
