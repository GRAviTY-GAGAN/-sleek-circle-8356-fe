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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../../Redux/Role/actionTypes";

export default function SimpleCard() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((store) => store.adminReducer.admin);

  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  function handleAdminLogin() {
    if (email && password) {
      axios
        .post(`${url}/users/admin`, { email, password })
        .then((res) => {
          console.log(res);
          toast({
            position: "top",
            title: res.statusText,
            description: res.data.msg,
            status: res.data.status,
            duration: 9000,
            isClosable: true,
          });

          if (res.data.status == "success") {
            localStorage.setItem("token", res.data.token);
            dispatch(verifyToken()).then(() => {
              navigate("/admin");
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            position: "top",
            title: `Request Failed`,
            description: `Something went wrong please try again.`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => {
          console.log(admin, "ADMIN FINALLY");
        });
    }
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          {/* <Heading fontSize={"4xl"}>Log in to your Admin account</Heading> */}
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={{ base: "335px", md: "470px" }}
        >
          <Heading marginBottom={4} fontSize={"4xl"}>
            Admin Access
          </Heading>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  required={true}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"flex-end"}
                justify={"end"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"green.500"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
                onClick={handleAdminLogin}
              >
                Log in.
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
