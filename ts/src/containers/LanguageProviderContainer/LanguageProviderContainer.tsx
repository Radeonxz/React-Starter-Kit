/**
 *
 * LanguageProviderContainer
 *
 */
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

import { LanguageProviderProps } from "./models";

const LanguageProviderContainer = ({
  locale,
  messages,
  children
}: LanguageProviderProps) => {
  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProviderContainer;
