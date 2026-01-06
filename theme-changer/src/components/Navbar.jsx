import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <div>
        <Link className="nav-items" to={"/"}>
          Home
        </Link>
        <Link className="nav-items" to={"/about"}>
          About
        </Link>
        <Link className="nav-items" to={"/contact"}>
          Contact
        </Link>
      </div>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
