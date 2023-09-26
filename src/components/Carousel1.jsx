import { Component } from "react";
import Slider from "react-slick";
import { Box, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import lunch from "../Utilities/HomePageDetails";
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
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box mb={"5rem"}>
        <Text fontSize={"3xl"} mt={"2rem"} mb={"1rem"} fontWeight={"semibold"}>
          {" "}
          My Latest Healthy Recipes{" "}
        </Text>
        <Slider {...settings}>
          {lunch.map((ele) => {
            return (
              <Box key={ele.id} display={"flex"} gap={"20rem"}>
                <Card
                  image={ele.image}
                  name={ele.name}
                  category={ele.category}
                  course={ele.course}
                  description={ele.description}
                  review={ele.review}
                  timeRequired={ele.timeRequired}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    );
  }
}
