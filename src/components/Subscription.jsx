import { Box, Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Subscription = () => {
  return (
    <Box>
      <Box
        display={{ lg: "flex" }}
        justifyContent={"space-around"}
        gap={"2rem"}
        w={"100%"}
        bg={"#f7fafc"}
        p={"1rem"}
        mt={"2rem"}
        // mb={"1rem"}
      >
        <Box
          textAlign={"center"}
          w={{ lg: "50%" }}
          border={"2px solid black"}
          borderRadius={"1rem"}
          lineHeight={"3rem"}
        >
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            GET YOUR OWN
          </Text>
          <Text fontSize={"3xl"}>Recipe Fit Cookbooks!</Text>
          <Flex p={"1rem"} justify={"center"}>
            <Image
              w={"20%"}
              src="https://www.skinnytaste.com/wp-content/uploads/2023/03/skinnytaste-simple-book-cover-125.jpg"
            />
            <Image
              w={"20%"}
              src="https://www.skinnytaste.com/wp-content/uploads/2021/07/Skinnytaste-air-fryer-dinners.jpg"
            />
            <Image
              w={"20%"}
              src="https://www.skinnytaste.com/wp-content/uploads/2020/06/skinnytastemealprep-125.jpg"
            />
            <Image
              w={"20%"}
              src="https://www.skinnytaste.com/wp-content/uploads/2019/01/Skinnytaste-Air-Fryer_cover-125.png"
            />
          </Flex>
          <Button
            bg={"#02bf62"}
            _hover={{ bg: "#91ddb7" }}
            color={"white"}
            p={"1rem"}
          >
            MORE COOKBOOKS
          </Button>
        </Box>
        <Box
          w={{ lg: "50%" }}
          textAlign={"center"}
          border={"2px solid black"}
          borderRadius={"1rem"}
          lineHeight={"3rem"}
          p={"1rem"}
        >
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            DELIVERED RIGHT TO YOUR INBOX!
          </Text>
          <Text fontSize={"3xl"}>Subscribe Today!</Text>
          <Text lineHeight={"2.3rem"} fontSize={"lg"}>
            Subscribe to my weekly email newsletter for a FREE and youll get the
            latest meal ideas & new recipes every week!
          </Text>
          <Flex>
            <Input w={"30%"} bg={"whiteAlpha.700"} placeholder="Your Name" />
            <Input w={"30%"} bg={"white"} placeholder="Your Email" />
            <Button
              bg={"#02bf62"}
              _hover={{ bg: "#91ddb7" }}
              color={"white"}
              p={"1rem"}
            >
              SUBSCRIBE
            </Button>
          </Flex>
          <Text lineHeight={"3rem"} fontSize={"lg"}>
            Yes! Send me new recipes and content via email!
          </Text>
          <Text lineHeight={"2rem"} fontSize={"sm"}>
            You can unsubscribe at any time by clicking the link in the footer
            of our emails.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;
