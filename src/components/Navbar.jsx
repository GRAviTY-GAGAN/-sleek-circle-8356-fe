import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import RpLogo from "../assets/RpLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_TYPE } from "../Redux/Role/actionTypes";

const Links = [
  { name: "Home", path: "/" },
  { name: "Recipe", path: "/recipe" },
  { name: "Signup", path: "/signup" },
  { name: "Course", path: "/course" },
  { name: "User", path: "/user" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const adminReducer = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    localStorage.setItem("token", "");
    toast({
      title: "Logged out.",
      description: "User logged out successfully.",
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top",
    });
    dispatch({ type: ADMIN_TYPE, payload: false, role: "" });
  }

  function handleLogin() {
    navigate("/login");
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex w={"90%"} alignItems={"center"} justify={"space-between"}>
            <Box w={"150px"}>
              <Image src={RpLogo} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  style={({ isActive }) => ({
                    padding: "0.3rem",
                    borderBottom: isActive
                      ? "2px solid #2F855A"
                      : "2px solid transparent",
                  })}
                  key={link.name}
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Saved Recipes</MenuItem>{" "}
                {!adminReducer.admin && adminReducer.role == "user" ? (
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                ) : (
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                )}
                {/* <MenuDivider />
                <MenuItem>Link 3</MenuItem> */}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} textAlign={"center"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  style={({ isActive }) => ({
                    padding: "0.3rem",
                    borderBottom: isActive
                      ? "2px solid #2F855A"
                      : "2px solid transparent",
                    w: ".2rem",
                  })}
                  key={link.name}
                  onClick={isOpen ? onClose : onOpen}
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
