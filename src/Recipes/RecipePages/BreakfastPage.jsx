import { BreakfastSidebar } from "../Sidebar/BreakfastSidebar";
import "./BreakfastPage.css";
import rlogo from "../../assets/rlogo.png"
import { BsSearch } from "react-icons/bs";

export const BreakfastPage = () => {
  return (
    <div>
      <div className="banner">
        <div  className="breakfast_p">
          {/* <p>RECIPES</p> */}
          <div className="breakfast_image">
            <img src={rlogo} alt="" width="100%"/>
          </div>
          <p style={{fontSize: "2rem", fontFamily: "Okra, Helvetica, sans-serif", fontWeight: "400", letterSpacing: "3px", marginTop: "-10px"}}>Discover the Best Health Diet</p>
          <div>
            <span><BsSearch className="breakfast_search"/></span>
            <input type="text" name="" id="breakfast_input" />
          </div>
        </div>
      </div>
      <div className="breakfast_flex">
        <div className="breakfast_sidebar" data-aos="zoom-out-right">
          <BreakfastSidebar />
        </div>
        <div className="breakfast_List" data-aos="zoom-out-left"></div>
      </div>
    </div>
  );
};
