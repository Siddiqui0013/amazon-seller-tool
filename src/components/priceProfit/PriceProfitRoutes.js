import { Routes, Route, Navigate } from "react-router-dom";
import PriceTracker from "./PriceTracker";
import BuyBoxAnalysis from "./BuyBoxAnalysis";
import ProfitCalculator from "./ProfitCalculator";
import RepricingRules from "./RepricingRules";
import Navbar from "./navbar";


function ProductResearchRoutes() {
  return (
    <>
    <div className="sticky top-[55px] z-40 bg-white">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="price-tracker" />} />
      <Route path="price-tracker" element={<PriceTracker />} />
      <Route path="buybox-analysis" element={<BuyBoxAnalysis />} />
      <Route path="profit-calculator" element={<ProfitCalculator />} />
      <Route path="repricing-rules" element={<RepricingRules />} />
    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
