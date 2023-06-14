
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}>Login</NavLink> &nbsp;&nbsp;
      <NavLink to={"/signup"}>Signup</NavLink> &nbsp;&nbsp;
      <NavLink to={"/home"}>Home</NavLink> &nbsp;&nbsp;
    </div>
  );
};

export default Navbar;
