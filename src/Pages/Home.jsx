import "./Home.css";
import MultipleItems from "../components/Carousel1";
import Subscription from "../components/Subscription";
import RecipeCarousel from "../components/RecipeCarousel";
import SummerRecipes from "../components/SummerRecipes";
import NewCarousel from "../components/NewCarousel";
import Last from "../components/Last";

const Home = () => {
  return (
    <>
      <div className="home__mainCont">
        <MultipleItems />
        <SummerRecipes />
        <RecipeCarousel />
        <NewCarousel />
        <Last />
      </div>
      <Subscription />
    </>
  );
};

export default Home;
