import { Routes, Route, Navigate } from "react-router-dom";
import ProductFinder from "./ProductFinder";
import NicheAnalysis from "./NicheAnalysis";
import CompetitorResearch from "./CompetitorResearch";
import BulkAnalysis from "./BulkAnalysis";
import Navbar from "./navbar";


function ProductResearchRoutes() {
  return (
    <>
    <div className="sticky top-[70px] z-50 bg-white">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="product-finder" />} />
      <Route path="product-finder" element={<ProductFinder />} />
      <Route path="niche-analysis" element={<NicheAnalysis />} />
      <Route path="competitor-research" element={<CompetitorResearch />} />
      <Route path="bulk-analysis" element={<BulkAnalysis />} />
    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
