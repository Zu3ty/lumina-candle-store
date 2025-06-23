import React, { useState } from "react";
import StorePage from "./StorePage";
import CartDrawer from "./CartDrawer";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if product already in cart
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new product with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart drawer on adding
  };

  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <StorePage addToCart={addToCart} />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} cart={cart} />
    </>
  );
};

export default Shop;
