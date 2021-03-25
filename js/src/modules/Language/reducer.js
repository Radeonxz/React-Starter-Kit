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
      const { locale } = action.payload;
      return {
        ...state,
        locale
      };

    default:
      return state;
  }
};

export default languageReducer;
