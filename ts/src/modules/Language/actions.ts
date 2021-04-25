/*
 * Language actions
 */
import { CHANGE_LOCALE } from "./constants";

export const changeLocale = (locale: string) => {
  return {
    type: CHANGE_LOCALE,
    payload: { locale }
  };
};
