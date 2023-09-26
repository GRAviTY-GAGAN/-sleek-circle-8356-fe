import React from "react";
import { Box, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Card from "../components/Card";
import { last } from "../DB/last";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  //   fade: true,
  infinite: true,
  //   autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Last() {
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
          <Text fontSize={"3xl"} mt={"3rem"} fontWeight={"semibold"}>
            {" "}
            High Protein Recipes{" "}
          </Text>
          <Text mb={"2rem"}>
            These high-protein meals will fill you up and keep you feeling
            satisfied. Start your day with a high-protein breakfast, then try
            one of my snacks or dinner ideas later in the day.
          </Text>
          {/* </div> */}
          <div>
            <Slider
              style={{ margin: "auto", padding: "12px" }}
              {...settings}
              ref={(slider) => setSlider(slider)}
            >
              {last?.map((el, index) => (
                <Card key={index} {...el} />
              ))}
            </Slider>
          </div>
        </div>
      </Box>
    </div>
  );
}
