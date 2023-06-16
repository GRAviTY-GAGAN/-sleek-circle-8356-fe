import "./RecipeSidebar.css"
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

export const RecipeSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  const initialCourse = searchParams.getAll("course");
  const [course, setCourse] = useState(initialCourse || []);

  useEffect(() => {
    let params = {
      category,
      course
    };
    setSearchParams(params);
  }, [category, course]);

  //Category
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

  //Course
  const handleCourse = (e) => {
    const { value } = e.target;
    let newCourse = [...course];
    if (newCourse.includes(value)) {
      newCourse = newCourse.filter((el) => el !== value);
    } else {
      newCourse.push(value);
    }
    setCourse(newCourse);
  };

  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={"#e7ffec"}
          borderRadius={"5px"}
          color={"black"}
          mb={3}
          w={"90%"}
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
                value={"Veg"}
                onChange={handleCategory}
                checked={category.includes("Veg")}
              />
              <label>Veg</label>
              <br />
              <input
                type="checkbox"
                value={"Non-Veg"}
                onChange={handleCategory}
                checked={category.includes("Non-Veg")}
              />
              <label>Non-Veg</label>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={"#e7ffec"}
          borderRadius={"5px"}
          color={"black"}
          mb={3}
          w={"90%"}
          className="AccordionItem"
        >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"} pl={"2"}>COURSES</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <input
                type="checkbox"
                value={"Breakfast"}
                onChange={handleCourse}
                checked={course.includes("Breakfast")}
              />
              <label>Breakfast</label>
              <br />
              <input
                type="checkbox"
                value={"Lunch"}
                onChange={handleCourse}
                checked={course.includes("Lunch")}
              />
              <label>Lunch</label>
              <br />
              <input
                type="checkbox"
                value={"Dinner"}
                onChange={handleCourse}
                checked={course.includes("Dinner")}
              />
              <label>Dinner</label>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
