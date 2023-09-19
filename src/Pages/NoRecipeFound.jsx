import { Box, Heading, Text, Button, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NoRecipeFound() {
  return (
    <Box style={{width: "100%", marginLeft:"200%"}}>
      <Box textAlign={"center"} py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        No recipe saved!!
      </Text>
     <Link to={"/recipe"}>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Go to Recipes
      </Button>
      </Link>
    </Box>
    </Box>
  )
}