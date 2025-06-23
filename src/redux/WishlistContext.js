import React, { createContext, useContext, useState } from "react";

// Create a context for the wishlist
const WishlistContext = createContext();

// Provider component to wrap app and provide wishlist state & actions
export const WishlistProvider = ({ children }) => {
  // State to keep track of wishlist items (array of product objects)
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add a product to the wishlist if it's not already there
  const addToWishlist = (product) => {
    if (!wishlistItems.find((item) => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  // Remove a product from the wishlist by its ID
  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  // Move an item from wishlist to cart:
  // Finds the item, adds it to cart via callback, then removes from wishlist
  const moveToCart = (id, addToCart) => {
    const item = wishlistItems.find((item) => item.id === id);
    if (item) {
      addToCart(item);
      removeFromWishlist(id);
    }
  };

  // Checks if a product is currently in the wishlist by ID
  const isWishlisted = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems, // Current wishlist items
        addToWishlist, // Function to add an item
        removeFromWishlist, // Function to remove an item
        moveToCart, // Function to move item to cart
        isWishlisted, // Check if item is in wishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook for easy access to wishlist context in components
export const useWishlist = () => useContext(WishlistContext);
