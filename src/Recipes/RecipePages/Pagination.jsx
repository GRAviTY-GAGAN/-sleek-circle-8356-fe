import React from "react";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight,  } from "react-icons/tfi";
import "./Pagination.css"
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Pagination = ({page, setPage, limit}) => {
  // console.log("Page",page)
  // console.log("setPage",setPage)
  // console.log("Limit",limit)

  const store = useSelector((store) => store.recipeReducer );
console.log(store, "STOE");

  return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "20px",
        }}
      >
        <div style={{cursor : page == 1? 'no-drop' : 'pointer'}} className="btn same" onClick={() =>{ if(page !== 1) setPage(page - 1)}}  >
         <TfiAngleDoubleLeft /> Prev
        </div>
        <button id="btn1">{page}</button> 
        <div
          className="btn2 same" style={{cursor : page == Math.ceil(store.totalRecipe/12)? 'no-drop' : 'pointer'}}
          // onClick={()=>console.log('HI')}
          onClick={() => {
            if(page !== Math.ceil(store.totalRecipe/12)) {
              setPage(page + 1)}
            }
          }
        >
         Next <TfiAngleDoubleRight onClick={()=>console.log("HI")} />
        </div>
      </div>
  );
};