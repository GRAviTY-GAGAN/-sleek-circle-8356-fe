import {
  Box,
  Button,
  Flex,
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
import "./AdminRecipes.css";
import React, { useState } from "react";
import axios from "axios";
import AdminProductsComponent from "../../components/Admin/AdminProductsComponent";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { Doughnut } from "react-chartjs-2";
import Chart, { ArcElement, Legend, Tooltip } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Tilt from "react-parallax-tilt";

const AdminRecipes = () => {
  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const AdminRecipes__ModalCloseBTN = document.querySelector(
    ".AdminRecipes__ModalCloseBTN"
  );

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
  const [show, setShow] = useState(false);
  const [searchString, setSearchString] = useState("");

  const count = useSelector((store) => store.adminReducer.counts);
  // console.log(count, "COUNTS");
  console.log(document.cookie, "DOCUMENT");

  const courses = ["Breakfast", "Lunch", "Dinner", "Starters", "Drinks"];
  function handleAddRecipe() {
    const recipeObj = {
      name,
      image,
      description,
      ingredients,
      directions,
      course,
      category,
      review,
      timeRequired,
      variations,
    };
    if (
      name &&
      image &&
      description &&
      ingredients &&
      directions &&
      course &&
      category
    ) {
      setLoading(true);
      axios
        .post(`${url}/recipe/add`, recipeObj, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          AdminRecipes__ModalCloseBTN.click();
          toast({
            title: res.statusText,
            description: res.data.msg,
            status: res.data.status,
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
          setName("");
          setimage("");
          setdescription("");
          setingredients("");
          setdirections("");
          setcourse("");
          setcategory("");
          setreview("");
          settimeRequired("");
          setvariations("");
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Recipe not saved.",
            description: "Something went wrong please try again.",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast({
        title: "Insufficient details.",
        description: "Please fill all the required details.",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  Chart.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Breakfast", "Lunch", "Dinner", "Starters", "Drinks"],
    datasets: [
      {
        label: "Course",
        data: [
          count.breakfastCount,
          count.lunchCount,
          count.dinnerCount,
          count.startersCount,
          count.drinksCount,
        ],
      },
    ],
    backgroundColor: [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 205, 86)",
      "rgb(52, 219, 105)",
      "rgb(171,129,173)",
    ],
    borderColor: [],
  };

  let searchDebounceId;
  function handleSearchInputChange(e) {
    if (searchDebounceId) {
      clearTimeout(searchDebounceId);
    }

    searchDebounceId = setTimeout(() => {
      // console.log(e.target.value)
      setSearchString(e.target.value);
    }, 1500);
  }

  const options = {};

  const linedata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Unique Users",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div className="AdminRecipes__mainCont">
      <div style={{ paddingBottom: "4rem" }}>
        <Flex
          mt={4}
          mb={4}
          gap={{ base: "2rem", xl: "7rem" }}
          justify={"center"}
          align={"center"}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box
            w={{ base: "350px", md: "480px", lg: "650px", xl: "650px" }}
            h={{ lg: "300px", xl: "300px" }}
          >
            <Line data={linedata} />
          </Box>

          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            // glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="white"
            scale={1.02}
            style={{
              borderRadius: "10px",
              paddingBottom: "1rem",
              width: "250px",
              paddingTop: "1rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <Box>
              <Doughnut data={data} options={options}></Doughnut>
              <Box fontWeight={500} pt={2} textAlign={"center"}>
                Course Item Count
              </Box>
            </Box>
          </Tilt>
        </Flex>
      </div>
      <Flex
        align={"center"}
        justify={"center"}
        display={{ base: "flex", md: "none" }}
      >
        <Input
          onChange={(e) => handleSearchInputChange(e)}
          w={"250px"}
          borderColor={"gray.400"}
          focusBorderColor="#c4ccd8"
          borderRight={"none"}
          borderTopRightRadius={"0"}
          borderBottomRightRadius={"0"}
          placeholder="medium size"
          size="md"
        />
        <Button
          border={"1px solid #c4ccd8"}
          borderLeft={"none"}
          borderTopLeftRadius={"0"}
          borderBottomLeftRadius={"0"}
        >
          <Search2Icon />
        </Button>
      </Flex>
      <div
        style={{
          position: "sticky",
          top: "63px",
          background: "white",
          zIndex: 1,
        }}
      >
        <Flex
          justify={{ base: "space-between", md: "flex-end" }}
          gap={{ md: "2rem" }}
          align={"center"}
          w={"90%"}
          m={"auto"}
          pt={6}
          bg={"white"}
          pb={4}
          zIndex={1}
        >
          <div className="AdminRecipes__SidebarHam">
            <Button
              onClick={() => setShow(!show)}
              backgroundColor={"#edf2f7"}
              fontSize={20}
            >
              <HamburgerIcon />
            </Button>
          </div>
          <Flex display={{ base: "none", md: "flex" }}>
            <Input
              onChange={(e) => handleSearchInputChange(e)}
              w={"350px"}
              borderColor={"gray.400"}
              focusBorderColor="#c4ccd8"
              borderRight={"none"}
              borderTopRightRadius={"0"}
              borderBottomRightRadius={"0"}
              placeholder="medium size"
              size="md"
            />
            <Button
              border={"1px solid #c4ccd8"}
              borderLeft={"none"}
              borderTopLeftRadius={"0"}
              borderBottomLeftRadius={"0"}
            >
              <Search2Icon />
            </Button>
          </Flex>
          <Button onClick={onOpen} colorScheme="teal" size="md">
            Add recipe
          </Button>
        </Flex>
      </div>

      {/* PRODUCTS START */}
      <AdminProductsComponent
        searchString={searchString}
        setShow={setShow}
        show={show}
      />
      {/* PRODUCTS END */}
      <Box>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add your recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Recipe name *</FormLabel>
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
                disabled={loading}
                onClick={handleAddRecipe}
                colorScheme="blue"
                mr={3}
              >
                Save
              </Button>
              <Button className="AdminRecipes__ModalCloseBTN" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default AdminRecipes;
