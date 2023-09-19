import {
  Avatar,
  Box,
  Button,
  Flex,
  Textarea,
  keyframes,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdStarBorderPurple500 } from "react-icons/md";
import { GrStar } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import "./Comment.css";
import reviewImage from "../../assets/reviews.png";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";

const url =
  process.env.NODE_ENV == "development"
    ? import.meta.env.VITE_REACT_APP_LOCAL_URL
    : import.meta.env.VITE_REACT_APP_PROD_URL;

const Comment = ({ id, comments, getComment }) => {
  const [text, setText] = useState("");
  const toast = useToast();
  const UserName = localStorage.getItem("nameOfUser");
  let allComments = [...comments].reverse()

  // console.log("14",id)

  const size = "50px";
  const color = "teal";

  const pulseRing = keyframes`
  0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  // const handleComment = () => {
  //   const payload = {comment: text};
  //   console.log(payload)
  //   fetch(`https://recipefit-o1qb.onrender.com/recipe/comments/${id}`,{
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //     body: JSON.stringify(payload)
  //   })
  //   .then((res)=> res.json())
  //   .then((data)=> {
  //     // toast({
  //     //   title: res.msg,
  //     //   duration: 3000,
  //     //   isClosable: true,
  //     //   position: "top-right",
  //     // });
  //     console.log(data)
  //   })
  //   .catch((err)=> {
  //     // toast({
  //     //   title: "Something went wrong, try again!!",
  //     //   status: "error",
  //     //   duration: 4000,
  //     //   isClosable: true,
  //     //   position: "top-right",
  //     // });
  //     console.log(err)
  //   })
  // }

  const handelCommentPost = () => {
    let data = {
      comment: text,
    };
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .patch(`${url}/recipe/comments/${id}`, data, { headers })
      .then((data) => {
        getComment();
        setText("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
    console.log("comments", comments);

  return (
    <div className="container">
      <Box className="box">
        <Box className="subbox1">
          <div className="flex">
            <MdStarBorderPurple500 fontSize="30px" style={{ margin: "auto" }} />
            <MdStarBorderPurple500 fontSize="30px" style={{ margin: "auto" }} />
            <MdStarBorderPurple500 fontSize="40px" style={{ margin: "auto" }} />
            <MdStarBorderPurple500 fontSize="30px" style={{ margin: "auto" }} />
            <MdStarBorderPurple500 fontSize="30px" style={{ margin: "auto" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="p">
              What do you think of this recipe? Share your experience to help
              others.
            </p>
            <button className="addButton">ADD RATING & REVIEW</button>
          </div>
          <div>
            <img src={reviewImage} alt="" />
          </div>
        </Box>
        <Box className="subbox2">
          <p
            className="p"
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              textDecoration: "underline",
              marginBottom: "15px",
            }}
          >
            Comments
          </p>
          <Scrollbars style={{ width: "100%", height: 270 }}>
            {allComments?.length > 0 ? (
              allComments?.map((el, i) => (
                <div
                  className="commentSection"
                  key={i}
                  style={{ height: "auto" }}
                >
                  <Flex
                    justifyContent="flex-start"
                    alignItems="center"
                    h="auto"
                    w="full"
                    px={3}
                    py={3}
                    overflow="hidden"
                  >
                    <Box
                      as="div"
                      position="relative"
                      w={size}
                      h={size}
                      _before={{
                        content: "''",
                        position: "relative",
                        display: "block",
                        width: "300%",
                        height: "300%",
                        boxSizing: "border-box",
                        marginLeft: "-100%",
                        marginTop: "-100%",
                        borderRadius: "50%",
                        bgColor: color,
                        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                      }}
                    >
                      <Avatar
                        src="https://i.pravatar.cc/300"
                        size="full"
                        position="absolute"
                        top={0}
                      />
                    </Box>
                    <div style={{ marginTop: "3px" }}>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          textDecoration: "underline",
                          marginLeft: "15px",
                        }}
                      >
                        {el.userName}
                      </p>
                      <div className="flex2">
                        <GrStar
                          fontSize="15px"
                          style={{ margin: "auto", color: "gold" }}
                        />
                        <GrStar
                          fontSize="15px"
                          style={{ margin: "auto", color: "gold" }}
                        />
                        <GrStar
                          fontSize="15px"
                          style={{ margin: "auto", color: "gold" }}
                        />
                        <GrStar
                          fontSize="15px"
                          style={{ margin: "auto", color: "gold" }}
                        />
                        <GrStar
                          fontSize="15px"
                          style={{ margin: "auto", color: "gold" }}
                        />
                      </div>
                    </div>
                  </Flex>
                  <Box>
                    <p
                      className="p"
                      style={{
                        textAlign: "justify",
                        padding: "0px 8px",
                        marginTop: "-5px",
                      }}
                    >
                      {el.comment}
                    </p>
                    <Box
                      style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        margin: "-3px 0 10px 21px",
                      }}
                    >
                      <FaThumbsUp fontSize="16px" style={{ color: "green" }} />
                      <p
                        style={{
                          textDecoration: "underline",
                          marginLeft: "6px",
                        }}
                      >
                        Helpful
                      </p>
                    </Box>
                  </Box>
                </div>
              ))
            ) : (
              <div className="commentSection">
                <Flex
                  justifyContent="flex-start"
                  alignItems="center"
                  h="auto"
                  w="full"
                  px={3}
                  py={3}
                  overflow="hidden"
                >
                  <Box
                    as="div"
                    position="relative"
                    w={size}
                    h={size}
                    _before={{
                      content: "''",
                      position: "relative",
                      display: "block",
                      width: "300%",
                      height: "300%",
                      boxSizing: "border-box",
                      marginLeft: "-100%",
                      marginTop: "-100%",
                      borderRadius: "50%",
                      bgColor: color,
                      animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                    }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/300"
                      size="full"
                      position="absolute"
                      top={0}
                    />
                  </Box>
                  <div style={{ marginTop: "3px" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "1rem",
                        textDecoration: "underline",
                        marginLeft: "15px",
                      }}
                    >
                      John Doe
                    </p>
                    <div className="flex2">
                      <GrStar
                        fontSize="15px"
                        style={{ margin: "auto", color: "gold" }}
                      />
                      <GrStar
                        fontSize="15px"
                        style={{ margin: "auto", color: "gold" }}
                      />
                      <GrStar
                        fontSize="15px"
                        style={{ margin: "auto", color: "gold" }}
                      />
                      <GrStar
                        fontSize="15px"
                        style={{ margin: "auto", color: "gold" }}
                      />
                      <GrStar
                        fontSize="15px"
                        style={{ margin: "auto", color: "gold" }}
                      />
                    </div>
                  </div>
                </Flex>
                <Box>
                  <p
                    className="p"
                    style={{
                      textAlign: "justify",
                      padding: "0px 8px",
                      marginTop: "-5px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, mollitia totam illum rem sed exercitationem ab
                    possimus dolorum, dolorem soluta culpa facere cumque. Fuga
                    quaerat iusto sit? Harum, dolor explicabo!
                  </p>
                  <Box
                    style={{
                      width: "50%",
                      display: "flex",
                      alignItems: "center",
                      margin: "-3px 0 10px 21px",
                    }}
                  >
                    <FaThumbsUp fontSize="16px" style={{ color: "green" }} />
                    <p
                      style={{ textDecoration: "underline", marginLeft: "6px" }}
                    >
                      Helpful
                    </p>
                  </Box>
                </Box>
              </div>
            )}
          </Scrollbars>
          <Box className="commentBox">
            <Flex
              justifyContent="flex-start"
              alignItems="center"
              h="auto"
              w="full"
              px={3}
              py={3}
              overflow="hidden"
            >
              <Box
                as="div"
                position="relative"
                w={size}
                h={size}
                _before={{
                  content: "''",
                  position: "relative",
                  display: "block",
                  width: "300%",
                  height: "300%",
                  boxSizing: "border-box",
                  marginLeft: "-100%",
                  marginTop: "-100%",
                  borderRadius: "50%",
                  bgColor: color,
                  animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/300"
                  size="full"
                  position="absolute"
                  top={0}
                />
              </Box>
              <div style={{ marginTop: "3px" }}>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "1rem",
                    textDecoration: "underline",
                    marginLeft: "15px",
                  }}
                >
                  {UserName}
                </p>
                <div className="flex2">
                  <GrStar
                    fontSize="15px"
                    style={{ margin: "auto", color: "gold" }}
                  />
                  <GrStar
                    fontSize="15px"
                    style={{ margin: "auto", color: "gold" }}
                  />
                  <GrStar
                    fontSize="15px"
                    style={{ margin: "auto", color: "gold" }}
                  />
                  <GrStar
                    fontSize="15px"
                    style={{ margin: "auto", color: "gold" }}
                  />
                  <GrStar
                    fontSize="15px"
                    style={{ margin: "auto", color: "gold" }}
                  />
                </div>
              </div>
            </Flex>
            <div className="textarea">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="5"
                cols="40"
                style={{ resize: "none" }}
              ></textarea>
              <br />
              <Button
                onClick={handelCommentPost}
                ml={4}
                mb={2}
                h={8}
                border={"1px solid black"}
              >
                Post
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Comment;
