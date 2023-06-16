import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  SkeletonText,
} from "@chakra-ui/react";
import axios from "axios";
import "./AdminProductsComponent.css";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Recipes/RecipePages/ProductCard";
import AdminProductCard from "./AdminProductCard";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
import AdminPagination from "./AdminPagination";

const AdminProductsComponent = ({ show }) => {
  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [recipes, setRecipes] = useState([]);
  const [recipesCount, setRecipesCount] = useState(0);
  const [loading, setloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [pageNo, setPageNo] = useState(searchParams.get("page") || 1);
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [course, setCourse] = useState(searchParams.getAll("course") || []);

  // category.length > 0 ? (urlparams.category = category) : "";

  useEffect(() => {
    const urlparams = {
      category: category,
      course,
      page: pageNo,
    };
    setSearchParams(urlparams);
    fetchProducts();
    // console.log(searchParams.get("page"));
  }, [category, course, pageNo]);

  function fetchProducts() {
    setloading(true);
    axios
      .get(`${url}/recipe/`, {
        params: {
          page: pageNo,
          category,
          course,
        },
      })
      .then((res) => {
        // console.log(res, "RECIPES");
        setRecipes(res.data.recipes);
        setRecipesCount(Math.ceil(res.data.recipesCount / 12));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }

  function handlePageChange(text) {
    if (text == "prev") {
      setPageNo((prev) => +prev - 1);
    } else if (text == "next") {
      setPageNo((prev) => +prev + 1);
    }
  }

  function handleCategoryChange(e) {
    const { value } = e.target;
    let newCategory = [...category];

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((item) => item != value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  }

  function handleCourseChange(e) {
    const { value } = e.target;
    let newCourse = [...course];

    if (newCourse.includes(value)) {
      newCourse = newCourse.filter((item) => item != value);
    } else {
      newCourse.push(value);
    }
    setCourse(newCourse);
  }

  return (
    <div>
      <div className="AdminProductsComponent__sidebarAndProducts">
        <div
          style={{ zIndex: 1 }}
          className={`${
            show
              ? "AdminProductsComponent__sidebar shownav"
              : "AdminProductsComponent__sidebar"
          }`}
        >
          <div>
            <div className="AdminProductsComponent__FieldName zero">
              Category
            </div>
            <div>
              <Checkbox
                value={"Veg"}
                onChange={(e) => handleCategoryChange(e)}
                colorScheme="green"
                isChecked={category.includes("Veg")}
              >
                Veg
              </Checkbox>
            </div>
            <div>
              <Checkbox
                onChange={(e) => handleCategoryChange(e)}
                value={"Non-Veg"}
                colorScheme={"red"}
                isChecked={category.includes("Non-Veg")}
              >
                Non-veg
              </Checkbox>
            </div>
          </div>
          <div>
            <div className="AdminProductsComponent__FieldName">Course</div>
            <div>
              <Checkbox
                onChange={(e) => handleCourseChange(e)}
                isChecked={course.includes("Breakfast")}
                value="Breakfast"
              >
                Breakfast
              </Checkbox>
            </div>
            <div>
              <Checkbox
                isChecked={course.includes("Lunch")}
                onChange={(e) => handleCourseChange(e)}
                value="Lunch"
              >
                Lunch
              </Checkbox>
            </div>
            <div>
              <Checkbox
                isChecked={course.includes("Dinner")}
                onChange={(e) => handleCourseChange(e)}
                value="Dinner"
              >
                Dinner
              </Checkbox>
            </div>
          </div>
          <div className="AdminProductsComponent__SidebarPagination">
            <div className="AdminProductsComponent__FieldName">Page</div>
            <Flex justify={"space-between"}>
              <Button
                name="prev"
                onClick={(e) => handlePageChange(e.target.name)}
                isDisabled={pageNo == 1}
                backgroundColor={"green.400"}
                color={"white"}
                _hover={{
                  color: "black",
                  background: "#edf2f7",
                }}
              >
                Prev
              </Button>
              <Button
                onClick={(e) => handlePageChange(e.target.name)}
                name="next"
                isDisabled={pageNo == recipesCount}
                backgroundColor={"green.400"}
                color={"white"}
                _hover={{
                  color: "black",
                  background: "#edf2f7",
                }}
              >
                Next
              </Button>
            </Flex>
          </div>
        </div>
        <div className="AdminProductsComponent__productsMainCont">
          {loading ? (
            <div className="AdminProductsComponent__products">
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
            <>
              <div className="AdminProductsComponent__products">
                {recipes.length > 0 &&
                  recipes.map((el, i) => {
                    return <AdminProductCard key={el._id} {...el} />;
                  })}
              </div>
              <div>
                <AdminPagination
                  handlePageChange={handlePageChange}
                  recipesCount={recipesCount}
                  page={pageNo}
                />
              </div>
            </>
          ) : (
            <Box textAlign="center" py={10} px={6}>
              <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
              <Heading as="h2" size="xl" mt={6} mb={2}>
                Sorry No Data Found
              </Heading>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProductsComponent;
