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

  const courses = ["Breakfast", "Lunch", "Dinner"];
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

  return (
    <div className="AdminRecipes__mainCont">
      <Flex justify={"flex-end"} mt={6}>
        <Button onClick={onOpen} colorScheme="teal" size="md">
          Add recipe
        </Button>
      </Flex>
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
