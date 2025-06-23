import React from "react";
import "./CartDrawer.css"; // Reuse the drawer styling from CartDrawer
import { useWishlist } from "../redux/WishlistContext";
import { useCart } from "../redux/CartContext"; // Import cart context to add items to cart

/**
 * WishlistDrawer component renders a sidebar drawer displaying wishlist items.
 * Props:
 * - isOpen (boolean): controls drawer visibility
 * - onClose (function): callback to close the drawer
 */
const WishlistDrawer = ({ isOpen, onClose }) => {
  // Destructure wishlist data and methods from wishlist context
  const { wishlistItems, removeFromWishlist, moveToCart } = useWishlist();
  // Destructure addToCart function from cart context
  const { addToCart } = useCart();

  return (
    <div
      className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`} // Toggle show class based on isOpen
      tabIndex="-1" // Make div focusable for accessibility
      style={{ visibility: isOpen ? "visible" : "hidden" }} // Hide visually when closed
    >
      {/* Drawer Header */}
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Your Wishlist</h5>
        {/* Close button */}
        <button type="button" className="btn-close" onClick={onClose} />
      </div>

      {/* Drawer Body */}
      <div className="offcanvas-body">
        {wishlistItems.length === 0 ? (
          // Show message if wishlist is empty
          <p className="text-muted">Your wishlist is empty.</p>
        ) : (
          // Map over wishlist items and render each
          wishlistItems.map((item) => (
            <div
              key={item.id}
              className="wishlist-item d-flex mb-3 align-items-center"
            >
              {/* Product image */}
              <img
                src={item.image}
                alt={item.name}
                className="me-3" // margin end for spacing
                style={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <div className="flex-grow-1">
                {/* Product name */}
                <h6 className="mb-1">{item.name}</h6>
                {/* Product price formatted */}
                <p className="mb-1">R{item.price.toFixed(2)}</p>
                <div>
                  {/* Button to move item from wishlist to cart */}
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => moveToCart(item.id, addToCart)}
                  >
                    Move to Cart
                  </button>
                  {/* Button to remove item from wishlist */}
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistDrawer;
