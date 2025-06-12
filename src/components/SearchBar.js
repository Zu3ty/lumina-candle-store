import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const categories = ["All", "Candles", "Wax Melts", "Accessories", "Gift Sets"];

const SearchBar = ({ onSearch, onCategoryChange }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) onSearch(val, category);
  };

  const handleCategoryChange = (e) => {
    const val = e.target.value;
    setCategory(val);
    if (onCategoryChange) onCategoryChange(val, query);
  };

  const clearInput = () => {
    setQuery("");
    if (onSearch) onSearch("", category);
  };

  return (
    <div className="search-bar-container">
      {/* Category dropdown on the left */}
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

      {/* Search input with clear button */}
      <div className="search-input-wrapper">
        <input
          type="search"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
          className="search-input"
        />
        {query && (
          <button
            onClick={clearInput}
            className="clear-button"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Search icon button */}
      <button className="search-icon-button" aria-label="Search">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
