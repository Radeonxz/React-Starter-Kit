/*
 * Theme reducer
 */
import { CHANGE_THEME } from "./constants";

export const initialState = {
  currentTheme: "light"
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      const { theme } = action.payload;
      if (state.currentTheme !== theme) {
        return {
          ...state,
          currentTheme: theme
        };
      }

    default:
      return state;
  }
};

export default themeReducer;
