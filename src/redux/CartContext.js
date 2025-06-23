import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for the cart
const CartContext = createContext();

/**
 * CartProvider component manages cart state and provides cart actions.
 * Wrap your app or components with this provider to access cart context.
 */
export const CartProvider = ({ children }) => {
  // Initialize cartItems state from localStorage or start with empty array
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("lumina-cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Effect to sync cartItems state to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("lumina-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Adds a product to the cart.
   * If the product already exists, increments the quantity by 1.
   * Otherwise, adds the product with quantity 1.
   * @param {Object} product - The product object to add
   */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product is already in cart
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // Increment quantity for existing product
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  /**
   * Removes a product from the cart by its productId.
   * @param {number|string} productId - ID of the product to remove
   */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  /**
   * Updates the quantity of a product in the cart.
   * @param {number|string} productId - ID of the product to update
   * @param {number} newQty - The new quantity to set
   */
  const updateQty = (productId, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  /**
   * Moves a product from the cart to the wishlist.
   * Currently only removes it from the cart.
   * You can extend this to also add to wishlist context if created.
   * @param {number|string} productId - ID of product to move
   */
  const moveToWishlist = (productId) => {
    removeFromCart(productId);
    // TODO: Add product to wishlist context here if applicable
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        moveToWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context in components
export const useCart = () => useContext(CartContext);
