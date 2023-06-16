import { RecipeSidebar } from "../Sidebar/RecipeSidebar";
import "./RecipePage.css";
import { RecipeList } from "../RecipesCategory/RecipeList";

export const RecipePage = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="recipe_flex">
        <div className="recipe_sidebar" data-aos="zoom-out-right">
          <RecipeSidebar />
        </div>
        <div className="recipe_List" data-aos="zoom-out-left">
          <RecipeList />
        </div>
      </div>
    </div>
  );
};
