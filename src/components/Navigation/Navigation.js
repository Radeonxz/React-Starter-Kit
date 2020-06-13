/**
 * Navigation
 */
import React from "react";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import messages from "./messages";
import "./styled/Navigation.css";

const Navigation = ({ locale, changeLocale }) => {
  const intl = useIntl();

  const onClickChangeLocale = () => {
    if (locale === "en-us") return changeLocale("fr-ca");
    return changeLocale("en-us");
  };

  return (
    <header className="main-navigation">
      <div className="main-navigation_logo">
        <NavLink to="/">
          <h3>{intl.formatMessage(messages.logo)}</h3>
        </NavLink>
      </div>
      <div className="main-navigation_items">
        <ul>
          <li>
            <button onClick={() => onClickChangeLocale()}>
              {intl.formatMessage(messages.changeLocale)}
            </button>
          </li>
          <li>
            <NavLink to="/404">404</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
