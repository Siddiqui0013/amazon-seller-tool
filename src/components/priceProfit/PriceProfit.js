import { Outlet } from "react-router-dom";
import PriceProfitRoutes from "./PriceProfitRoutes";


function ProductResearch() {
  return (
    <div>
      <PriceProfitRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
