import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

// Define search categories for the dropdown
const categories = [
  "All",
  "Bestsellers",
  "Signature Collection",
  "Newest Arrivals",
];

const SearchBar = ({ onSearch, onCategoryChange }) => {
  const [query, setQuery] = useState(""); // State for search input
  const [category, setCategory] = useState("All"); // State for selected category

  // Handle input value change
  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    // Call parent onSearch if provided
    if (onSearch) onSearch(val, category);
  };

  // Handle category dropdown change
  const handleCategoryChange = (e) => {
    const val = e.target.value;
    setCategory(val);
    // Call parent onCategoryChange if provided
    if (onCategoryChange) onCategoryChange(val, query);
  };

  // Clear search input and notify parent
  const clearInput = () => {
    setQuery("");
    if (onSearch) onSearch("", category);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        {/* Category dropdown */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Search input with clear (×) button */}
        <div className="search-input-wrapper">
          <input
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={handleChange}
            className="search-input"
          />
          {/* Show clear button only when query is not empty */}
          {query && (
            <button
              onClick={clearInput}
              className="clear-button"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>

        {/* Search button with search icon */}
        <button className="search-icon-button" aria-label="Search">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
