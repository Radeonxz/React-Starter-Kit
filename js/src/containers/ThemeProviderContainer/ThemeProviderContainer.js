/**
 *
 * ThemeProviderContainer
 *
 */
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "../../theme";

const ThemeProviderContainer = ({ currentTheme, children }) => {
  return (
    <ThemeProvider theme={currentTheme === "dark" ? Dark : Light}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
