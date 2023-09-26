import { Box, Image, Badge, Text, Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiFoodTag } from "react-icons/bi";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { RECIPE_SUCCESS } from "../../Redux/recipeReducer/actionType";

function ProductCard({
  _id,
  image,
  name,
  category,
  course,
  description,
  review,
  timeRequired,
  timeRequire,
  likes,
}) {
  const [liked, setLiked] = useState(false);
  const [Like, setLike] = useState(likes.length);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const likeData = [...likes]

  const previousRecipe = useSelector((store) => store.recipeReducer.recipes);
  const totalrecipe = useSelector((store) => store.recipeReducer.totalrecipe);
  const dispatch = useDispatch();

  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  const toast = useToast();

  function handleSaveRecipe() {
    setVisible(true);
    // console.log("SAveIF", _id);
    axios
      .post(
        `${url}/recipe/saveRecipe/${_id}`,
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

  const likePost = (_id) => {
    let id = { _id };
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .patch(`${url}/recipe/like/${_id}`, id, { headers })
      .then((res) => {
        console.log(res.data);
        setData({ ...res.data.updatedRecipe });
        setLike(res.data.updatedRecipe.likes.length);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(() => {
    // console.log(likes)
  }, [data, Like]);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link to={`/recipe/${_id}`}>
        <Image
          src={image}
          alt={name}
          mt={"0"}
          w={"100%"}
          h={"300px"}
          cursor="pointer"
        />
      </Link>
      <Box pt="2" pl="4" pr="4" pb="2">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Badge
            colorScheme="transparent"
            borderRadius="5px"
            px="2"
            ml={"-2"}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {category == "Veg" ? (
              <BiFoodTag color="green" fontSize={"16px"} />
            ) : (
              <BiFoodTag color="red" fontSize={"16px"} />
            )}
            <Text>{category}</Text>
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="11px"
            textTransform="uppercase"
            mt="-1"
          >
            <Badge borderRadius="6px" px="2" bg="#c2f295">
              {course}
            </Badge>
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {name}
        </Box>

        <Box mt="1">
          {description ? description.substring(0, 50) + "..." : ""}
        </Box>

        <Box
          display="flex"
          mt="1"
          fontWeight={"500"}
          color="green.800"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex">
            {Like}{" "}
            <FaRegThumbsUp
                onClick={() => {
                  likePost(_id);
                }}
                style={{ margin: "2.8px", cursor: "pointer", color: "green" }}
              />{" "}
            | {timeRequired || timeRequire}{" "}
            <IoTime style={{ margin: "6px 2px" }} />
          </Box>

          <Flex
            p={1}
            mt={1}
            alignItems="center"
            justifyContent={"space-between"}
            cursor="pointer"
            onClick={handleSaveRecipe}
          >
            {visible ? (
              <BsHeartFill fill="red" fontSize={"20px"} />
            ) : (
              <BsHeart fontSize={"20px"} />
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
export default ProductCard;
