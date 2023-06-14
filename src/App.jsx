import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import {BreakfastPage} from "./Recipes/RecipePages/BreakfastPage"

function App() {
  console.log("Hi");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe" element={<BreakfastPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
