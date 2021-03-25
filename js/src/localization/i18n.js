/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

const enUsTranslationMessages = require("./translations/en-us.json");
const frCaTranslationMessages = require("./translations/fr-ca.json");

const DEFAULT_LOCALE = "en-us";

// prettier-ignore
const appLocales = [
    'en-us',
    'fr-ca'
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enUsTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

// prettier-ignore
const translationMessages = {
    'en-us': formatTranslationMessages('en-us', enUsTranslationMessages),
    'fr-ca': formatTranslationMessages('fr-ca', frCaTranslationMessages)
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
