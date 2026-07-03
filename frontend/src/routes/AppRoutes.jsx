import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
