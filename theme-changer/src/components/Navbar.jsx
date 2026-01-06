import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
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
  );
};

export default Navbar;
