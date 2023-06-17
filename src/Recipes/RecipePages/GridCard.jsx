import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const GridCard = ({id, date, image, text, link}) => {

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' spacing={5} bg={"gray.100"} >
      <Image src={image} width={"100%"} height={"60%"} mt={"0"}/>
      <Box p='6'>
        <Box display='flex' alignItems='baseline' textAlign={"left"}>
          <Text>{date}</Text>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          textAlign={"left"}
          textDecoration={"underline"}
        >
          <Link to={link}>{text}</Link>
        </Box>
      </Box>
    </Box>
  )
}