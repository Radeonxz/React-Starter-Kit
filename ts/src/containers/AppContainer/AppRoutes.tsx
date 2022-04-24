/**
 * AppRoutes
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
