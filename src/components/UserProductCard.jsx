import { Box, Image, Badge, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { BiFoodTag } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import "./UserProductCard.css";
import axios from "axios";

function UserProductCard({
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
  handleRemoveRecipe,
}) {
  const [liked, setLiked] = useState(false);

  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  return (
    <>
      <Box
        className="UserProductCard__mainCont"
        position={"relative"}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor={"default"}
      >
        <Box
          zIndex={2}
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveRecipe(_id);
          }}
          cursor={"pointer"}
          className="UserProductCard__delete"
          bg={"red.500"}
        >
          <DeleteIcon />
        </Box>
        <Image src={image} alt={name} mt={"0"} w={"100%"} h={"300px"} />
        <Box pt="2" pl="4" pr="4" pb="2">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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
            <Box display="flex" flexWrap={"wrap"}>
              <Flex justify={"center"} align={"center"}>
                <IoTime style={{ margin: "6px 2px" }} />
                <Box> {timeRequired || timeRequire}</Box>
              </Flex>
              &nbsp;|&nbsp;
              <Flex justify={"center"} align={"center"}>
                <Box>{likes.length}</Box>{" "}
                <FaRegThumbsUp style={{ margin: "2.8px" }} />{" "}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default UserProductCard;
