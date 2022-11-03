import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coups-de-coeur"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              Favoris
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>NETFAV!</h1>
    </div>
  );
};

export default Header;
