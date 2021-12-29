import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        exact
        to="/"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        Accueil
      </NavLink>
      <NavLink
        exact
        to="/a-propos"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        À propos
      </NavLink>
      <NavLink
        exact
        to="/news"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        News
      </NavLink>
    </div>
  );
};

export default Navigation;
