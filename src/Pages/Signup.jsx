import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const toast = useToast();

  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  const handleClick = () => {
    const payload = {
      name,
      email,
      password,
    };
    if (name && email && password) {
      if (password !== confPassword) {
        toast({
          title: "Password did not match.",
          description: "Password and confirm password should match.",
          status: "warning",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        return;
      }

      axios
        .post(`${url}/users/signup`, payload)
        .then((res) => {
          console.log(res);
          toast({
            title: res.statusText,
            description: res.data.msg,
            status: res.data.status,
            duration: 6000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((err) => console.log(err));
    } else {
      toast({
        // title: '',
        description: "please fill all fields",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={2}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"end"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>

              <Button
                onClick={() => {
                  handleClick();
                }}
                bg={"#319795"}
                color={"white"}
                _hover={{
                  bg: "#319795",
                }}
              >
                Sign in
              </Button>
              <NavLink to={"/login"} style={{ textAlign: "center" }}>
                <Link color={"blue.400"}>Already have an account? Login.</Link>
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
