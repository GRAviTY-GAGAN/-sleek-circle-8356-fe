import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex } from "@chakra-ui/layout";
import { Doughnut } from "react-chartjs-2";
import Chart, { ArcElement, Legend, Tooltip } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Admin = () => {
  const url =
    process.env.NODE_ENV == "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_URL
      : import.meta.env.VITE_REACT_APP_PROD_URL;

  Chart.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  const data = {
    labels: ["Breakfast", "Lunch", "Dinner", "Starters"],
    datasets: [{ label: "Course", data: [3, 6, 7, 5] }],
    backgroundColor: [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 205, 86)",
      "rgb(171,129,173)",
    ],
    borderColor: [],
  };

  const options = {};

  const linedata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Unique Users",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div>
      <Flex
        mt={4}
        mb={4}
        gap={{ base: "2rem", xl: "7rem" }}
        justify={"center"}
        align={"center"}
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Box
          w={{ base: "350px", md: "480px", lg: "650px", xl: "650px" }}
          h={{ lg: "300px", xl: "300px" }}
        >
          <Line data={linedata} />
        </Box>

        <Box w={"250px"}>
          <Doughnut data={data} options={options}></Doughnut>
        </Box>
      </Flex>
    </div>
  );
};

export default Admin;
