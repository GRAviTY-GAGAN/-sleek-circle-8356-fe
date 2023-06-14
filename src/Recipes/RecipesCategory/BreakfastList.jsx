import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
// import ProductCard from "../../Components/ProductCard";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Heading, SkeletonText } from "@chakra-ui/react";
import "./BreakfastList.css"
import { recipeData } from "../../Redux/recipeReducer/action";
// import { Pagination } from "../../Pages/Pagination";

export const BreakfastList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const recipes = useSelector(store => store.recipeReducer.recipes);
  console.log(recipes)
  const loading = useSelector((store) => store.recipeReducer.isLoading);
  // const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const dispatch = useDispatch();

  let obj = {
    params: {
      category: searchParams.getAll("category")
    },
  };

//   //Fetching Data
  useEffect(() => {
    console.log(recipes)
    console.log("data", obj);
    dispatch(recipeData(obj));
  }, []);

  return (
    <div style={{textAlign: "left"}}>
      {/* {loading ? (
        <div className="grid">
          {skeleton.map((el, i) => {
            return (
              <Box padding="0" bg="white" borderRadius="5px">
                <SkeletonText
                  mt="4"
                  noOfLines={1}
                  spacing="1"
                  skeletonHeight="28"
                />
                <SkeletonText
                  mt="4"
                  noOfLines={3}
                  spacing="3"
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
                recipes.splice(0, 6).map((el, i) => {
                  return <ProductCard key={i} {...el} />;
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
      )} */}
    </div>
  );
};
