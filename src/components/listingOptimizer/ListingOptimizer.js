import { Outlet } from "react-router-dom";
import ListingOptimizerRoutes from "./ListingOptimizerRoutes";


function ProductResearch() {
  return (
    <div>
      <ListingOptimizerRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
