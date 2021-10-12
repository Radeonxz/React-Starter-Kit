/**
 *
 * ThemeProviderContainer
 *
 */
import { ThemeProvider } from "styled-components";

import { ThemeProviderProps } from "./models";
import { LightTheme, DarkTheme } from "../../theme";

const ThemeProviderContainer = ({
  currentTheme,
  children
}: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={currentTheme === "dark" ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
