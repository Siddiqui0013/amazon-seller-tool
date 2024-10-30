import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import Overview from "./overview";
import Forecasting from "./forecasting";
import Reordering from "./reordering";
import Fba from "./fbaManagement";


function ProductResearchRoutes() {
  return (
    <>
    <div className="sticky top-[55px] z-40 bg-white">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="overview" />} />
      <Route path="overview" element={<Overview />} />
      <Route path="forecasting" element={<Forecasting />} />
      <Route path="reordering" element={<Reordering />} />
      <Route path="fba-management" element={<Fba />} />
    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
