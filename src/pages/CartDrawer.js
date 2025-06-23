import React, { useState } from "react";
import "./CartDrawer.css";
import "bootstrap/dist/css/bootstrap.min.css";

// CartDrawer component for rendering a sliding cart sidebar
const CartDrawer = ({
  isOpen, // boolean: controls visibility of the drawer
  onClose, // function: closes the drawer
  cartItems = [], // array: list of cart items
  onRemoveItem, // function: remove item from cart
  onUpdateQty, // function: update quantity of item
  onMoveToWishlist, // function: move item to wishlist
}) => {
  const [shippingMethod, setShippingMethod] = useState("standard"); // track selected shipping
  const [showHelp, setShowHelp] = useState(false); // toggle shipping info section

  // handle change in shipping method dropdown
  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  // calculate total cart price
  const total = cartItems.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  );

  return (
    <div
      className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ visibility: isOpen ? "visible" : "hidden" }}
      aria-labelledby="cartDrawerLabel"
    >
      {/* Header with title and close button */}
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartDrawerLabel">
          Cart
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>

      {/* Body with cart content */}
      <div className="offcanvas-body d-flex flex-column justify-content-between">
        <div>
          {/* Empty cart display */}
          {cartItems.length === 0 ? (
            <div className="text-center mt-4">
              <p>Your cart is empty.</p>
              <p>No products found in your cart.</p>
              <button className="shop btn btn-primary mt-3" onClick={onClose}>
                Continue Shopping →
              </button>
            </div>
          ) : (
            // List of cart items
            <ul className="list-group mb-4">
              {cartItems.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  {/* Product image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-thumbnail me-3"
                    style={{
                      width: "80px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Product info and quantity controls */}
                  <div className="flex-grow-1">
                    <h6>{product.name}</h6>
                    <p className="mb-1">R{product.price.toFixed(2)}</p>

                    <div className="d-flex align-items-center gap-2">
                      <label
                        htmlFor={`qty-${product.id}`}
                        className="form-label mb-0 me-1"
                      >
                        Qty:
                      </label>
                      <input
                        id={`qty-${product.id}`}
                        type="number"
                        className="form-control"
                        value={quantity}
                        min="1"
                        style={{ width: "70px" }}
                        onChange={(e) =>
                          onUpdateQty(product.id, parseInt(e.target.value))
                        }
                      />

                      {/* Wishlist button */}
                      <button
                        type="button"
                        className="wishlist-button"
                        onClick={() => onMoveToWishlist(product.id)}
                      >
                        <span className="plus-icon">+</span>
                        <span className="heart-icon">♡</span>
                      </button>
                    </div>
                  </div>

                  {/* Remove item button */}
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => onRemoveItem(product.id)}
                    title="Remove item"
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* If cart is not empty: shipping method and checkout */}
          {cartItems.length > 0 && (
            <>
              {/* Shipping method selection */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Shipping Method
                </label>
                <select
                  className="form-select"
                  value={shippingMethod}
                  onChange={handleShippingChange}
                >
                  <option value="standard">Standard Shipping (3-5 days)</option>
                  <option value="express">Express Shipping (1-2 days)</option>
                  <option value="pickup">Store Pickup (Free)</option>
                </select>

                {/* Toggle help section */}
                <button
                  className="btn btn-link p-0 mt-1"
                  onClick={() => setShowHelp(!showHelp)}
                >
                  Need Help?
                </button>

                {/* Help details */}
                {showHelp && (
                  <div className="alert alert-info mt-2 small">
                    <strong>Shipping Options:</strong>
                    <br />
                    - Standard: Affordable & reliable, 3–5 days.
                    <br />
                    - Express: Fast delivery within 1–2 days.
                    <br />- Pickup: Collect from store for free.
                  </div>
                )}
              </div>

              {/* Total price */}
              <div className="d-flex justify-content-between fw-bold fs-5 mt-4">
                <span>Total:</span>
                <span>R{total.toFixed(2)}</span>
              </div>

              {/* Checkout button */}
              <button className="btn btn-success w-100 mt-3">
                Proceed to Checkout →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
