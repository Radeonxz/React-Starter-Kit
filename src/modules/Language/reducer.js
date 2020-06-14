/*
 * Language reducer
 */
import { CHANGE_LOCALE } from "./constants";

export const initialState = {
  locale: "en-us"
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      if (state.locale !== action.locale) {
        return {
          ...state,
          locale: action.locale
        };
      }

    default:
      return state;
  }
};

export default languageReducer;
