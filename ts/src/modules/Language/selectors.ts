import { createSelector } from "reselect";

/**
 * Direct selector to the Language state
 */
const selectLanguage = (state) => state.Language;

/**
 * Select the language locale
 */
export const selectLocale = createSelector(
  selectLanguage,
  (languageState) => languageState.locale
);
