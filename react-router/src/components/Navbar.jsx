// components/Navbar.jsx
// navbar con link attivi
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // classi dinamiche per stato attivo

  const linkClass = ({ isActive }) =>
    `nav-link px-3 ${isActive ? "active" : "text-body-secondary"}`;

  return (
    <nav className="border-bottom">
      <div className="container">
        <ul className="nav nav-pills py-3">
          {/* usa end per home */}
          <li className="nav-item">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
