import { Routes, Route, Navigate } from "react-router-dom";

import ABTesting from "./ABTesting";
import KeywordREsearch from "./KeywordResearch";
import ImageOptimizor from "./ImageOptimizer";
import ListingAnalyzer from "./ListingAnalyzer";

import Navbar from "./navbar";


function ProductResearchRoutes() {
  return (
    <>
    <div className="sticky top-[55px] z-40 bg-white">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="listing-analyzer" />} />

      <Route path="listing-analyzer" element={<ListingAnalyzer />} />
      <Route path="ab-testing" element={<ABTesting />} />
      <Route path="keyword-research" element={<KeywordREsearch />} />
      <Route path="image-optimizor" element={<ImageOptimizor />} />

    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
