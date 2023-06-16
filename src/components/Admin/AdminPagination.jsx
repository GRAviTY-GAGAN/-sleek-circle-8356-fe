import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const AdminPagination = ({ recipesCount, page, handlePageChange }) => {
  recipesCount = Math.ceil(recipesCount / 12);

  function pageChange(e) {
    handlePageChange(e.target.name);
  }

  return (
    <div>
      <Flex justify={"center"} mt={4}>
        <Button
          backgroundColor={"green.400"}
          color={"white"}
          _hover={{
            color: "black",
            background: "#edf2f7",
          }}
          onClick={(e) => pageChange(e)}
          name="prev"
          isDisabled={page == 1}
        >
          Prev
        </Button>
        <Button
          backgroundColor={"transparent"}
          _hover={{
            background: "transparent",
          }}
        >
          {page}/{recipesCount}
        </Button>
        <Button
          backgroundColor={"green.400"}
          _hover={{
            color: "black",
            background: "#edf2f7",
          }}
          color={"white"}
          onClick={(e) => pageChange(e)}
          name="next"
          isDisabled={page == recipesCount}
        >
          Next
        </Button>
      </Flex>
    </div>
  );
};

export default AdminPagination;
