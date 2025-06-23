import React from "react";
import { useNavigate } from "react-router-dom"; // React Router hook for navigation
import "./PromoBanner.css"; // Importing the banner-specific styling

// PromoBanner component displays a promotional banner with a call-to-action button
const PromoBanner = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate to another route

  // Handle button click to navigate to the store page
  const handleClick = () => {
    navigate("/store"); // Redirects user to the /store route
  };

  return (
    <div className="promo-banner">
      <div className="promo-content">
        {/* Main promotional heading */}
        <h1 className="promo-title">FLAMING HOT SALE</h1>

        {/* Subheading with discount info */}
        <h2 className="promo-subtitle">50% off Selected Items</h2>

        {/* Promotional message */}
        <p className="promo-message">While stocks last!</p>

        {/* Small footer note */}
        <p className="promo-footer">Online * T&C’s apply</p>

        {/* Call-to-action button that takes users to the store */}
        <button className="promo-btn" onClick={handleClick}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
