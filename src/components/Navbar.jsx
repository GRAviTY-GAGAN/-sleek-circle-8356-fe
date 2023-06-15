import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import RpLogo from "../assets/RpLogo.png";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <Box>
      <Box display={"flex"} flexDirection={"column"} gap={".1rem"}>
        <Box
          display={"flex"}
          gap={"2rem"}
          justifyContent={"space-around"}
          // border={"1px solid black"}
          bg={"#fdfaf7"}
        >
          <Box>
            <NavLink to={"/"}>
              <Image w={"50%"} src={RpLogo} />
            </NavLink>
          </Box>

          <Box
            display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
            gap={"2rem"}
            alignItems={"center"}
          >
            <Flex>
              <Input w={"100%"} bg={"#ffffff"} />
              <Button>
                <BiSearch />
              </Button>
            </Flex>
            <NavLink to={"/"}>
              <Text fontWeight={"medium"} fontSize={"2xl"}>
                Home
              </Text>
            </NavLink>
            <NavLink to={"/login"}>
              <Text fontWeight={"medium"} fontSize={"2xl"}>
                Login
              </Text>
            </NavLink>
            <NavLink to={"/signup"}>
              <Text fontWeight={"medium"} fontSize={"2xl"}>
                Signup
              </Text>
            </NavLink>
            <NavLink to={"/course"}>
              <Text fontWeight={"medium"} fontSize={"2xl"}>
                Course
              </Text>
            </NavLink>
            <NavLink to={"/user"}>
              <Text fontWeight={"medium"} fontSize={"2xl"}>
                User
              </Text>
            </NavLink>
          </Box>
          {/* mobile diisplay */}
        </Box>
        <Box
          display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
          gap={"2rem"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Flex>
            <Input w={"100%"} bg={"#ffffff"} />
            <Button>
              <BiSearch />
            </Button>
          </Flex>
          <NavLink to={"/"}>
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              Home
            </Text>
          </NavLink>
          <NavLink to={"/login"}>
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              Login
            </Text>
          </NavLink>
          <NavLink to={"/signup"}>
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              Signup
            </Text>
          </NavLink>
          <NavLink to={"/course"}>
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              Course
            </Text>
          </NavLink>
          <NavLink to={"/user"}>
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              User
            </Text>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
