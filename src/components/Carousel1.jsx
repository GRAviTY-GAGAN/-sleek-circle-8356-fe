import { Component } from "react";
import Slider from "react-slick";
import ProductCardHome from "./ProductCardHome";
import { Box, Text } from "@chakra-ui/react";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }


export default class MultipleItems extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <Box>
        <Text fontSize={"3xl"} fontWeight={"normal"}> My Latest Healthy Recipes </Text>
        <Slider {...settings}>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
          <Box>
            <ProductCardHome />
          </Box>
        </Slider>
      </Box>
    );
  }
}
