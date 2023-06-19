import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { RxCheckbox } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";

import {
  Box,
  chakra,
  Container,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { GridContainer } from "./GridContainer";
import { Protein } from "../../DB/protein";
import { useSelector } from "react-redux";
import axios from "axios";
import { DeleteIcon } from "@chakra-ui/icons";

const url =
  process.env.NODE_ENV == "development"
    ? import.meta.env.VITE_REACT_APP_LOCAL_URL
    : import.meta.env.VITE_REACT_APP_PROD_URL;

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

export const SingleRecipePage = () => {
  const AdminRecipes__ModalCloseBTN = document.querySelector(
    ".AdminRecipes__ModalCloseBTN"
  );
  const DeleteModalCloseBtn = document.querySelector(".DeleteModalCloseBtn");

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const courses = ["Breakfast", "Lunch", "Dinner", "Starters", "Drinks"];

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [ingredients, setingredients] = useState("");
  const [directions, setdirections] = useState("");
  const [variations, setvariations] = useState("");
  const [course, setcourse] = useState("");
  const [review, setreview] = useState("");
  const [category, setcategory] = useState("");
  const [timeRequired, settimeRequired] = useState("");
  const [deleteLoading, setdeleteLoading] = useState(false);

  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  const userType = useSelector((store) => store.adminReducer.role);
  const locationStore = useSelector((store) => store.locationReducer.location);

  // console.log(locationStore, "userType");

  function handleSaveRecipe() {
    console.log("SAveIF", id);
    axios
      .post(
        `${url}/recipe/saveRecipe/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        toast({
          title: res.statusText,
          description: res.data.msg,
          status: res.data.status,
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Request failed",
          description: "Something went wrong, try again!!",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      });
  }

  function handleConfirmDelete() {
    setdeleteLoading(true);
    axios
      .delete(`${url}/recipe/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast({
          title: res.statusText,
          description: res.data.msg,
          status: res.data.status,
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Request failed",
          description: "Something went wrong, try again!!",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      })
      .finally((res) => {
        console.log(res, "FINALLY");
        navigate(locationStore);
        setdeleteLoading(false);
      });
  }

  function handleUpdateRecipe() {
    setLoading(true);
    const recipeObj = {
      name,
      image,
      description,
      ingredients,
      directions,
      variations,
      course,
      review,
      category,
      timeRequired,
    };
    axios
      .post(`${url}/recipe/updateRecipe/${id}`, recipeObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast({
          title: res.statusText,
          description: res.data.msg,
          status: res.data.status,
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        if (res.data.status == "success") {
          AdminRecipes__ModalCloseBTN.click();
          fetchData();
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Request failed",
          description: "Something went wrong, try again!!",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function populateTheModalFields(recipe) {
    setName(recipe.name);
    setimage(recipe.image);
    setdescription(recipe.description);
    setingredients(recipe.ingredients);
    setdirections(recipe.directions);
    setvariations(recipe.variations);
    setcourse(recipe.course);
    setreview(recipe.review);
    setcategory(recipe.category);
    settimeRequired(recipe.timeRequired);
  }

  const fetchData = () => {
    getData(`${url}/recipe/signleRecipe/${id}`)
      .then((res) => {
        // console.log(res, "ESULT")
        setRecipe(res.recipe);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container mt={"10"} maxW={"4xl"}>
        <Box as={"header"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            ml={"-1"}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            {recipe?.name}
          </Heading>
          <Box display="flex" mt={"4"} fontSize={"1.2rem"}>
            {recipe?.review} <FaRegThumbsUp style={{ margin: "2.8px" }} />{" "}
            Reviews | Prepare this delicious recipe in :{" "}
            {recipe?.timeRequired || recipe?.timeRequire}{" "}
            <IoTime style={{ margin: "6px 2px" }} />
          </Box>
          <Box mt={"3"}>
            <Text textTransform={"uppercase"}>
              <span style={{ fontWeight: "700", textDecoration: "underline" }}>
                COURSE:
              </span>{" "}
              {recipe?.course}
            </Text>
          </Box>
          <Box mt={"3"}>
            <Text textTransform={"uppercase"}>
              <span style={{ fontWeight: "700", textDecoration: "underline" }}>
                CATEGORY:
              </span>{" "}
              {recipe?.category}
            </Text>
          </Box>
          <br />
        </Box>
        {userType !== "admin" && (
          <Flex align={"center"}>
            Liked the recipe? You can save this recipe&nbsp;&nbsp;
            <span style={{ fontSize: "30px" }}>👉</span>&nbsp;&nbsp;&nbsp;
            <Button onClick={handleSaveRecipe}>Save Recipe</Button>
          </Flex>
        )}
        {userType === "admin" && (
          <Flex align={"center"}>
            Need to make changes to recipe?&nbsp;&nbsp;
            <span style={{ fontSize: "30px" }}>👉</span>&nbsp;&nbsp;&nbsp;
            <Button
              onClick={() => {
                onOpen();
                populateTheModalFields(recipe);
              }}
            >
              Edit Recipe
            </Button>
          </Flex>
        )}

        <Text>
          <i>
            This post may contain affiliate links. Read my
            <span
              style={{
                color: "red",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              disclosure policy.
            </span>
          </i>
        </Text>
        <SimpleGrid
          columns={{ base: 1, lg: 1 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 8, md: 5 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={recipe?.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "100%", lg: "100%" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gold.200", "gold.600")}
                />
              }
            >
              <Box spacing={{ base: 4, sm: 6 }}>
                <Text
                  fontSize={{ base: "16px", lg: "25px" }}
                  color={useColorModeValue("gray.800", "gray.900")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  textDecoration={"underline"}
                  // textDecorationColor={"green.200"}
                  mb={"4"}
                >
                  DESCRIPTION OF RECIPE
                </Text>
                <Text fontSize={{ base: "16px", lg: "18px" }}>
                  {recipe?.description}
                </Text>
              </Box>

              <Box spacing={{ base: 4, sm: 6 }}>
                <Text
                  fontSize={{ base: "16px", lg: "25px" }}
                  color={useColorModeValue("gray.800", "gray.900")}
                  fontWeight={"500"}
                  textAlign={"center"}
                  textDecoration={"underline"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  INGREDIENTS ADDED IN RECIPE
                </Text>
                <Box fontSize={{ base: "16px", lg: "18px" }}>
                  <ul>
                    {recipe?.ingredients?.split("|").map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
              <Box spacing={{ base: 4, sm: 6 }}>
                <Text
                  fontSize={{ base: "16px", lg: "25px" }}
                  color={useColorModeValue("gray.800", "gray.900")}
                  fontWeight={"500"}
                  textAlign={"center"}
                  textDecoration={"underline"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  HOW TO MAKE {recipe?.name}
                </Text>
                <Box fontSize={{ base: "16px", lg: "18px" }}>
                  <ul>
                    {recipe?.directions?.split("|").map((item, i) => (
                      <li key={Math.random(i)}>{item}</li>
                    ))}
                  </ul>
                </Box>
              </Box>

              <Box>
                {recipe?.variations ? (
                  <Box spacing={{ base: 4, sm: 6 }}>
                    <Text
                      fontSize={{ base: "16px", lg: "25px" }}
                      color={useColorModeValue("gray.800", "gray.900")}
                      fontWeight={"500"}
                      textAlign={"center"}
                      textDecoration={"underline"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      VARIATIONS
                    </Text>
                    <Box fontSize={{ base: "16px", lg: "18px" }}>
                      <ul>
                        {recipe?.variations?.split("|").map((item, i) => (
                          <li key={Date.now() + i}>{item}</li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container mt={"10"} maxW={"8xl"}>
        <GridContainer data={Protein} title={"High Protein Recipes"} />
      </Container>
      <Box>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit your recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Button onClick={onDeleteOpen} colorScheme="red">
                  <DeleteIcon /> &nbsp; Delete recipe
                </Button>
              </FormControl>
              <FormControl>
                <FormLabel mt={4}>Recipe name *</FormLabel>
                <Input
                  value={name}
                  ref={initialRef}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Recipe name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Image *</FormLabel>
                <Input
                  onChange={(e) => setimage(e.target.value)}
                  value={image}
                  placeholder="Image"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description *</FormLabel>
                <Textarea
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                  placeholder="Description"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>
                  Ingredients (use | to seperate a ingredient) *
                </FormLabel>
                <Textarea
                  value={ingredients}
                  onChange={(e) => setingredients(e.target.value)}
                  placeholder="Ingredients"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>
                  Directions (use | to seperate a direction) *
                </FormLabel>
                <Textarea
                  value={directions}
                  onChange={(e) => setdirections(e.target.value)}
                  placeholder="Recipe Directions. Steps to follow whicle cooking"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>
                  Variations (use | to seperate a variation)
                </FormLabel>
                <Textarea
                  value={variations}
                  onChange={(e) => setvariations(e.target.value)}
                  placeholder="Variations for recipe. For example if a item is not available or if some one is alergic to some item what alternate item they can use."
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>course *</FormLabel>
                <Select
                  onChange={(e) => setcourse(e.target.value)}
                  value={course}
                  placeholder="Select course"
                >
                  {courses.map((course) => (
                    <option key={course}>{course}</option>
                  ))}
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>category *</FormLabel>
                <RadioGroup onChange={setcategory} value={category}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="Veg">
                      Vegetarian
                    </Radio>
                    <Radio colorScheme="red" value="Non-Veg">
                      Non-vegetarian
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Review</FormLabel>
                <Input
                  onChange={(e) => setreview(e.target.value)}
                  value={review}
                  placeholder="Recipe reviews"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Time Required</FormLabel>
                <Input
                  value={timeRequired}
                  onChange={(e) => settimeRequired(e.target.value)}
                  placeholder="Time required to cook."
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                isDisabled={loading}
                onClick={handleUpdateRecipe}
                colorScheme="blue"
                mr={3}
              >
                Update
              </Button>
              <Button className="AdminRecipes__ModalCloseBTN" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box>
        <Modal
          blockScrollOnMount={true}
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure you want to delete.</ModalHeader>
            <ModalCloseButton />

            <ModalFooter>
              <Button
                className="DeleteModalCloseBtn"
                colorScheme="red"
                mr={3}
                onClick={onDeleteClose}
              >
                No
              </Button>
              <Button
                isDisabled={deleteLoading}
                onClick={handleConfirmDelete}
                colorScheme="green"
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};
