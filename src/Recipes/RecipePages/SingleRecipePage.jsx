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
  Grid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GridContainer } from "./GridContainer";
import { Protein } from "../../DB/protein";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

export const SingleRecipePage = () => {
  const {category, id} = useParams();
  const [recipe, setRecipe] = useState([])  

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
          {recipe?.review} <FaRegThumbsUp style={{ margin: "2.8px" }} /> Reviews | Prepare this delicious recipe in : {recipe?.timeRequired} <IoTime style={{ margin: "6px 2px" }} />
        </Box>
        <Box mt={"3"}>
          <Text textTransform={"uppercase"}><span style={{fontWeight: "700", textDecoration: "underline"}}>COURSE:</span> {recipe?.course}</Text>
        </Box>
        <Box mt={"3"}>
          <Text textTransform={"uppercase"}><span style={{fontWeight: "700", textDecoration: "underline"}}>CATEGORY:</span> {recipe?.category}</Text>
        </Box>
      </Box>
      <Box w={"80%"} ml={"-7"} mt={"5"} mb={"5"} display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white" }}>JUMP TO RECIPE</Button>
        <Button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white" }}>JUMP TO VIDEO</Button>
        <Button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white", display: "flex", alignItems: "center" }}> <RxCheckbox style={{marginTop: "2px"}}/> SAVE TO LIST</Button>
        <Button style={{padding: "6px 14px", borderRadius: "6px", backgroundColor: "#4ce256", color: "white", display: "flex", alignItems: "center" }}> <AiOutlineHeart style={{marginTop: "2px"}} /> SAVE RECIPE</Button>
      </Box>
      <Text ><i>This post may contain affiliate links. Read my <span style={{color: "red", textDecoration: "underline", cursor: "pointer"}}>disclosure policy.</span></i></Text>
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
              <Text fontSize={{ base: "16px", lg: "18px" }}>{recipe?.description}</Text>
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
              <Text fontSize={{ base: "16px", lg: "18px" }}>
              <li>
                <ul>{recipe?.ingredients}</ul>
              </li>
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
                HOW TO MAKE {recipe?.name}
              </Text>
              <Text fontSize={{ base: "16px", lg: "18px" }}>
              <li>
                <ul>{recipe?.directions}</ul>
              </li>
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
                VARIATIONS
              </Text>
              <Text fontSize={{ base: "16px", lg: "18px" }}>
              <li>
                <ul>{recipe?.variations}</ul>
              </li>
              </Text>
            </Box>

            <Grid columns={{base: 1, sm: 2, md: 3, lg: 4}}>
            </Grid>
          </Stack>

        </Stack>
      </SimpleGrid>
    </Container>
      <GridContainer data={Protein} title={"High Protein Recipes"}/>
    </div>
  );
};
