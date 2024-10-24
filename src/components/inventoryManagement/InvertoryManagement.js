import { Outlet } from "react-router-dom";
import InventoryManagementRoutes from "./InvertoryManagementRoutes"

function ProductResearch() {
  return (
    <div>
      <InventoryManagementRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
