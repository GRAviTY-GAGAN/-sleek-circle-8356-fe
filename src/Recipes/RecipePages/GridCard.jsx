import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const GridCard = ({id, date, image, text, link}) => {

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' spacing={5} bg={"gray.100"} >
      <Image src={image} width={"100%"} height={"65%"} mt={"0"}/>
      <Box pl={"4"} pr={"4"}>
        <Box
          mt='1'
          fontWeight='semibold'
          lineHeight='tight'
          textAlign={"left"}
          textDecoration={"underline"}
        >
        <Text>{text}</Text>
        </Box>
      </Box>
    </Box>
  )
}