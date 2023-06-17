import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { RxCheckbox } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

export const SingleRecipePage = () => {
  const {category, id} = useParams();
  const [recipe, setRecipe] = useState([])  

//   const url = "https://thzv8b-8080.csb.app/recipes"
  const fetchData = () => {
    getData(`https://thzv8b-8080.csb.app/recipes/${[category]}/${id}`)
      .then((res) => {
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
          {recipe?.review} <FaRegThumbsUp style={{ margin: "2.8px" }} /> Reviews | Prepare this delicious recipe in : {recipe?.timeRequired} <IoTime style={{ margin: "6px 2px" }} />
        </Box>
      </Box>
      <Box w={"80%"} ml={"-7"} mt={"5"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
        <button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white" }}>JUMP TO RECIPE</button>
        <button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white" }}>JUMP TO VIDEO</button>
        <button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white", display: "flex", alignItems: "center" }}> <RxCheckbox style={{marginTop: "2px"}}/> SAVE TO LIST</button>
        <button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white", display: "flex", alignItems: "center" }}> <AiOutlineHeart style={{marginTop: "2px"}} /> SAVE RECIPE</button>
      </Box>
      <Text  mt={"5"}><i>This post may contain affiliate links. Read my <span style={{color: "red", textDecoration: "underline", cursor: "pointer"}}>disclosure policy.</span></i></Text>
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
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("gray.500", "gray.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                DESCRIPTION
              </Text>
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
