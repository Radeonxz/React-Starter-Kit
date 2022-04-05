/**
 *
 * NotFound
 *
 */
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import messages from "./messages";
import "./styled/NotFound.css";

const NotFound = () => {
  const intl = useIntl();
  return (
    <div className="container">
      <div className="wrapper">
        <h1>404</h1>
        <p>{intl.formatMessage(messages.notFound)}</p>
        <NavLink className="App-link" to="/React-Starter-Kit">
          {intl.formatMessage(messages.toHome)}
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
