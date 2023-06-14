import "./breakfastSidebar.css"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Text,
  AccordionIcon,
  AccordionPanel,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const BreakfastSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  useEffect(() => {
    let params = {
      category
    };
    setSearchParams(params);
  }, [category]);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={"#f1f4f6"}
          borderRadius={"5px"}
          color={"black"}
          mb={3}
          w={280}
        >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"} pl={"2"}>CATEGORY</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <input
                type="checkbox"
                value={"veg"}
                onChange={handleCategory}
                checked={category.includes("veg")}
              />
              <label>Vegetarian</label>
              <br />
              <input
                type="checkbox"
                value={"non-veg"}
                onChange={handleCategory}
                checked={category.includes("non-veg")}
              />
              <label>Non-Vegetarian</label>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
