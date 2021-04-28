/*
 * Language reducer
 */
import { CHANGE_LOCALE } from "./constants";

export interface initialStateInterface {
  locale: string;
}

export const initialState: initialStateInterface = {
  locale: "en-us"
};

const languageReducer = (
  state = initialState,
  action: { type: any; payload: { locale: string } }
) => {
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
