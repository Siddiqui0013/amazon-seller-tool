import { Outlet } from "react-router-dom";
import SettingsRoutes from "./SettingsRoutes";

function ProductResearch() {
  return (
    <div>
      <SettingsRoutes />
      <Outlet />
    </div>
  );
}

export default ProductResearch;
