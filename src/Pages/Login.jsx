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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_TYPE } from "../Redux/Role/actionTypes";

const url =
  process.env.NODE_ENV == "development"
    ? import.meta.env.VITE_REACT_APP_LOCAL_URL
    : import.meta.env.VITE_REACT_APP_PROD_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    const payload = {
      email,
      password,
    };
    if (email && password) {
      axios
        .post(`${url}/users/login`, payload)
        .then((res) => {
          console.log(res, "LOGIN");
          toast({
            title: res.statusText,
            description: res.data.msg,
            status: res.data.status,
            duration: 6000,
            isClosable: true,
            position: "top",
          });

          if (res.data.status === "success") {
            localStorage.setItem("token", res.data.token);
            dispatch({ type: ADMIN_TYPE, payload: false, role: "user" });
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
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
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
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
                bg={"#319795"}
                color={"white"}
                onClick={handleClick}
                _hover={{
                  bg: "#319795",
                }}
              >
                Log in
              </Button>
              <NavLink to={"/signup"} style={{ textAlign: "center" }}>
                <Link color={"blue.400"}>Create account? Signup</Link>
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
