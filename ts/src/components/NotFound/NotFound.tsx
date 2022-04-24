/**
 * NotFound
 */
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

import messages from "./messages";
import "./styled/NotFound.css";

const NotFound = () => {
  const intl = useIntl();
  return (
    <div className="container">
      <div className="wrapper">
        <h1>404</h1>
        <p>{intl.formatMessage(messages.notFoundMsg)}</p>
        <Link className="App-link" to="/">
          {intl.formatMessage(messages.toHome)}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
