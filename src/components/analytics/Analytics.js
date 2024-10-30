import { Outlet } from "react-router-dom";
import AnalyticsRoutes from "./AnalyticsRoutes";

function ProductResearch() {
  return (
    <div>
      <AnalyticsRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
