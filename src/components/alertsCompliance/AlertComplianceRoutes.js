import { Routes, Route, Navigate } from "react-router-dom";
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
    </Routes>
    </>
  );
}

export default ProductResearchRoutes;
