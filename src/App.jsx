import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Admin from "./Pages/Admin/Admin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "./components/Admin/AdminNavbar";
import AdminRecipes from "./Pages/Admin/AdminRecipes";
import AdminPrivateRoute from "./components/Admin/AdminPrivateRoute";
import { verifyToken } from "./Redux/Role/actionTypes";
import { RecipePage } from "./Recipes/RecipePages/RecipePage";

function App() {
  const storeAdmin = useSelector((store) => {
    return store.adminReducer.admin;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!storeAdmin) {
      dispatch(verifyToken());
    }

    // console.log(location, storeAdmin);

    if (storeAdmin) {
      navigate(location.state ? location.state : "/admin");
    }
  }, [storeAdmin]);

  return (
    <>
      {!storeAdmin ? <Navbar /> : <AdminNavbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <Admin />
            </AdminPrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route
          path="/adminRecipes"
          element={
            <AdminPrivateRoute>
              <AdminRecipes />
            </AdminPrivateRoute>
          }
        />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
