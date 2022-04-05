/**
 *
 * Welcome
 *
 */
import { useIntl } from "react-intl";
import messages from "./messages";
import "./styled/Welcome.css";
import logo from "./logo.svg";

const Welcome = () => {
  const intl = useIntl();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{intl.formatMessage(messages.welcomeMsg)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {intl.formatMessage(messages.learnMsg)}
        </a>
      </header>
    </div>
  );
};

export default Welcome;
