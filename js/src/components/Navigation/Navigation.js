/**
 *
 * Navigation
 *
 */
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import messages from "./messages";
import { StyledHeader } from "./styled/Navigation";

const Navigation = ({ locale, currentTheme, changeLocale, changeTheme }) => {
  const intl = useIntl();

  const onClickChangeLocale = () => {
    if (locale === "en-us") return changeLocale("fr-ca");
    return changeLocale("en-us");
  };

  const onClickChangeTheme = () => {
    if (currentTheme === "light") return changeTheme("dark");
    return changeTheme("light");
  };

  const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  };

  return (
    <StyledHeader>
      <div className="header-logo">
        <Link to="/React-Starter-Kit">
          <h3>{intl.formatMessage(messages.logo)}</h3>
        </Link>
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
            <Link to={`/${generateUID()}`}>404</Link>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Navigation;
