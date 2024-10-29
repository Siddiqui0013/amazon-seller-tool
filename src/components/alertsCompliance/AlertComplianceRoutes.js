import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import AlertCenter from "./AlertCenter";
import BrandProtection from "./BrandProtection"
import Compliance from "./ComplianceChecker"
import FeedbackManager from "./FeedbackManager"



function ProductResearchRoutes() {
  return (
    <>
    <div className="sticky top-[70px] z-50 bg-white">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="alert-center" />} />
      <Route path="alert-center" element={<AlertCenter />} />
      <Route path="brand-protection" element={<BrandProtection />} />
      <Route path="compliance-checker" element={<Compliance />} />
      <Route path="feedback-manager" element={<FeedbackManager />} />
    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
