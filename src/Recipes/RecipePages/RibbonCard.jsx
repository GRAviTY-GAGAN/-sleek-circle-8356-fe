import React from "react";
import "./RibbonCard.css";

export const RibbonCard = () => {
  return (
    <div className="card">
      <span className="offer">New Recipe</span>
      <div className="item-image">
        <img src="https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg" />
      </div>
      <div className="item-content">
        <h3>SGF Grill Pizza</h3>{" "}
        <p>Lorem ipsum dolor sit amet consect jsuet...</p>
        <Box display="flex" mt={"1"}>
          {"3.6k"} <FaRegThumbsUp style={{margin: "2.8px"}}/> | {" "} {"1 hr 5 mins"} <IoTime style={{margin: "6px 2px"}}/>
          </Box>
      </div>
    </div>
  );
};
