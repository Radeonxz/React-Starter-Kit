/**
 * AppContainer
 */
import { BrowserRouter } from "react-router-dom";

// import containers
import AppRoutes from "./AppRoutes";

const AppContainer = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppContainer;
