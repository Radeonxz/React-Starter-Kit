/**
 * Navigation
 */
import React from "react";
import { NavLink } from "react-router-dom";
import "./styled/Navigation.css";

const Navigation = ({ changeLocale }) => {
  return (
    <header className="main-navigation">
      <div className="main-navigation_logo">
        <h3>React Start Kit</h3>
      </div>
      <div className="main-navigation_items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => changeLocale("fr-ca")}>Change Locale</li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
