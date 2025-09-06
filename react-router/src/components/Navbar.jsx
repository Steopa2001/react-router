import React from "react";
import { link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="list-unstyled d-flex">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
