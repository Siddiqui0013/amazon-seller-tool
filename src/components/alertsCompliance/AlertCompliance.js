import { Outlet } from "react-router-dom";
import AlertComplianceRoutes from "./alertComplianceRoutes";

function ProductResearch() {
  return (
    <div>
      <AlertComplianceRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
