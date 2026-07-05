import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

 {/* General Page Locations */}
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

      {/* General Page Locations */}
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Route>
    </Routes>
  );
}

export default AppRoutes;
