import React from "react";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight,  } from "react-icons/tfi";
import "./Pagination.css"

export const Pagination = ({page, setPage, limit}) => {
  return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "20px",
        }}
      >
        <button className="btn same" onClick={() => setPage(page - 1)} disabled={page <= 1} >
         <TfiAngleDoubleLeft /> Prev
        </button>
        <button id="btn1">{page}</button>
        <button
          className="btn2 same"
          onClick={() => setPage(page + 1)}
          disabled={page === limit}
        >
         Next <TfiAngleDoubleRight />
        </button>
      </div>
  );
};