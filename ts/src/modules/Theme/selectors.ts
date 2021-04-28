import { createSelector } from "reselect";

/**
 * Direct selector to the Theme state
 */
const selectTheme = (state: { Theme: any }) => state.Theme;

/**
 * Select the theme
 */
export const selectCurrentTheme = createSelector(
  selectTheme,
  (themeState) => themeState.currentTheme
);
