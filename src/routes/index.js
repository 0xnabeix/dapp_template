import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </MainLayout>
  )
}

export default AppRoutes;