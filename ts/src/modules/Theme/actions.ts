/*
 * Theme actions
 */
import { CHANGE_THEME } from "./constants";

export const changeTheme = (theme: string) => {
  return {
    type: CHANGE_THEME,
    payload: { theme }
  };
};
