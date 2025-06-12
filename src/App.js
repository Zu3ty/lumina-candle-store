import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PromoBanner from "./components/PromoBanner";
import LandingPage from "./pages/LandingPage";
import StorePage from "./pages/StorePage";
import CartDrawer from "./components/CartDrawer"; // Adjust path if needed
import Footer from "./components/Footer";

import "./App.css";

function AppContent() {
  const location = useLocation();

  // Routes where PromoBanner should be hidden
  const hideOnRoutes = ["/cart"];
  const isHiddenRoute = hideOnRoutes.includes(location.pathname);

  const handleSearch = (query, category) => {
    console.log("Search:", query, "Category:", category);
  };

  const handleCategoryChange = (category, query) => {
    console.log("Category changed to:", category, "Query:", query);
  };

  return (
    <>
      <Header />
      <SearchBar
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />

      {!isHiddenRoute && <PromoBanner />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartDrawer />} />
      </Routes>

      {/* Footer always shown */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
