import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/nav/navbar";
import ProductResearch from "./components/productResearch/ProductResearch"; 
import SearchBar from "./components/searchbar/searchBar";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1">
          <SearchBar/>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="product-research/*" element={<ProductResearch />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
