import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">R{product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
