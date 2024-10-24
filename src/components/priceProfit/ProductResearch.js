import { Outlet } from "react-router-dom";
import ProductResearchRoutes from "./productResearchRoutes"


function ProductResearch() {
  return (
    <div>
      <ProductResearchRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
