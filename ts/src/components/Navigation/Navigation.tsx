/**
 * Navigation
 */
import { NavLink } from "react-router-dom";
import { useIntl } from "react-intl";

import messages from "./messages";
import { NavigationProps } from "./Navigation.model";
import { StyledHeader } from "./styled/Navigation";

const Navigation = ({
  locale,
  currentTheme,
  changeLocale,
  changeTheme
}: NavigationProps) => {
  const intl = useIntl();
  const onClickChangeLocale = () => {
    if (locale === "en-us") return changeLocale("fr-ca");
    return changeLocale("en-us");
  };

  const onClickChangeTheme = () => {
    if (currentTheme === "light") return changeTheme("dark");
    return changeTheme("light");
  };

  return (
    <StyledHeader>
      <div className="header-logo">
        <NavLink to="/">
          <h3>{intl.formatMessage(messages.logoMsg)}</h3>
        </NavLink>
      </div>
      <div className="header-items">
        <ul>
          <li>
            <button onClick={() => onClickChangeLocale()}>
              {intl.formatMessage(messages.changeLocale)}
            </button>
          </li>
          <li>
            <button onClick={() => onClickChangeTheme()}>
              {intl.formatMessage(messages.changeTheme)}
            </button>
          </li>
          <li>
            <NavLink to="/404">404</NavLink>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Navigation;
