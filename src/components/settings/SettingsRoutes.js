import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import AccountSettings from "./AccountSettings";
import API from "./API";
import Billing from "./Biling";
import Notification from "./Notification";
import AdditionalSettings from "./AdditionalSettings";


function ProductResearchRoutes() {
  return (
    <>
    <div className="sticky top-[55px] z-40 bg-white">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="account-settings" />} />
      <Route path="account-settings" element={<AccountSettings />} />
      <Route path="api" element={<API />} />
      <Route path="billing" element={<Billing />} />
      <Route path="notification" element={<Notification />} />
      <Route path="additional-settings" element={<AdditionalSettings />} />
    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
