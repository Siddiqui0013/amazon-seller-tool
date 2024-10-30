import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import SalesAnalytics from "./SalesAnalytics";
import CustomerInsights from "./CustomerInsights";
import CustomReports from "./CustomReports";
import InventortAnalytics from "./InventoryAnalytics";
import ProfitAnalytics from "./ProfitAnalytics";




function ProductResearchRoutes() {
  return (
    <>
    <div className="sticky top-[70px] z-50 bg-white">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="sales-analytics" />} />
      <Route path="sales-analytics" element={<SalesAnalytics />} />
      <Route path="profit-analytics" element={<ProfitAnalytics />} />
      <Route path="inventory-analytics" element={<InventortAnalytics />} />
      <Route path="customer-insights" element={<CustomerInsights />} />
      <Route path="custom-reports" element={<CustomReports />} />



    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
