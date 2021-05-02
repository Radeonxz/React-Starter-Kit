/**
 *
 * ThemeProviderContainer
 *
 */
import { ThemeProvider } from "styled-components";

import { ThemeProviderProps } from "./models";
import { Light, Dark } from "../../theme";

const ThemeProviderContainer = ({
  currentTheme,
  children
}: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={currentTheme === "dark" ? Dark : Light}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
