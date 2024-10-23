import { Outlet } from "react-router-dom";
import ProductResearchRoutes from "./productResearchRoutes"


function ProductResearch() {
  return (
    <div className="p-4">
      <ProductResearchRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
