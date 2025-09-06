import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="list-unstyled d-flex">
        <li className="me-3">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="me-3">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="me-3">
          <NavLink to={"/products"}>Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
