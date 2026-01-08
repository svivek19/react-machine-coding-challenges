import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-item" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-item" to={"/projects"}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-item" to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
