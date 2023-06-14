import { BreakfastSidebar } from "../Sidebar/BreakfastSidebar";
import "./BreakfastPage.css";
import rlogo from "../../assets/rlogo.png"
import { BsSearch } from "react-icons/bs";
import { BreakfastList } from "../RecipesCategory/BreakfastList";

export const BreakfastPage = () => {
  return (
    <div>
      <div className="banner">
        <div  className="breakfast_cont">
          <div className="breakfast_image">
            <img src={rlogo} alt="" width="100%"/>
          </div>
          <p style={{fontSize: "2rem", fontFamily: "Okra, Helvetica, sans-serif", fontWeight: "400", letterSpacing: "3px", marginTop: "-10px"}}>Discover the Best Health Diet</p>
          <div className="search_div">
            <BsSearch style={{position: "absolute", color:"black", marginRight: "37%"}}/>
            <input type="text" id="input" />
          </div>
        </div>
      </div>
      <div className="breakfast_flex">
        <div className="breakfast_sidebar" data-aos="zoom-out-right">
          <BreakfastSidebar />
        </div>
        <div className="breakfast_List" data-aos="zoom-out-left">
          <BreakfastList />
        </div>
      </div>
    </div>
  );
};
