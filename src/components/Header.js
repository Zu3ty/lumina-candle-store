import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaStore,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaHeart,
} from "react-icons/fa";

import logo from "../assets/brandname.png";
import "./Header.css";

/**
 * Header component for Lumina store.
 * Displays navigation with icons for home, store, wishlist, cart, and user login/logout.
 * Shows badges for cart and wishlist item counts.
 * Accessible via keyboard and screen readers.
 */
function Header({
  currentUser, // Logged-in username (string or null)
  onLogoutClick, // Function to call on logout button click
  onLoginClick, // Function to call on login icon click
  onCartClick, // Function to open cart drawer
  onWishlistClick, // Function to open wishlist drawer
  cartCount, // Number of items in cart
  wishlistCount, // Number of items in wishlist
}) {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo linking to home page */}
        <NavLink to="/" className="logo-link" aria-label="Lumina Home">
          <img src={logo} alt="Lumina Logo" className="logo" />
        </NavLink>

        {/* Navigation icons list */}
        <ul className="nav-links">
          {/* Home link with icon */}
          <li className="nav-icon" data-tooltip="Home">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "icon-btn active" : "icon-btn"
              }
            >
              <FaHome aria-hidden="true" />
            </NavLink>
          </li>

          {/* Store link with icon */}
          <li className="nav-icon" data-tooltip="Store">
            <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive ? "icon-btn active" : "icon-btn"
              }
            >
              <FaStore aria-hidden="true" />
            </NavLink>
          </li>

          {/* Wishlist icon button with badge */}
          <li
            className="nav-icon"
            onClick={onWishlistClick} // Open wishlist drawer on click
            style={{ cursor: "pointer" }}
            aria-label="Open wishlist"
            tabIndex={0} // Make focusable for keyboard users
            onKeyDown={(e) => e.key === "Enter" && onWishlistClick()} // Allow Enter key to activate
            data-tooltip="Wishlist"
          >
            <div style={{ position: "relative" }}>
              <FaHeart className="icon-btn" aria-hidden="true" />
              {/* Show badge only if there are wishlist items */}
              {wishlistCount > 0 && (
                <span className="wishlist-badge">{wishlistCount}</span>
              )}
            </div>
          </li>

          {/* Cart icon button with badge */}
          <li
            className="nav-icon"
            onClick={onCartClick} // Open cart drawer on click
            style={{ cursor: "pointer" }}
            aria-label={`Shopping cart with ${cartCount} items`}
            tabIndex={0} // Keyboard accessible
            onKeyDown={(e) => e.key === "Enter" && onCartClick()} // Enter key activates
            data-tooltip="Cart"
          >
            <div style={{ position: "relative" }}>
              <FaShoppingCart className="icon-btn" aria-hidden="true" />
              {/* Show badge only if cart has items */}
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </li>

          {/* User login/logout area */}
          <li
            className="nav-icon"
            data-tooltip={currentUser ? "Logout" : "Login"}
          >
            {currentUser ? (
              // If user logged in, show welcome message and logout button
              <div className="welcome-user">
                Welcome, <span className="username">{currentUser}</span>
                <button
                  onClick={onLogoutClick}
                  className="logout-btn"
                  aria-label="Logout"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            ) : (
              // If no user logged in, show login icon
              <FaUser
                className="icon-btn"
                onClick={onLoginClick}
                style={{ cursor: "pointer" }}
                aria-label="Login"
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
