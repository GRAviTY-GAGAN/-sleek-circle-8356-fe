import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useSearchParams } from "react-router-dom";
// import ProductCard from "../../Components/ProductCard";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Heading, SkeletonText } from "@chakra-ui/react";
import "./BreakfastList.css"
// import { Pagination } from "../../Pages/Pagination";

export const BreakfastList = () => {
//   const [query, setQuery] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const products = useSelector((store) => store.ProductReducer.products);
//   const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//   const loading = useSelector((store) => store.ProductReducer.isLoading);
//   const initialPage = searchParams.get("page");
//   const [page, setPage] = useState(+initialPage || 1);
//   const location = useLocation();
//   const dispatch = useDispatch();
//   let ref = useRef();

//   let obj = {
//     params: {
//       brand: searchParams.getAll("brand"),
//       category: searchParams.getAll("category"),
//       _sort: searchParams.get("order") && "price",
//       _order: searchParams.get("order"),
//       _page: searchParams.get("page"),
//       _limit: 12,
//     },
//   };

//   const paramObj = {
//     params: {
//       q: query && query,
//     },
//   };

//   useEffect(() => {
//     let param = {
//       page,
//     };
//     setSearchParams(param);
//   }, [page]);

//   //Fetching Data
//   useEffect(() => {
//     console.log("data", obj);
//     dispatch(mensProduct(obj));
//   }, [location.search]);

//   //Search functionality
//   useEffect(() => {
//     if (ref.current) {
//       clearTimeout(ref.current);
//     }

//     ref.current = setTimeout(() => {
//       dispatch(mensProduct(paramObj));
//     }, 1000);
//   }, [query]);

  return (
    <div style={{textAlign: "left"}}>
      <div className="input">
        <input
          type="text"
          className="search"
          autoComplete="off"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
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
      ) : !loading && products.length ? (
        <div className="main">
          <Scrollbars>
            <div className="grid">
              {products.length > 0 &&
                products.splice(0, 12).map((el, i) => {
                  return <ProductCard key={i} {...el} />;
                })}
            </div>
          </Scrollbars>
        </div>
      ) : (
        <Box textAlign="center" py={10} px={6}>
          <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Sorry No Data Found
          </Heading>
        </Box>
      )}
      <Box>
        <Pagination page={page} setPage={setPage} />
      </Box>
    </div>
  );
};
