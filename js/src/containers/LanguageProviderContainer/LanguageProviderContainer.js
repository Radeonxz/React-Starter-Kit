/**
 *
 * LanguageProviderContainer
 *
 */
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

const LanguageProviderContainer = ({ locale, messages, children }) => {
  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

LanguageProviderContainer.propTypes = {
  /**
   * Current locale
   */
  locale: PropTypes.string,
  /**
   * Messages string for react-intl
   */
  messages: PropTypes.object,
  /**
   * To render children
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default LanguageProviderContainer;
