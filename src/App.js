import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import SearchBar from "./components/searchbar/searchBar";
import Navbar from "./components/nav/navbar";

import Dashboard from "./components/dashboard/dashboard";
import ProductResearch from "./components/productResearch/ProductResearch"; 
import InventoryManagement from "./components/inventoryManagement/InvertoryManagement"
import PriceProfit from "./components/priceProfit/PriceProfit"
import ListingOptimizer from "./components/listingOptimizer/ListingOptimizer"

function App() {
  const location = useLocation();
  console.log(location.pathname);

  const authRoutes = ["/signin", "/signup"];

  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {!isAuthPage && <Navbar />}
      <div className="flex-1">
        {!isAuthPage && <SearchBar />}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="product-research/*" element={<ProductResearch />} />
          <Route path="inventory-management/*" element={<InventoryManagement />} />
          <Route path="price-profit/*" element={<PriceProfit />} />
          <Route path="listing-optimizer/*" element={<ListingOptimizer />} />
          
          {/* 
          <Route path="alerts-compliance/*" element={<AlertCompliance />} />
          <Route path="analytics/*" element={<Analytics />} />
          <Route path="settings/*" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
