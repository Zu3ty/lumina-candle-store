import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const categories = [
  "All",
  "Bestsellers",
  "Signature Collection",
  "Newest Arrivals",
];

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
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
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
              &times;
            </button>
          )}
        </div>

        <button className="search-icon-button" aria-label="Search">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
