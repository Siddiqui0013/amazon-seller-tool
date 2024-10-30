import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import SearchBar from "./components/searchbar/searchBar";
import Navbar from "./components/nav/navbar";

import Dashboard from "./components/dashboard/dashboard";
import ProductResearch from "./components/productResearch/ProductResearch"; 
import InventoryManagement from "./components/inventoryManagement/InvertoryManagement";
import PriceProfit from "./components/priceProfit/PriceProfit";
import ListingOptimizer from "./components/listingOptimizer/ListingOptimizer";
import AlertCompliance from "./components/alertsCompliance/AlertCompliance";
import Settings from "./components/settings/Settings";
import Analytics from "./components/analytics/Analytics";

import "@fontsource/lato"

import { auth, onAuthStateChanged } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const location = useLocation();

  const authRoutes = ["/signin", "/signup"];

  const isAuthPage = authRoutes.includes(location.pathname);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 

      if (currentUser && isAuthPage) {
        navigate("/"); 
      } else if (!currentUser && !isAuthPage) {
        navigate("/signin"); 
      }
    });

    return () => unsubscribe();
  }, [navigate, location.pathname, isAuthPage]);

  // Show a loading indicator until Firebase resolves the user state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex ">
      {!isAuthPage && <Navbar />}
      <div className="flex-1">
        {!isAuthPage && <SearchBar />}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={user ? <Dashboard /> : <SignIn />} />
          <Route path="product-research/*" element={<ProductResearch />} />
          <Route path="inventory-management/*" element={<InventoryManagement />} />
          <Route path="price-profit/*" element={<PriceProfit />} />
          <Route path="listing-optimizer/*" element={<ListingOptimizer />} />

          <Route path="alerts-compliance/*" element={<AlertCompliance />} />
          <Route path="analytics/*" element={<Analytics />} /> 
          <Route path="settings/*" element={<Settings />} />
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
