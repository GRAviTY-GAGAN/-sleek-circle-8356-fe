import React from "react";
import { Box, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Card from "../components/Card";
import { random } from "../DB/homeData";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  //   fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function NewCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <Box position={"relative"} m={"auto"} overflow={"hidden"}>
        {/* Left Icon */}
        <IconButton
          // aria-label="left-arrow"
          colorScheme={"linear(to-r, green.400, green.400)"}
          bgGradient="linear(to-r, green.400, green.400)"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme={"white"}
          bgGradient="linear(to-r, green.400, green.400)"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>

        {/* Slider */}
        <div style={{ margin: "10px 0" }}>
          {/* <div
            style={{
              display: "flex",
              width: "97%",
              justifyContent: "space-between",
              margin: "auto",
            }}
          > */}
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            {" "}
            Reader Favorites{" "}
          </Text>
          <Text mb={"2rem"}>
            Readers are raving about these recipes! If you’re not sure where to
            start, these highly-rated recipes are sure to be a hit.
          </Text>
          {/* </div> */}
          <div>
            <Slider
              style={{ margin: "auto", padding: "12px" }}
              {...settings}
              ref={(slider) => setSlider(slider)}
            >
              {random?.map((el, index) => (
                <Card key={index} {...el} />
              ))}
            </Slider>
          </div>
        </div>
      </Box>
    </div>
  );
}
