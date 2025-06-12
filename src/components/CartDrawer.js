import React from "react";
import "./CartDrawer.css"; // style separately

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Cart</h2>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="cart-body">
        <p>Your cart is empty.</p>
        <p>Unfortunately we could not find any products in your cart.</p>
        <button className="continue-btn">Continue Shopping →</button>
      </div>
    </div>
  );
};

export default CartDrawer;
