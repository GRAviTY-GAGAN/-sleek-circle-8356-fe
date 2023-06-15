import { RecipeSidebar } from "../Sidebar/RecipeSidebar";
import "./RecipePage.css";
import { RecipeList } from "../RecipesCategory/RecipeList";

export const RecipePage = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="breakfast_flex">
        <div className="breakfast_sidebar" data-aos="zoom-out-right">
          <RecipeSidebar />
        </div>
        <div className="breakfast_List" data-aos="zoom-out-left">
          <RecipeList />
        </div>
      </div>
    </div>
  );
};
