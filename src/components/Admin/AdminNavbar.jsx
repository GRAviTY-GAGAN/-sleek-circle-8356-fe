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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../../assets/rlogo.png";
import AdminAvatar from "../../assets/adminUserIcon.png";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_TYPE } from "../../Redux/Role/actionTypes";

const Links = [
  // { name: "Home", path: "admin" },
  { name: "Recipes", path: "adminRecipes" },
];

export default function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const location = useLocation();

  function handleLogout() {
    localStorage.setItem("token", "");
    location.state = null;
    dispatch({ type: ADMIN_TYPE, payload: false });
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
              <img src={Logo} alt="RecipeFit" />
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
                  to={link.path}
                  key={link.name}
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
                <Avatar size={"md"} src={AdminAvatar} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>log out</MenuItem>
                {/* <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem> */}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.path} key={link.name}>
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
