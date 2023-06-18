import { Avatar, Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const RecipeCarousel = () => {
  return (
    <Box mt={"2rem"} mb={"5rem"}>
      <SimpleGrid
        textAlign={"center"}
        fontSize={"lg"}
        gap={"1rem"}
        lineHeight={"3rem"}
        fontWeight={"semibold"}
        columns={[2, 3, 6, 9]}
        cursor={"pointer"}
      >
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2015/01/Avocado-Toast-with-Egg-6-500x500.jpg"
          />
          <Text>Breakfast</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2021/05/air-fryer-chicken-sandwich-21-500x500.jpg"
          />
          <Text>Lunch</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2022/10/Slow-Cooker-Beef-Ragu-7-500x500.jpg"
          />
          <Text>Dinner</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2009/04/No-Bake-Cheesecake-4-1-500x500.jpg"
          />
          <Text>Dessert</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2021/12/Sausage-and-Broccoli-Rabe-Egg-Rolls-1-7-500x500.jpg"
          />
          <Text>Apetizers</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2020/12/Virgin-Bloody-Mary-7-500x500.jpg"
          />
          <Text>Drinks</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2012/03/healthy-snack-for-kids-fruit-skewers-with-yogurt-fruit-dip-260x260.jpg"
          />
          <Text>Snacks</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2014/12/gingerbreadcookietrees-500x500.jpg"
          />
          <Text>Holidays</Text>
        </Box>
        <Box>
          <Avatar
            size={"xl"}
            src="https://www.skinnytaste.com/wp-content/uploads/2017/06/how-to-make-an-epic-charcuterie-board-1-4-260x260.jpg"
          />
          <Text>All Recipes</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default RecipeCarousel;
