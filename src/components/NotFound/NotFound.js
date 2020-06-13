/**
 * NotFound
 */
import React from "react";
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
      </div>
    </div>
  );
};

export default NotFound;
