import { createSelector } from "reselect";

/**
 * Direct selector to the Language state
 */
const selectLanguage = (state: { Language: any }) => state.Language;

/**
 * Select the language locale
 */
export const selectLocale = createSelector(
  selectLanguage,
  (languageState) => languageState.locale
);
